const fs=require('fs'),ts=require('typescript'),assert=require('node:assert/strict'),path=require('path'),Module=require('module');
require.extensions['.ts']=(m,f)=>m._compile(ts.transpileModule(fs.readFileSync(f,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,esModuleInterop:true}}).outputText,f);
const pn='TC2010-0S3P6BA00-A6', hour=3600000;
let cached=[],jt=[],saved=[],calls=0,inventory=109;
const db={stockCache:{findMany:async()=>cached,upsert:async a=>{saved.push(a);return a.create;},update:async()=>({})},jarltechStockCache:{findMany:async()=>jt,upsert:async a=>a.create}};
const load=Module._load;
Module._load=function(id,parent,main){
 if(id==='@/lib/db')return {prisma:db};
 if(id==='@/data/products')return {products:[],isLabelPN:()=>false,getCatalogNetPrice:()=>3000};
 if(id==='@/data/transfer-ribbon-products')return {isRibbonPN:()=>false};
 if(id==='@/lib/stock-overrides')return {MANUAL_STOCK_OVERRIDES:new Map(),applyStockOverrides:r=>r};
 if(id==='@/lib/ingram')return {lookupStock:async()=>[{partNumber:pn,found:true,stockPL:0,stockDE:0,inDelivery:0,ingramPrice:2000}]};
 if(id==='@/lib/bluestar')return {lookupStock:async()=>[]};
 if(id==='@/lib/jarltech')return {lookupStock:async()=>{calls++;return [{partNumber:pn,found:true,inventory,incomingQty:5,totalStock:inventory+5,unitPrice:700,currency:'EUR',availability:inventory?'available':'on-order',deliveryText:'Stan dostawcy',lastSync:new Date().toISOString()}]}};
 return load.call(this,id.startsWith('@/')?path.resolve('src',id.slice(2)):id,parent,main);
};
global.fetch=async()=>({ok:true,json:async()=>({rates:[{mid:4}]})});
const {lookupUnifiedStock}=require('../src/lib/unified-stock.ts');
const {tc201CacheMaxAge}=require('../src/lib/tc201-stock-policy.ts');
(async()=>{
 assert.equal(tc201CacheMaxAge(pn,24*hour),hour);assert.equal(tc201CacheMaxAge(pn,0),0);assert.equal(tc201CacheMaxAge('OTHER',24*hour),24*hour);
 const old={partNumber:pn,found:true,price:2200,stockPL:0,stockDE:0,inDelivery:0,totalStock:0,availability:'unavailable',lastSync:new Date(Date.now()-2*hour)};
 cached=[old];jt=[{...old,inventory:0,unitPrice:600,currency:'EUR',incomingQty:0}];
 let row=(await lookupUnifiedStock([pn])).body.results[0];
 assert.equal(calls,1,'Stale zero stock must trigger live Jarltech');assert.equal(row.stockDE,109);assert.equal(row.availability,'available');assert.equal(row.price,3080,'Price must use the supplier with stock, then add 10%');assert(saved.some(s=>s.update.stockDE===109));
 calls=0;inventory=0;cached=[{...old,stockDE:109,availability:'available'}];jt=[{...jt[0],inventory:109}];
 row=(await lookupUnifiedStock([pn])).body.results[0];assert.equal(calls,1);assert.equal(row.stockDE,0,'Stale positive stock must not survive refresh');assert.equal(row.availability,'on-order','Incoming units must not count as available stock');
 console.log('PASS: stale zero and positive stock, on-order stock, source with stock, 10% markup, persisted results and cache TTL.');
})().catch(e=>{console.error(e);process.exitCode=1});
