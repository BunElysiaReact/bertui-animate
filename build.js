import { transform, bundleAsync } from 'lightningcss';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

console.log('🚀 Building BERTUI Animate with Bun...\n');

const sourcePath = join(process.cwd(), 'source', 'bertui-animate.css');

console.log('✓ Bundling all CSS imports...');

// ✅ Use Lightning CSS bundler to resolve @import statements
const bundled = await bundleAsync({
  filename: sourcePath,
  minify: false,
  sourceMap: false,
  targets: {
    chrome: 95 << 16,
    firefox: 90 << 16,
    safari: 14 << 16,
  }
});

const bundledCSS = bundled.code.toString();

console.log('✓ All CSS imports resolved');

// Create dist directory
try {
  mkdirSync(join(process.cwd(), 'dist'), { recursive: true });
} catch (e) {}

// Build unminified version
writeFileSync(
  join(process.cwd(), 'dist', 'bertui-animate.css'),
  bundledCSS
);

console.log('✓ bertui-animate.css created');

// Build minified version
const minified = transform({
  filename: 'bertui-animate.min.css',
  code: Buffer.from(bundledCSS),
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
const originalSize = Buffer.byteLength(bundledCSS);
const minifiedSize = minified.code.length;
const savings = ((1 - minifiedSize / originalSize) * 100).toFixed(1);

console.log(`\n📊 Build Stats:`);
console.log(`   Bundled: ${(originalSize / 1024).toFixed(2)}KB`);
console.log(`   Minified: ${(minifiedSize / 1024).toFixed(2)}KB`);
console.log(`   Savings: ${savings}%`);
console.log('\n✨ Build complete!\n');