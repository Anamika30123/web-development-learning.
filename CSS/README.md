# CSS Notes

**Status:** Learning in progress  
**Current topics:** Inline CSS, Internal CSS, External CSS, basic CSS properties and `<div>`.

## 1. What is CSS?

**CSS** stands for **Cascading Style Sheets**. It controls the appearance of HTML elements, including text colour, background colour, alignment, size, spacing and layout.

- **HTML** defines the structure and content of a webpage.
- **CSS** controls how that content looks.

## 2. Three ways to add CSS

### Inline CSS

Inline CSS is written directly inside an HTML element's `style` attribute. It applies styling to that particular element.

```html
<h1 style="color: red; text-align: center;">Hello!</h1>
```

Use inline CSS sparingly because styles become harder to maintain when repeated across many elements.

### Internal CSS

Internal CSS is written inside the `<style>` element, usually in the `<head>` section of an HTML document. It is useful when styling a single page.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Internal CSS</title>

    <style>
        h1 {
            color: red;
            text-align: center;
        }

        p {
            color: brown;
            background-color: antiquewhite;
        }
    </style>
</head>
<body>
    <h1>Hello, world!</h1>
    <p>I am learning CSS.</p>
</body>
</html>
```

**Important:** The `<style>` element is HTML. The CSS rules are written between `<style>` and `</style>`.

### External CSS

External CSS is written in a separate file with the `.css` extension. The HTML page connects to it using a `<link>` element inside `<head>`.

**index.html**
```html
<head>
    <link rel="stylesheet" href="style.css">
</head>
```

**style.css**
```css
h1 {
    color: red;
    text-align: center;
}
```

External CSS is generally preferred for larger projects and multiple pages because the same stylesheet can be reused and maintained separately from the HTML.

### Difference between the three types

| Type | Where the CSS is written | Typical use |
|---|---|---|
| Inline | In the element's `style` attribute | A one-off style |
| Internal | Inside `<style>` in the HTML `<head>` | Styling one page |
| External | In a separate `.css` file linked with `<link>` | Reusable styles across pages |

## 3. CSS syntax

```css
selector {
    property: value;
}
```

- **Selector:** chooses the HTML element(s) to style, for example `h1`.
- **Property:** the style setting to change, for example `color`.
- **Value:** the setting assigned to a property, for example `red`.
- **Declaration:** a property and value together, for example `color: red;`.
- Curly braces `{ }` contain declarations.
- A colon `:` separates the property from its value.
- A semicolon `;` separates declarations.

## 4. CSS properties learned

### `text-align`

Controls the horizontal alignment of text inside an element.

```css
h1 {
    text-align: center;
}
```

Common values include `left`, `right`, `center` and `justify`. This property aligns the text; it does not automatically centre the element itself.

### `font-size`

Sets the size of text.

```css
p {
    font-size: 20px;
}
```

`px` means CSS pixels. Other units, such as `rem` and `em`, can also be used.

### `width`

Sets the width of an element's content area by default.

```css
h1 {
    width: 50%;
}
```

A percentage width is generally calculated relative to the containing block. It does not mean that the text itself takes up 50% of the width.

### `color`

Sets the foreground colour, usually the text colour.

```css
h1 {
    color: red;
}
```

### `background-color`

Sets the background colour of an element.

```css
h1 {
    background-color: aqua;
}
```

### `margin`

Controls the space outside an element's border.

```css
* {
    margin: 0;
}
```

This example sets the margin of all elements to zero, removing their default outer spacing. A universal reset can affect headings, paragraphs and other elements, so use it intentionally.

## 5. CSS comments and the universal selector

### CSS comment

A comment is a note in the stylesheet that the browser does not apply as a style.

```css
/* This is a CSS comment. */
```

### Universal selector `*`

The universal selector matches all elements.

```css
* {
    margin: 0;
}
```

In this example, the margin is set to zero for all elements.

## 6. The `id` attribute

The `id` attribute gives an HTML element a unique identifier within the page. It can be used to target a specific element with CSS or link to a section of the same page.

```html
<h1 id="main-title">My Portfolio</h1>
```

To style the element with that ID, use `#` before the ID name in CSS:

```css
#main-title {
    color: red;
    text-align: center;
}
```

- In HTML, write `id="main-title"` inside the opening tag.
- In CSS, `#main-title` selects the element with that ID.
- An ID should be unique on a page; do not assign the same ID to multiple elements.
- An `id` name must not contain spaces.
- Use `id` for one specific element; use `class` when the same styling may be shared by multiple elements.

Example of `id` and `class` together:

```html
<div id="profile" class="card">
    <h2>About Me</h2>
    <p>I am learning web development.</p>
</div>
```

```css
#profile {
    width: 50%;
}

.card {
    background-color: antiquewhite;
    margin: 20px;
}
```

Here, `#profile` targets that one unique container, while `.card` can be reused on multiple elements.

## 7. The `<div>` element

`<div>` is a generic block-level container used to group related HTML elements. By itself, it does not describe the meaning of the content, but it helps organise content and apply CSS.

```html
<div class="card">
    <h2>My Skills</h2>
    <p>I am learning HTML and CSS.</p>
</div>
```

```css
.card {
    background-color: antiquewhite;
    width: 50%;
    margin: 20px;
}
```

- `class="card"` assigns a class name to the `<div>`.
- `.card` in CSS selects elements whose class includes `card`.
- A `<div>` can contain headings, paragraphs, images and other elements.
- Use semantic elements such as `<header>`, `<main>`, `<section>` or `<footer>` when they describe the content more clearly. Use `<div>` when a generic container is suitable.

## 8. Important styling notes

- `color` changes the text/foreground colour; `background-color` changes the background.
- `text-align: center` centres text within its containing block, not necessarily the block itself.
- `margin` is outside the border; `padding` is inside the border.
- Internal CSS belongs inside `<style>` in the HTML `<head>`.
- External CSS belongs in a separate `.css` file connected with `<link rel="stylesheet" href="...">`.
- CSS property names commonly use lowercase and hyphens, for example `background-color`.
- Save your files and refresh the browser to see the changes.
- Prefer external CSS when a project has multiple pages or many styles to maintain.

## 9. Topics covered so far

- [x] Inline CSS
- [x] Internal CSS using `<style>`
- [x] External CSS using `<link>`
- [x] `text-align`
- [x] `font-size`
- [x] `width`
- [x] `color`
- [x] `background-color`
- [x] CSS comments
- [x] Universal selector `*`
- [x] `margin: 0`
- [x] `id` attribute and CSS ID selector (`#id`)
- [ ] Continue learning `<div>` and related styling
- [ ] Learn more CSS properties as the course continues

*These notes will be updated with new definitions and examples as I progress through the course.*

## 10. Text alignment vs Flexbox alignment

### `text-align`
Aligns text inside an element. It does not centre the element's box itself.

```css
p {
    text-align: center;
}
```

### `justify-content`
Positions flex items along the **main axis**.

```css
.container {
    display: flex;
    justify-content: center;
}
```

With the default `flex-direction: row`, this centres items horizontally.

### `align-items`
Aligns flex items along the **cross axis**.

```css
.container {
    display: flex;
    align-items: center;
}
```

With the default `flex-direction: row`, this aligns items vertically within the container's available cross-axis space.

To centre items on both axes, use `display: flex`, `justify-content: center` and `align-items: center`. Give the container enough height for vertical centring to be visible. These flex properties require a flex container.

## 11. Pixels (`px`) vs percentage (`%`)

- **`px`:** a fixed CSS length unit. `width: 200px;` sets a width of 200 CSS pixels.
- **`%`:** a relative value. `width: 50%;` usually means half the width of the containing block.

```css
.fixed-box { width: 200px; }
.relative-box { width: 50%; }
```

Use percentages when a size should adapt to its container. The reference used for a percentage depends on the property.

## 12. Borders and basic shapes

The `border` property draws a border around an element.

```css
.box {
    width: 200px;
    height: 100px;
    border: 2px solid black;
}
```

In `border: 2px solid black;`:
- `2px` is the thickness.
- `solid` is the border style.
- `black` is the border colour.

Other styles include `dashed`, `dotted` and `double`. You can also set `border-width`, `border-style` and `border-color` separately.

### Rectangle

```css
.rectangle {
    width: 200px;
    height: 100px;
    background-color: aqua;
    border: 2px solid black;
}
```

### Square

```css
.square {
    width: 100px;
    height: 100px;
    background-color: pink;
    border: 2px solid black;
}
```

A square has equal width and height. A rectangle usually has different width and height.

### Circle

```css
.circle {
    width: 100px;
    height: 100px;
    background-color: lightgreen;
    border-radius: 50%;
}
```

A circle can be made by applying `border-radius: 50%` to a square. Elements need visible dimensions and a background or border to be visible.

## 13. Margin vs padding

- **Margin:** space outside an element's border.
- **Padding:** space inside the border, between content and border.

```css
.card {
    margin: 20px;
    padding: 16px;
    border: 2px solid black;
}
```

Here, `margin` separates the card from surrounding elements; `padding` creates space around the content inside the card.

You can set individual sides with properties such as `margin-top` and `padding-left`. With two values, `margin: 10px 20px;` means 10px top/bottom and 20px left/right.

## 14. Classes in HTML and CSS

A **class** labels HTML elements so that the same styles can be reused on multiple elements.

```html
<div class="card">First card</div>
<div class="card">Second card</div>
```

```css
.card {
    background-color: antiquewhite;
    border: 1px solid gray;
    padding: 16px;
    margin: 10px;
}
```

- In HTML, write `class="card"`.
- In CSS, use a dot: `.card`.
- Multiple elements can share the same class.
- An element can have multiple classes separated by spaces, e.g. `class="card highlighted"`.
- An `id` is intended to identify one unique element; a class is reusable.

## 15. Flexbox basics

**Flexbox** is a CSS layout system for arranging items in a row or column and controlling their alignment and spacing.

```html
<div class="container">
    <div class="item">One</div>
    <div class="item">Two</div>
    <div class="item">Three</div>
</div>
```

```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
}
```

- `display: flex;` creates a flex container; its direct children become flex items.
- `justify-content` positions items along the main axis.
- `align-items` aligns items along the cross axis.
- `gap` adds space between items.
- The default `flex-direction` is `row`. Use `flex-direction: column;` to arrange items vertically.
- The main and cross axes depend on `flex-direction`.

## 16. The `<main>` element and styling it with CSS

### HTML `<main>`

The `<main>` element represents the main, unique content of a webpage. It helps browsers, assistive technologies and developers identify the page's central content.

```html
<body>
    <header>
        <h1>My Portfolio</h1>
    </header>

    <main>
        <h2>About Me</h2>
        <p>I am learning web development.</p>
    </main>

    <footer>
        <p>Contact information</p>
    </footer>
</body>
```

- Use `<main>` for the central content of the page.
- A page should normally have one visible `<main>` element.
- Put site-wide navigation or introductory header content in suitable elements such as `<header>` and `<nav>`, rather than using `<main>` for everything.

### Styling `<main>` with CSS

In CSS, writing `main` selects HTML `<main>` elements. This is called a **type selector** (or element selector).

```html
<head>
    <style>
        main {
            width: 80%;
            margin: 0 auto;
            padding: 20px;
            background-color: lightyellow;
        }
    </style>
</head>
```

- `main` is the CSS selector.
- `width: 80%;` sets the main element's width relative to its containing block.
- `margin: 0 auto;` sets top/bottom margin to zero and distributes the available horizontal margin equally, centring the block when it has a width smaller than its container.
- `padding: 20px;` adds space inside the element, around its content.
- `background-color` sets its background colour.

**Important difference:** `<main>` is an HTML element; `main { ... }` is a CSS rule that styles that element. The `<style>` element is where internal CSS rules are written inside an HTML document's `<head>`.

## 17. Topics covered / being learned

- [x] Inline, internal and external CSS
- [x] CSS selector, property and value
- [x] `text-align`, `font-size`, `width`, `color`, `background-color`
- [x] CSS comments and universal selector `*`
- [x] `margin`
- [x] `id` and `class`
- [x] `text-align` vs `justify-content`
- [x] `align-items` basics
- [x] `px` vs `%`
- [x] Borders and basic shapes
- [x] Margin vs padding
- [x] Flexbox basics
- [x] HTML `<main>` element and CSS `main` selector
- [ ] Practise by creating a rectangle, square and centred flex container
- [ ] Continue adding CSS topics as I learn them

## Extra CSS Topics to Learn Later

These are important CSS topics for future study. This section is a reminder only; add detailed notes and examples when each topic is covered in the course.

- **CSS Box Model:** how content, padding, border and margin combine to determine an element's size and spacing.
- **`display`:** controls how an element participates in layout, for example `block`, `inline`, `inline-block`, `flex` and `grid`.
- **`position`:** controls positioning using values such as `static`, `relative`, `absolute`, `fixed` and `sticky`.
- **Flexbox in depth:** wrapping, `flex-direction`, `flex-grow`, `flex-shrink`, `flex-basis` and alignment.
- **CSS Grid:** a layout system for arranging items in rows and columns.
- **Responsive design:** making layouts work across different screen sizes, including media queries.
- **Pseudo-classes:** selectors for a state or condition, such as `:hover` and `:focus`.
- **Pseudo-elements:** styling a specific part of an element, such as `::before` and `::after`.
- **Specificity and the cascade:** how the browser decides which CSS rule applies when rules conflict.
- **Transitions and animations:** creating visual changes and motion with CSS.

