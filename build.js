import { transform } from 'lightningcss';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

console.log('🚀 Building BERTUI Animate with Bun...\n');

// Read source CSS
const sourcePath = join(process.cwd(), 'source', 'bertui-animate.css');
const sourceCSS = readFileSync(sourcePath, 'utf8');

console.log('✓ Source file loaded');

// Create dist directory
try {
  mkdirSync(join(process.cwd(), 'dist'), { recursive: true });
} catch (e) {}

// Build unminified version
const unminified = transform({
  filename: 'bertui-animate.css',
  code: Buffer.from(sourceCSS),
  minify: false,
  sourceMap: false,
  targets: {
    chrome: 95 << 16, // Chrome 95+
    firefox: 90 << 16, // Firefox 90+
    safari: 14 << 16,  // Safari 14+
  }
});

writeFileSync(
  join(process.cwd(), 'dist', 'bertui-animate.css'),
  unminified.code.toString()
);

console.log('✓ bertui-animate.css created');

// Build minified version
const minified = transform({
  filename: 'bertui-animate.min.css',
  code: Buffer.from(sourceCSS),
  minify: true,
  sourceMap: false,
  targets: {
    chrome: 95 << 16,
    firefox: 90 << 16,
    safari: 14 << 16,
  }
});

writeFileSync(
  join(process.cwd(), 'dist', 'bertui-animate.min.css'),
  minified.code.toString()
);

console.log('✓ bertui-animate.min.css created');

// Stats
const originalSize = Buffer.byteLength(sourceCSS);
const minifiedSize = minified.code.length;
const savings = ((1 - minifiedSize / originalSize) * 100).toFixed(1);

console.log(`\n📊 Build Stats:`);
console.log(`   Original: ${(originalSize / 1024).toFixed(2)}KB`);
console.log(`   Minified: ${(minifiedSize / 1024).toFixed(2)}KB`);
console.log(`   Savings:  ${savings}%`);
console.log('\n✨ Build complete!\n');