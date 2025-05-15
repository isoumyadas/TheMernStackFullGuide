## Basic Syntax

```js
@media [only | not] <media-type> and (media-feature: value) {
  /* CSS rules for this condition */
}

```

### Syntax and Range Queries

Media type: Usually screen for monitors/tablets/phones, or print. If omitted, all is assumed. Using only screen can hide styles from very old browsers (mostly historical usage now)
developer.mozilla.org
.
Media features: Conditions like (max-width: 600px), (min-width: 1024px), (orientation: portrait), (prefers-color-scheme: dark), etc.
Logical operators:
and combines features: @media screen and (min-width: 768px) and (orientation: portrait) { ... }.
not negates a query or feature: @media not screen and (max-width: 480px) { ... }.
only (rarely needed now) prevents older browsers from applying without testing media features
developer.mozilla.org
.
Range syntax (Media Queries Level 4): Instead of separate min- and max- features, you can use range operators <= and >=. For example, the following are equivalent
developer.mozilla.org
:

```javascript
@media (min-width: 480px) and (max-width: 800px) { ... }
@media (480px <= width <= 800px) { ... }
```

The range syntax is inclusive by default; to exclude the endpoints use < or >. For instance, (30em < width < 50em) means strictly between 30em and 50em
developer.mozilla.org
.
Orientation: Use (orientation: portrait) or (orientation: landscape) to target device orientation (useful for tablets/phones).
Examples:

```js
@media screen and (max-width: 600px) {
  /* Styles for narrow viewports (phones) */
  body { font-size: 14px; }
}
@media (min-width: 768px) {
  /* Styles for tablets and up */
  .sidebar { display: block; }
}
@media (min-width: 1200px) and (orientation: landscape) {
  /* Styles for large screens in landscape */
  .layout { max-width: 1200px; }
}
```

## Best Practices for Media Queries

#### Mobile-first: Write default styles for the smallest (mobile) view, then use min-width queries for larger screens. This progressive enhancement approach means the stylesheet scales up as viewport grows. It often simplifies override logic (since broad screens inherit narrow-screen styles and add enhancements).

#### Use min-width rather than max-width: Target minimum widths in ascending order (mobile → tablet → desktop). For example:

```js
/* Mobile styles (no query needed) */
.grid { grid-template-columns: 1fr; }

@media (min-width: 600px) {
  .grid { grid-template-columns: 1fr 1fr; }
}
@media (min-width: 900px) {
  .grid { grid-template-columns: 1fr 1fr 1fr; }
}

```

#### Logical breakpoints: Instead of specific device widths, pick breakpoints where the layout “breaks” or needs change. For example, if your 3-column design looks cramped at 800px, trigger a change there. Common practice aligns with devices (e.g. 576px, 768px, 992px, 1200px for Bootstrap-like grid), but adapt to your content. Combine queries when needed: Use commas for “or” logic:

```js
@media (min-width: 600px), (orientation: landscape) {
/_ Styles applied if either condition is true _/
}
```

#### Targeting devices: Generally avoid targeting specific devices by name. Rely on screen width/orientation instead of device model. The device-width feature (obsolete) is rarely used nowadays.

#### Orientation queries: Use (orientation: portrait/landscape) for layouts that should adapt to rotated devices, e.g.:

```js
@media (orientation: portrait) {
.sidebar { display: none; }
.mobile-nav { display: block; }
}
@media (orientation: landscape) {
.sidebar { display: block; }
}
```

#### Other features: Consider user preferences, e.g. (prefers-color-scheme: dark) to apply a dark theme, or (prefers-reduced-motion: reduce) to limit animations. Also use @media print to style pages for printing.

#### Performance: Minimize the number of breakpoints. Consolidate similar queries. Many small queries can hurt performance. Place media queries in logical order (often near relevant CSS or at end of file).

#### Testing: Use browser dev tools and real devices (or emulators) to test. Analytics can inform which screen sizes are most common for your users browserstack.com. Focus on the prevalent viewports (e.g. top 5 sizes) for best ROI

## Responsive Grid

```js

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}
@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 480px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

```
