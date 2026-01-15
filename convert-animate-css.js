import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'fs';
import { join } from 'path';

console.log('🔄 Converting animate.css to BERTUI Animate with Bun...\n');

// Directories to process
const categories = [
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

let totalFiles = 0;

categories.forEach(category => {
  // Read from root source folder
  const sourcePath = join(process.cwd(), 'source', category);
  
  try {
    const files = readdirSync(sourcePath).filter(f => f.endsWith('.css'));
    
    files.forEach(file => {
      const filePath = join(sourcePath, file);
      let content = readFileSync(filePath, 'utf8');
      
      // Replace animate__ with bertui-
      content = content.replace(/animate__/g, 'bertui-');
      
      // Replace .animated with .bertui-animated
      content = content.replace(/\.animated/g, '.bertui-animated');
      
      // Replace CSS variables --animate- with --bertui-
      content = content.replace(/--animate-/g, '--bertui-');
      
      // Replace animation names (without dots/classes)
      // This handles @keyframes names
      content = content.replace(/@keyframes\s+(\w+)/g, (match, name) => {
        return `@keyframes bertui-${name}`;
      });
      
      // Replace animation-name properties
      content = content.replace(/animation-name:\s*(\w+);/g, (match, name) => {
        return `animation-name: bertui-${name};`;
      });
      
      // Replace class names that reference animations
      content = content.replace(/\.(\w+)\s*{/g, (match, name) => {
        // Skip already converted ones
        if (name.startsWith('bertui-')) return match;
        return `.bertui-${name} {`;
      });
      
      // Write back to same file
      writeFileSync(filePath, content);
      totalFiles++;
    });
    
    console.log(`✓ Converted ${category} (${files.length} files)`);
  } catch (e) {
    console.log(`⚠ Skipping ${category} (not found)`);
  }
});

console.log(`\n✨ Converted ${totalFiles} animation files!\n`);
console.log('Next steps:');
console.log('1. Run: npm run build');
console.log('2. Test the output in dist/');
console.log('3. Publish: npm publish\n');