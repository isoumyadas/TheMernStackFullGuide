## display: block

– The element becomes a block-level box. It starts on a new line, stretches to fill the container’s width by default, and can have width, height, margins, and padding. Block elements stack vertically. (Examples: <div>, <p>, headings.)

## display: inline

– The element is an inline box. It does not start on a new line and only takes up as much width as its content. Inline elements cannot have fixed width/height (they size to content), and vertical margins/padding behave differently. (Examples: <span>, <a>, <strong>.)

## display: inline-block

– The element is formatted like an inline element (flowing within text) but behaves like a block-level box: you can set width, height, and vertical margins/padding. Use inline-block to create fixed-size boxes that flow horizontally without breaking line, useful for things like navigation items or buttons that appear in a row. For example:

```js
.box {
  display: inline-block;
  width: 100px;
  height: 100px;
  margin: 10px;
  background: #4CAF50;
}

```

## display: flex

– The element becomes a block-level flex container using the CSS Flexible Box Layout. Its children become flex items laid out in a row (or column) according to flexbox rules. By default, a flex container lays out items horizontally and can wrap them to new rows. This is ideal for one-dimensional layouts (either a row or column).

```js
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-item {
  flex: 0 0 auto;
  padding: 1rem;
}

## Here .nav is a flex container; its children .nav-item align horizontally and distribute space.

```

## display: inline-flex

– Similar to display: flex, but the container behaves like an inline element (it flows inline with text or other inline content). Use inline-flex if you need a flex container that does not start on a new line.

## display: grid

– The element becomes a block-level grid container using the CSS Grid Layout. Its children become grid items placed in rows and columns (a two-dimensional layout)
. For example:

```js
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-gap: 10px;
}
.grid-item {
  background: #eee;
  padding: 20px;
}

```

## display: none

– The element is completely removed from the layout and not rendered. It has no visual presence and takes up no space. Be careful: screen readers also ignore display: none elements (they’re removed from the accessibility tree). Use it for toggling elements hidden from both view and assistive tech.

# Screen Sizes and BreakPoints

- Responsive design targets various viewport sizes. Common categories include mobile phones, tablets, laptops/desktops, and large screens. Although devices vary widely, designers often use standard breakpoints based on popular widths

Mobile phones (small): ~320–480px width (e.g. older or very small phones; layout typically single-column).
Mobile phones (large): ~481–600px width (larger phones or phones in landscape).
Tablets (portrait): ~601–768px width (small tablets/large phones in portrait).
Tablets (landscape)/small laptops: ~769–1024px width (tablets in landscape, small laptops).
Laptops/Desktops: ~1025–1280px (standard desktop or laptop monitors).
Large desktops/HD screens: ~1281–1440px and above (wide monitors; designs may take advantage of extra space).
Extra-large (4K, etc.): 2560px and up for ultra-wide or high-res displays.
