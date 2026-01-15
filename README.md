# 🎭 BERTUI Animate

**All animate.css animations with BERTUI prefix. Zero config, just import.**

Part of the [BERTUI](https://github.com/BunElysiaReact/BERTUI) framework family.

[![npm version](https://img.shields.io/npm/v/bertui-animate.svg)](https://www.npmjs.com/package/bertui-animate)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## ⚡ Quick Start

```bash
bun add bertui-animate
```

```jsx
import 'bertui-animate';

function App() {
  return (
    <div>
      <h1 className="bertui-bounce">Bouncing Header!</h1>
      <p className="bertui-fadeIn bertui-delay-1s">Delayed fade in</p>
      <button className="bertui-pulse bertui-infinite">Pulsing Button</button>
    </div>
  );
}
```

**That's it.** No config. No setup. Just import and use.

---

## 📚 Available Animations

**All [animate.css v4.1.1](https://animate.style) animations included** with `bertui-` prefix.

### Attention Seekers
```
bertui-bounce        bertui-flash         bertui-pulse
bertui-rubberBand    bertui-shakeX        bertui-shakeY
bertui-headShake     bertui-swing         bertui-tada
bertui-wobble        bertui-jello         bertui-heartBeat
```

### Entrances
```
bertui-fadeIn        bertui-fadeInDown    bertui-fadeInUp
bertui-fadeInLeft    bertui-fadeInRight   bertui-slideInDown
bertui-slideInUp     bertui-slideInLeft   bertui-slideInRight
bertui-bounceIn      bertui-bounceInDown  bertui-bounceInUp
bertui-zoomIn        bertui-zoomInDown    bertui-zoomInUp
bertui-backInDown    bertui-backInLeft    bertui-backInRight
bertui-rotateIn      bertui-flipInX       bertui-flipInY
... (and many more)
```

### Exits
```
bertui-fadeOut       bertui-fadeOutDown   bertui-fadeOutUp
bertui-slideOutDown  bertui-slideOutUp    bertui-slideOutLeft
bertui-bounceOut     bertui-zoomOut       bertui-backOutDown
bertui-rotateOut     bertui-flipOutX      bertui-flipOutY
... (and many more)
```

**Full list**: See [animate.css documentation](https://animate.style) - just replace `animate__` with `bertui-`

---

## 🎨 Utility Classes

### Speed Control
```jsx
<div className="bertui-fadeIn bertui-faster">2x faster</div>
<div className="bertui-fadeIn bertui-fast">1.25x faster</div>
<div className="bertui-fadeIn bertui-slow">2x slower</div>
<div className="bertui-fadeIn bertui-slower">3x slower</div>
```

### Delays
```jsx
<div className="bertui-bounce bertui-delay-1s">1 second delay</div>
<div className="bertui-bounce bertui-delay-2s">2 seconds delay</div>
<div className="bertui-bounce bertui-delay-3s">3 seconds delay</div>
<div className="bertui-bounce bertui-delay-4s">4 seconds delay</div>
<div className="bertui-bounce bertui-delay-5s">5 seconds delay</div>
```

### Repeat
```jsx
<div className="bertui-pulse bertui-repeat-1">Once</div>
<div className="bertui-pulse bertui-repeat-2">Twice</div>
<div className="bertui-pulse bertui-repeat-3">Three times</div>
<div className="bertui-pulse bertui-infinite">Forever</div>
```

---

## 🎯 Custom Timing (CSS Variables)

```css
:root {
  --bertui-duration: 2s;    /* Change default duration */
  --bertui-delay: 0.5s;     /* Change default delay */
  --bertui-repeat: 2;       /* Change default repeat count */
}

/* Or per-element */
.my-element {
  --bertui-duration: 0.5s;
}
```

---

## 🚀 Usage Examples

### Simple Animation
```jsx
<div className="bertui-fadeIn">
  I fade in!
</div>
```

### Combined with Utilities
```jsx
<div className="bertui-bounce bertui-slow bertui-delay-2s bertui-repeat-3">
  Slow bouncing with delay, repeats 3 times
</div>
```

### Infinite Loop
```jsx
<button className="bertui-pulse bertui-infinite">
  Click Me (pulsing forever)
</button>
```

### JavaScript Trigger
```jsx
import { useState } from 'react';

function App() {
  const [animate, setAnimate] = useState(false);

  return (
    <div>
      <button onClick={() => setAnimate(!animate)}>
        Trigger Animation
      </button>
      
      {animate && (
        <div className="bertui-zoomIn">
          I just zoomed in!
        </div>
      )}
    </div>
  );
}
```

---

## 📦 What's Included

- **bertui-animate.css** - Full unminified version (~84KB)
- **bertui-animate.min.css** - Minified version (~70KB, ~9KB gzipped)

Both files work identically. Your bundler will automatically use the minified version in production.

---

## 🌟 Why BERTUI Animate?

| Feature | bertui-animate | animate.css |
|---------|---------------|-------------|
| **Import** | `import 'bertui-animate'` | CDN link in HTML |
| **Prefix** | `bertui-` (clean, consistent) | `animate__` (verbose) |
| **Optimization** | Lightning CSS (cutting-edge) | PostCSS |
| **Bundle Size** | ~9KB gzipped | ~11KB gzipped |
| **Zero Config** | ✅ Just works | ⚠️ Requires setup |
| **Modern Tooling** | ✅ Built for 2024+ | ⚠️ Legacy approach |

---

## 🛠️ Build From Source

```bash
git clone https://github.com/BunElysiaReact/bertui-animate.git
cd bertui-animate
bun install
bun run build
```

Output in `dist/` folder.

---

## 🤝 Contributing

This is a simple wrapper around animate.css with BERTUI prefix. If you want to:
- **Add new animations**: Contribute to [animate.css](https://github.com/animate-css/animate.css)
- **Report bugs with BERTUI prefix**: Open an issue here
- **Suggest improvements**: PRs welcome!

---

## 📄 License

MIT License - see [LICENSE](LICENSE) for details

Original animations from [animate.css](https://github.com/animate-css/animate.css) by Daniel Eden.

---

## 🙏 Credits

- **Animations**: [animate.css](https://github.com/animate-css/animate.css) by Daniel Eden
- **Build Tool**: [Lightning CSS](https://lightningcss.dev/)
- **Framework**: Part of [BERTUI](https://github.com/BunElysiaReact/BERTUI)

---

<div align="center">

**Made with ⚡ by the BERTUI team**

*"Zero config. Just works."*

[GitHub](https://github.com/BunElysiaReact/bertui-animate) • [npm](https://www.npmjs.com/package/bertui-animate) • [BERTUI Framework](https://github.com/BunElysiaReact/BERTUI)

</div>