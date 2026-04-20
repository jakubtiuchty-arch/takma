import { guides } from './src/data/guides.ts';

console.log('Guides count:', guides.length);
let errors = 0;

for (const g of guides) {
  console.log('Guide:', g.slug, '- sections:', g.sections.length);
  for (const s of g.sections) {
    const tableOpens = (s.content.match(/<table/g) || []).length;
    const tableCloses = (s.content.match(/<\/table>/g) || []).length;
    if (tableOpens !== tableCloses) {
      console.log('  ERROR: Section', s.id, '- unclosed table tags:', tableOpens, 'opens vs', tableCloses, 'closes');
      errors++;
    }
    const trOpens = (s.content.match(/<tr/g) || []).length;
    const trCloses = (s.content.match(/<\/tr>/g) || []).length;
    if (trOpens !== trCloses) {
      console.log('  ERROR: Section', s.id, '- unclosed tr tags:', trOpens, 'opens vs', trCloses, 'closes');
      errors++;
    }
    const tdOpens = (s.content.match(/<td/g) || []).length;
    const tdCloses = (s.content.match(/<\/td>/g) || []).length;
    if (tdOpens !== tdCloses) {
      console.log('  WARNING: Section', s.id, '- td mismatch:', tdOpens, 'opens vs', tdCloses, 'closes');
    }
    const thOpens = (s.content.match(/<th/g) || []).length;
    const thCloses = (s.content.match(/<\/th>/g) || []).length;
    if (thOpens !== thCloses) {
      console.log('  WARNING: Section', s.id, '- th mismatch:', thOpens, 'opens vs', thCloses, 'closes');
    }
    // Check all tables have width:100%
    const allTables = s.content.match(/<table[^>]*>/g) || [];
    for (const t of allTables) {
      if (!t.includes('width:100%')) {
        console.log('  ERROR: Section', s.id, '- table without width:100%:', t);
        errors++;
      }
    }
  }
}

console.log('\nTotal errors:', errors);
if (errors === 0) {
  console.log('ALL OK - no HTML issues found');
}
