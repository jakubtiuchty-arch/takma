import fs from 'fs';

let content = fs.readFileSync('src/data/products.ts', 'utf-8');

const subcategoryMap = {
  'baterie-do-terminali': [
    'zebra-mc33-battery-7000', 'zebra-mc2x-battery-3500', 'zebra-mc2x-battery-4900',
    'zebra-battery-tc2-standard', 'zebra-battery-tc2-ble', 'zebra-battery-tc2-extended',
    'zebra-tc53-battery-4680', 'zebra-tc53-battery-7000', 'zebra-tc53-battery-4680-ble',
    'zebra-battery-tc52-extended',
  ],
  'stacje-ladowarki-terminali': [
    'zebra-mc33-cradle-1slot', 'zebra-mc33-battery-charger-4slot', 'zebra-mc33-cradle-5slot',
    'zebra-mc33-cradle-4slot-4battery', 'zebra-mc33-cradle-5slot-ethernet',
    'zebra-mc33-cradle-4slot-4battery-ethernet', 'zebra-mc33-battery-charger-20slot',
    'zebra-mc2x-cradle-1slot', 'zebra-mc2x-cradle-1slot-battery', 'zebra-mc2x-cradle-5slot',
    'zebra-mc2x-cradle-4slot-4battery', 'zebra-mc2x-battery-charger-4slot',
    'zebra-cradle-tc2-1slot', 'zebra-cradle-tc2-1slot-ethernet', 'zebra-cradle-tc2-1slot-1battery',
    'zebra-cradle-tc2-5slot', 'zebra-cradle-tc2-5slot-ethernet', 'zebra-charger-tc2-4battery',
    'zebra-cup-tc2-battery',
    'zebra-tc53-cradle-1slot', 'zebra-tc53-cradle-1slot-eth', 'zebra-tc53-cradle-5slot-eth',
    'zebra-tc53-vehicle-cradle',
    'zebra-cradle-tc52', 'zebra-charger-4slot',
  ],
  'etui-kabury-uchwyty': [
    'zebra-mc33-rubber-boot-gun', 'zebra-mc33-rubber-boot-straight', 'zebra-mc33-holster',
    'zebra-mc2x-trigger', 'zebra-mc2x-rubber-boot', 'zebra-mc2x-rubber-boot-trigger',
    'zebra-mc2x-holster', 'zebra-mc2x-handstrap',
    'zebra-trigger-tc2', 'zebra-boot-tc2', 'zebra-holster-tc2', 'zebra-lanyard-tc2',
    'zebra-tc53-rugged-boot', 'zebra-tc53-trigger-handle', 'zebra-tc53-hand-strap',
    'zebra-tc53-holster', 'zebra-tc53-trigger-lanyard', 'zebra-tc53-stylus',
  ],
  'kable-zasilacze-terminali': [
    'zebra-mc33-usb-cable', 'zebra-mc33-dc-cable-388', 'zebra-mc33-dc-cable-382',
    'zebra-psu-50w', 'zebra-psu-108w', 'zebra-cable-dc-388', 'zebra-cable-dc-381',
  ],
};

// Build reverse map
const productToSubcat = {};
for (const [subcatId, productIds] of Object.entries(subcategoryMap)) {
  for (const pid of productIds) {
    productToSubcat[pid] = subcatId;
  }
}

// MC33 accessories that need categoryId changed from 'terminale-mobilne' to 'akcesoria'
const changeCategoryIds = new Set([
  'zebra-mc33-battery-7000',
  'zebra-mc33-cradle-1slot', 'zebra-mc33-battery-charger-4slot', 'zebra-mc33-cradle-5slot',
  'zebra-mc33-cradle-4slot-4battery', 'zebra-mc33-cradle-5slot-ethernet',
  'zebra-mc33-cradle-4slot-4battery-ethernet', 'zebra-mc33-battery-charger-20slot',
  'zebra-mc33-rubber-boot-gun', 'zebra-mc33-rubber-boot-straight', 'zebra-mc33-holster',
  'zebra-mc33-usb-cable', 'zebra-mc33-dc-cable-388', 'zebra-mc33-dc-cable-382',
]);

let modified = 0;
let catChanged = 0;
let notFound = [];

for (const [productId, subcatId] of Object.entries(productToSubcat)) {
  // Find the product definition: "    id: 'product-id'," followed by slug on next line
  const idLine = `    id: '${productId}',`;
  let searchStart = 0;
  let found = false;

  while (true) {
    const idx = content.indexOf(idLine, searchStart);
    if (idx === -1) break;

    // Check this is a product definition (has slug on next line or nearby)
    const afterIdChunk = content.substring(idx, idx + 2000);
    if (afterIdChunk.includes("    slug: '")) {
      // This is a product definition
      // Find categoryId within this product block (within next 2000 chars)
      const catMatch = afterIdChunk.match(/    categoryId: '([^']+)',/);
      if (!catMatch) {
        console.warn(`No categoryId found near product: ${productId}`);
        break;
      }

      const catLineStart = idx + afterIdChunk.indexOf(catMatch[0]);
      const catLineEnd = catLineStart + catMatch[0].length;
      const currentCat = catMatch[1];

      // Check if subcategoryIds already exists in this product
      const blockEnd = Math.min(catLineEnd + 200, content.length);
      const afterCat = content.substring(catLineEnd, blockEnd);
      const hasSubcatIds = afterCat.match(/^\n    subcategoryIds:/);

      let newCat = currentCat;
      if (changeCategoryIds.has(productId)) {
        newCat = 'akcesoria';
        if (newCat !== currentCat) catChanged++;
      }

      if (hasSubcatIds) {
        // Only update categoryId if needed
        if (newCat !== currentCat) {
          content = content.substring(0, catLineStart) +
            `    categoryId: '${newCat}',` +
            content.substring(catLineEnd);
        }
        console.log(`[SKIP subcatIds] ${productId} — already has subcategoryIds`);
      } else {
        // Replace categoryId line and add subcategoryIds
        const replacement = `    categoryId: '${newCat}',\n    subcategoryIds: ['${subcatId}'],`;
        content = content.substring(0, catLineStart) +
          replacement +
          content.substring(catLineEnd);
      }

      found = true;
      modified++;
      break;
    }

    searchStart = idx + idLine.length;
  }

  if (!found) {
    notFound.push(productId);
  }
}

fs.writeFileSync('src/data/products.ts', content);
console.log(`\nDone! Modified ${modified} products, changed categoryId for ${catChanged} products.`);
if (notFound.length > 0) {
  console.log(`\nNot found (${notFound.length}):`, notFound);
}
