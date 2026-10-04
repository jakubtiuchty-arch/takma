const fs = require('fs'), ts = require('typescript'), assert = require('node:assert/strict'), path = require('path'), Module = require('module');
require.extensions['.ts'] = (m, f) => m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'), {compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,esModuleInterop:true}}).outputText,f);
const pn = 'NLS-MT9557-W5', adapter = 'ADP710';
let stockRows=[], jtRows=[], calls=[], saved=[];
let liveRows=[{partNumber:pn,found:true,inventory:153,incomingQty:20,totalStock:173,unitPrice:10,currency:'EUR',availability:'available',deliveryText:'Wysyłka 2–3 dni',lastSync:new Date().toISOString()}];
const emptyWrite = async () => ({});
const prisma = {
 stockCache:{findMany:async()=>stockRows,update:emptyWrite,upsert:emptyWrite},
 jarltechStockCache:{findMany:async()=>jtRows,upsert:async args=>{saved.push(args);return args.create;}}
};
const original=Module._load;
Module._load=function(id,parent,main){
 if(id==='@/lib/db')return {prisma};
 if(id==='@/lib/ingram')return {lookupStock:async pns=>pns.map(partNumber=>({partNumber,found:true,stockPL:26,stockDE:0,inDelivery:40,ingramPrice:20}))};
 if(id==='@/lib/bluestar')return {lookupStock:async()=>[]};
 if(id==='@/lib/jarltech')return {lookupStock:async pns=>{calls.push(pns);return liveRows.filter(r=>pns.includes(r.partNumber));}};
 if(id.startsWith('@/'))return original.call(this,path.resolve('src',id.slice(2)),parent,main);
 return original.call(this,id,parent,main);
};
global.fetch=async()=>({ok:true,json:async()=>({rates:[{mid:4}]})});
const {lookupUnifiedStock}=require('../src/lib/unified-stock.ts');
(async()=>{
 stockRows=[{partNumber:pn,found:true,price:100,priceBrutto:123,stockPL:26,stockDE:0,inDelivery:40,totalStock:66,availability:'available',deliveryText:'Wysyłka 24 h',lastSync:new Date()}];
 let row=(await lookupUnifiedStock([pn])).body.results[0];
 assert.deepEqual([row.stockPL,row.stockDE,row.availability,row.price],[26,153,'available',100], 'PL stock must not suppress live DE stock or change the cached sale price');
 assert.equal(calls.length,1);assert(saved.some(x=>x.where.partNumber===pn));
 calls=[];saved=[];stockRows=[];
 row=(await lookupUnifiedStock([pn])).body.results[0];
 assert.deepEqual([row.stockPL,row.stockDE,row.availability],[26,153,'available'], 'new uncached Newland PN must also include Jarltech');
 assert(saved.some(x=>x.create.inventory===153));
 calls=[];stockRows=[];liveRows=[{...liveRows[0],partNumber:adapter,inventory:0,incomingQty:10,totalStock:10,availability:'on-order'}];
 // Incoming quantity alone must never become an available warehouse.
 stockRows=[{partNumber:adapter,found:true,price:100,priceBrutto:123,stockPL:0,stockDE:0,inDelivery:0,totalStock:0,availability:'unavailable',deliveryText:'Niedostępny',lastSync:new Date()}];
 row=(await lookupUnifiedStock([adapter])).body.results[0];
 assert.equal(row.stockPL+row.stockDE,0);assert.equal(row.availability,'on-order');
 console.log('PASS: PL and DE stock in both cache paths, write-through, cached price preserved, incoming stock not counted as available.');
})().catch(e=>{console.error(e);process.exitCode=1});
