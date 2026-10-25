# Salesforce Website — HTML & CSS Learning Notes

## Project overview
A beginner front-end practice project inspired by a Salesforce-style website. The page contains a header with a logo, navigation labels, contact details/action placeholders, and two coloured sections.

## Project files
```text
Salesforce-Website/
├── README.md
├── index.html
└── style.css
```
- `index.html`: the page structure.
- `style.css`: layout, sizing, spacing, colours and visual effects.
- `README.md`: learning notes and definitions.

# 1. HTML terms

### `<!DOCTYPE html>`
Tells the browser to use modern HTML standards so the page renders consistently.

### `<head>` and `<body>`
`<head>` contains page metadata, the title and resource links. `<body>` contains the visible webpage content.

### Viewport meta tag
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
Makes the page use the device viewport width. It is a key starting point for mobile-friendly layouts.

### `<title>`
Sets the text shown in the browser tab.

### Linking CSS
```html
<link rel="stylesheet" href="style.css">
```
Connects the HTML file to the external stylesheet. The filename and path must match.

### `<div>`
A general container used to group elements for layout and styling, such as the header or a page section.

### `id` and `class`
- `id` identifies one element; CSS uses `#header` for `id="header"`.
- `class` can be shared by multiple elements; CSS uses `.texts` for `class="texts"`.

### `<img>`, `src`, `alt`
`src` gives the image location. `alt` provides a text alternative for accessibility and when an image cannot load.

### Semantic navigation
For a finished website, prefer `<nav>` containing clickable `<a href="...">` links rather than using plain text alone for menu items.

# 2. CSS reset and box model

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Georgia, "Times New Roman", Times, serif;
}
```

### Universal selector `*`
Selects every element. It is useful for applying consistent base styles.

- `margin: 0`: removes default outer spacing.
- `padding: 0`: removes default inner spacing.
- `box-sizing: border-box`: includes padding and border inside the declared width and height.
- `font-family`: chooses a font with fallback options.

### Margin versus padding
- **Margin** is space outside an element's border; it separates elements.
- **Padding** is space inside the border, between the content and border; it gives content breathing room.

# 3. Width, height and viewport units

### `width: 100%`
Fills the available width of the containing block. It does not always mean the entire screen.

### `height: 100%`
Requests 100% of the containing block's height. Percentage heights work predictably when the parent has a definite height.

### `vh` and `vw`
- `1vh` = 1% of the viewport height.
- `10vh` = 10% of the viewport height.
- `90vh` = 90% of the viewport height.
- `1vw` = 1% of the viewport width.

Use viewport units for sections sized in relation to the browser window. On mobile, test because browser toolbars can affect viewport sizing.

### `100%` versus `100vw`
`100%` uses the containing block's width. `100vw` uses the viewport width and can sometimes cause horizontal overflow because of scrollbar width. For ordinary containers, `width: 100%` is often safer.

### `height` versus `min-height`
`height` sets a specific height; `min-height` sets a minimum but lets the element grow if content needs more space. `min-height` is often safer for content sections.

# 4. Header and page layout

### `display: flex`
Turns an element into a Flexbox container. Its direct children become flex items. This is useful for placing the logo, navigation, contact details and buttons in a row.

### `align-items: center`
Aligns items along the cross axis. With the default `flex-direction: row`, this vertically centres the header's children.

### `justify-content`
Aligns or distributes items along the main axis. With a row layout, it controls horizontal placement:
- `center`: groups items in the centre.
- `space-between`: distributes space between items.
- `flex-start`: puts items at the start.

`align-items` and `justify-content` control different axes in a row-based Flexbox layout.

### `position: fixed`
Keeps an element attached to a position in the browser viewport while scrolling. It is useful for a navigation header that remains visible.

```css
#header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: white;
}
```

A fixed element is removed from normal document flow, so content may start underneath it. A spacer or top padding can reserve room.

### `top: 0` and `left: 0`
Place the fixed header against the top and left edges of the viewport.

### `z-index`
Controls which overlapping element appears in front, subject to stacking-context rules. It does not move an element. A larger value often keeps the header above scrolling sections.

### Header background
A fixed header with no background colour is transparent. When orange or green sections scroll behind it, those colours can show through. `background-color: white` gives the header an opaque background.

### Fake-header spacer
```html
<div id="fakeheader"></div>
```
```css
#fakeheader {
    width: 100%;
    height: 10vh;
}
```
Reserves space for the fixed header because the header no longer occupies space in normal document flow. The ID spelling in HTML and CSS must match exactly: `fakehaeder` and `fakeheader` are different.

### Page sections
```css
#page1 {
    min-height: 90vh;
    width: 100%;
    background-color: rgb(231, 75, 24);
}
#page2 {
    min-height: 90vh;
    width: 100%;
    background-color: rgb(66, 205, 161);
}
```
The ID selectors target each section. `min-height: 90vh` gives each section at least 90% of the viewport height while allowing it to grow if needed. `background-color` helps distinguish sections visually.

# 5. Colours and text

### `color` and `background-color`
`color` changes text colour. `background-color` changes the background behind an element.

### `rgb()`
```css
color: rgb(26, 5, 121);
```
Defines a colour using red, green and blue values, normally each from 0 to 255.

### `margin-left`
```css
#contactdetails {
    margin-left: 40px;
}
```
Adds 40 pixels of space outside the element's left edge. It affects placement, not font thickness.

### `font-family`
Chooses the typeface. The browser uses the first available font and falls back to the next. Different fonts can have different shapes and available weights.

### `font-weight`
Controls how thick or thin text appears:
- `300`: light, if supported by the font.
- `400`: normal.
- `700`: bold.
- `lighter`: asks for a lighter weight relative to the inherited weight.

If `font-weight: lighter` looks unchanged, the font may not offer a visibly lighter weight, or a child selector may set its own weight. Try a font family with more weights or inspect the computed styles in browser DevTools.

# 6. Logo image

```css
#logo {
    width: 130px;
    height: 70%;
    margin: 15px;
    flex-shrink: 0;
}
#logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
}
```

### `#logo img`
The space means “an image inside the element with ID `logo`.” It targets the image, not the container.

### Why the logo looked small
`width: 100%` on the image means 100% of the logo container's width—not the whole header. If the container is narrow, the image is narrow too. Giving `#logo` a width makes the intended size clearer.

### `object-fit: contain` versus `cover`
- `contain`: shows the whole image, possibly leaving empty space.
- `cover`: fills the box while keeping the image ratio, but may crop the image.

For logos, `contain` is usually better because it avoids cropping the logo.

### `display: block`
Makes the image a block element and can remove the small baseline gap that sometimes appears under inline images.

### `flex-shrink: 0`
Prevents Flexbox from shrinking the logo container when space is limited. A crowded header may still need a responsive layout.

# 7. CSS comments and specificity

### Comments
```css
/* The browser ignores this text */
```
Comments explain code or temporarily disable declarations without deleting them.

### Specificity
When multiple CSS rules match an element and set the same property, the cascade chooses which declaration wins. In general, an ID selector such as `#header` is more specific than a class selector such as `.texts`, which is more specific than an element selector such as `p`.

If a style does not change, inspect which rule is active in DevTools before adding more CSS. Avoid using `!important` as the first fix.

# 8. New useful CSS terms

### `gap`
Sets space between children in Flexbox or Grid. It can be cleaner than adding margins to every child.
```css
#header {
    display: flex;
    gap: 20px;
}
```

### `overflow`
Controls content that exceeds an element's box:
- `visible`: content may extend outside.
- `hidden`: clips overflowing content.
- `auto`: adds scrolling when needed.
- `scroll`: provides scrolling.

### `max-width`
Sets the maximum width an element can reach. Useful for keeping content readable on large screens while allowing it to shrink on small screens.

### Media queries
```css
@media (max-width: 600px) {
    /* styles for narrow screens */
}
```
Apply CSS only when a condition, such as viewport width, is met. They help prevent a header from overflowing on phones.

### `:hover`
Applies styles while the pointer is over an element. Useful for visual feedback on interactive menu items. Do not rely on hover alone for important actions because touchscreens behave differently.

### `transition`
Smooths a change in supported CSS properties.
```css
.texts {
    transition: color 0.2s ease;
}
```
A transition does not trigger the change; another rule, such as `:hover`, must change the property.

# 9. CSS building checklist

1. Match IDs and classes exactly: `id="header"` → `#header`; `class="texts"` → `.texts`.
2. Check that the stylesheet path and filename are correct.
3. Remember margin is outside; padding is inside.
4. `width: 100%` means the parent width, not necessarily the whole viewport.
5. Percentage heights depend on a parent height that can be resolved.
6. Use `vh` thoughtfully and test on mobile screens.
7. For fixed headers, plan `top`, `left`, `z-index`, background colour and space beneath the header.
8. Avoid duplicate/conflicting rules. Check specificity and DevTools first.
9. Choose `object-fit: contain` for logos that must remain fully visible.
10. Save and test after each small change; change one thing at a time.
11. Check the page at different screen widths.
12. Use semantic HTML, including `<nav>` and links for navigation.
13. Keep indentation and spacing consistent.
14. Use DevTools to inspect computed styles and discover overridden rules.
15. Do not use `!important` as the first solution.

# Learning Progress — 25 October 2026

- Built a Salesforce-inspired header with a logo, menu labels, contact details/action placeholders and two page sections.
- Linked the external `style.css` file.
- Practised the universal selector, reset rules and `box-sizing`.
- Learned `width: 100%`, `height: 100%`, `10vh`, `90vh`, and `100%` versus `100vw`.
- Used `position: fixed` to keep the header visible during scrolling.
- Learned why a fixed header needs a spacer or content offset.
- Used Flexbox with `display: flex` and `align-items: center`.
- Styled sections using `background-color` and `rgb()`.
- Practised `margin`, `margin-left`, `font-family` and `font-weight`.
- Adjusted the logo container and image sizing.
- Learned `object-fit: contain` versus `cover`, `display: block` and `flex-shrink`.
- Reviewed IDs, classes, descendant selectors, comments and specificity.

## Next session
Continue from here and append new concepts and progress without deleting the earlier notes.
