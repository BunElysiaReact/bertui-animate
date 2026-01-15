import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

console.log('🔧 Fixing double bertui- prefix...\n');

const categories = [
  '_base.css',
  '_vars.css',
  'attention_seekers',
  'back_entrances',
  'back_exits',
  'bouncing_entrances',
  'bouncing_exits',
  'fading_entrances',
  'fading_exits',
  'flippers',
  'lightspeed',
  'rotating_entrances',
  'rotating_exits',
  'specials',
  'zooming_entrances',
  'zooming_exits',
  'sliding_entrances',
  'sliding_exits'
];

let totalFixed = 0;

categories.forEach(category => {
  const sourcePath = join(process.cwd(), 'source', category.endsWith('.css') ? '' : category);
  const isFile = category.endsWith('.css');
  
  try {
    if (isFile) {
      // Process single file
      const filePath = join(process.cwd(), 'source', category);
      let content = readFileSync(filePath, 'utf8');
      const before = content;
      
      // Fix double prefix: bertui-bertui- → bertui-
      content = content.replace(/bertui-bertui-/g, 'bertui-');
      
      if (content !== before) {
        writeFileSync(filePath, content);
        console.log(`✓ Fixed ${category}`);
        totalFixed++;
      }
    } else {
      // Process directory
      const files = readdirSync(sourcePath).filter(f => f.endsWith('.css'));
      
      files.forEach(file => {
        const filePath = join(sourcePath, file);
        let content = readFileSync(filePath, 'utf8');
        const before = content;
        
        // Fix double prefix
        content = content.replace(/bertui-bertui-/g, 'bertui-');
        
        if (content !== before) {
          writeFileSync(filePath, content);
          totalFixed++;
        }
      });
      
      if (files.length > 0) {
        console.log(`✓ Fixed ${category} (${files.length} files)`);
      }
    }
  } catch (e) {
    console.log(`⚠ Skipping ${category}: ${e.message}`);
  }
});

console.log(`\n✨ Fixed ${totalFixed} files!\n`);
console.log('Now run: bun run build');