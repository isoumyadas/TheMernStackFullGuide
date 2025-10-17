## Absolute Units

- Absolute Units (Fixed size regardless of screen)
  | Unit | Description | Example | Notes |
  | ---------------- | ------------------------ | ----------------- | --------------------------------------------------------------------- |
  | `px` | Pixels | `width: 100px` | Most commonly used. One CSS pixel ≠ device pixel on high-DPI screens. |
  | `pt` | Points (1pt = 1/72 inch) | `font-size: 12pt` | Rarely used in screen styles; used more in print styles. |
  | `cm`, `mm`, `in` | Physical lengths | `width: 2in` | Not reliable on screens due to differing pixel densities. |

## Relative Units (Scale with context)

| Unit   | Description                              | Example             | Based on                |
| ------ | ---------------------------------------- | ------------------- | ----------------------- |
| `%`    | Percentage of parent’s dimension         | `width: 50%`        | Parent element          |
| `em`   | Relative to current font size            | `width: 5em`        | Parent font-size        |
| `rem`  | Relative to root (`html`) font size      | `font-size: 1.2rem` | Root `<html>` font-size |
| `vw`   | 1% of **viewport width**                 | `width: 50vw`       | Viewport width          |
| `vh`   | 1% of **viewport height**                | `height: 80vh`      | Viewport height         |
| `vmin` | 1% of smaller of viewport's width/height | `font-size: 5vmin`  | Smallest viewport dim   |
| `vmax` | 1% of larger of viewport's width/height  | `margin: 5vmax`     | Largest viewport dim    |
| `ch`   | Width of the `0` character               | `width: 60ch`       | Font's character width  |

## Percentage (%) Sizing

- Commonly used for layout responsiveness.

```js
.container {
  width: 100%;       /* Full width of parent */
  height: 50%;       /* 50% of parent's height */
}

```

- height: % only works when parent has a defined height.

## Viewport Units (vw, vh, vmin, vmax)

| Unit   | Meaning                     | Example            | Description                      |
| ------ | --------------------------- | ------------------ | -------------------------------- |
| `1vw`  | 1% of **viewport width**    | `width: 100vw`     | Full screen width                |
| `1vh`  | 1% of **viewport height**   | `height: 100vh`    | Full screen height               |
| `vmin` | 1% of **smaller dimension** | `font-size: 5vmin` | Scales with smallest screen side |
| `vmax` | 1% of **larger dimension**  | `padding: 2vmax`   | Scales with largest screen side  |

```js
.hero {
  height: 100vh;       /* Full screen height */
  width: 100vw;        /* Full screen width */
}

```

- Use vh and vw with caution on mobile browsers, as browser toolbars can affect the viewport size.

## min-width / min-height

- Ensures the element is at least this size.

```js
.card {
  min-width: 200px;
  min-height: 300px;
}

```

## max-width / max-height

- Prevents the element from growing beyond this size.

```js
img {
  max-width: 100%;
  height: auto;
}

```

### Use cases

- Prevent an image from overflowing

```js
img {
  max-width: 100%;
  height: auto;
}

```

- Responsive layout with felxible min/max limits:

```js
.container {
  width: 80%;
  min-width: 300px;
  max-width: 1200px;
}

```

## Common Use Cases and Combinations

- Centering a full-height section

```js
.section {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

```

- Responsive Image

```js
img {
  width: 100%;
  height: auto;
  max-width: 600px;
}

```

- Font Scaling With Screen Size

```js
h1 {
  font-size: clamp(1.5rem, 2.5vw, 3rem);  /* Scales between 1.5rem–3rem */
}

```

| Tip  
| -------------------------------------------------------------------------
| ✅ Use `rem` for spacing and text to ensure consistency across components.
| ✅ Combine `min-` and `max-` to create flexible but bounded elements.  
| ✅ Use `%` or `auto` for height only if parent height is known.  
| ✅ Use `vw/vh` for full-screen sections and hero areas.  
| ✅ Use `clamp(min, preferred, max)` for responsive typography.  
| ❌ Don’t hardcode widths/heights unless needed (e.g., logos, icons).  
| ❌ Avoid using `vh` on mobile without accounting for address bar.  
| ❌ Don’t mix too many unit types — keep things consistent.

## Cheat Sheet

/_ Width Examples _/
width: 100px; /_ Fixed size _/
width: 80%; /_ Relative to parent _/
width: 90vw; /_ 90% of viewport width _/
min-width: 300px; /_ Never shrink smaller _/
max-width: 1200px;/_ Don’t grow too large _/

/_ Height Examples _/
height: 100vh; /_ Full screen _/
height: auto; /_ Adapt to content _/
min-height: 400px; /_ Minimum space _/
max-height: 90vh; /_ Fit within screen _/

/_ Font sizing _/
font-size: 16px; /_ Fixed _/
font-size: 1.2em; /_ Relative to parent _/
font-size: 1.5rem; /_ Relative to root _/
font-size: clamp(1rem, 2vw, 2rem); /_ Responsive _/
