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
