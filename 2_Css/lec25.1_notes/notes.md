# Line Height and Spacing

ALmost start with any project start with line-height: 1.6 or 1.5 in body.
This applies to everything not just specific.

```css
body {
  font-size: 1.25rem;
  line-height: 1.6;
}
```

### Note:

The bigger you get the smaller the line-height you should keep. And for smaller just the opposite

After we have added the line-height on body. If we want the line-height for all the h1's then we should do:

```css
h1 {
  font-size: 7.5rem;
  line-height: 1.1;
}
```

# Using Margin for spacing around elements

Using margin block to give that block of space between something. Just like space-between in flex.

Same you can do for UL, OL etc.

```css
p {
  margin-block: 50px;
}
```

# As anchor tag color doesn't change

So when you change the color of a tag to inherit it means it will inherit the color of parent like the body.

```css
a {
  color: inherit;
}
```

<!-- Second -->

# Viewports

For dynamic height, => dvh [height: 100dvh]
You can also use svh. It looks like same.

You can use it like this:

```css
header {
  min-height: 100vh;
  min-height: 100dvh;
}
```

# Css Units

link to follow : https://whatunit.com/

1. px & rem

-> positioning (top,right,bottom,left);
-> details (borders, outlines, shadows etc.)

2. Font Size

-> Never use px's for font-size
-> Use rem and check the link above for more detail.

3. Spacing
   -> Text (spacing between paragraphs) => em or rem
   -> Padding & Space between elements and/or components
   -> For Fixed size use em, rem & px
   -> For not Fixed size use vw/vh / min() / clamp()

4. Width & Height
   -> Height: Always use min-height (rarely or avoid to use height and max-height)
   -> Width: Always use min-width (If you use % then it will be relative to the width of another element. px and rem for fixed size.)
