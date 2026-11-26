# HTML Learning Notes

**Status:** In progress  
**Course:** Apna College  
**Purpose:** My personal revision notes. Add new topics as I learn them.

## 1. What is HTML?

**HTML** stands for **HyperText Markup Language**. It describes the structure and content of a webpage. HTML uses elements, usually written with tags, to mark up headings, paragraphs, links, images and other content.

HTML is not a programming language: it is a markup language.

## 2. Basic HTML document structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Page</title>
</head>
<body>
    <h1>Hello, world!</h1>
    <p>This is my first webpage.</p>
</body>
</html>
```

- `<!DOCTYPE html>` tells the browser to use modern HTML.
- `<html>` is the root element of the document.
- `lang="en"` declares that the page language is English.
- `<head>` contains page metadata and linked resources; its contents are generally not displayed as page content.
- `<meta charset="UTF-8">` sets the character encoding.
- The viewport meta tag helps the page size correctly on mobile screens.
- `<title>` sets the title shown in the browser tab.
- `<body>` contains the visible page content.

## 3. Tags and elements

A **tag** is markup such as `<p>` or `</p>`. An **element** usually includes the opening tag, content and closing tag.

```html
<p>I am learning HTML.</p>
```

- `<p>` is the opening tag.
- `I am learning HTML.` is the content.
- `</p>` is the closing tag.
- The whole thing is a paragraph element.

Some elements are **void elements** and do not have closing tags, such as `<br>`, `<img>` and `<meta>`.

## 4. Headings — `<h1>` to `<h6>`

Headings describe the hierarchy of page content. `<h1>` is the highest-level heading and `<h6>` is the lowest-level heading.

```html
<h1>My Portfolio</h1>
<h2>About Me</h2>
<h3>My Skills</h3>
```

Use heading levels to organise content logically, not just to make text look bigger. CSS controls visual appearance.

## 5. Paragraph — `<p>`

The `<p>` element represents a paragraph.

```html
<p>I am learning web development step by step.</p>
<p>This is another paragraph.</p>
```

Browsers normally display paragraphs as separate blocks with space around them.

## 6. Lorem ipsum placeholder text

`lorem` is commonly a shortcut provided by code editors such as Emmet. Typing `lorem` and expanding the abbreviation may insert placeholder text.

Example of the resulting HTML:

```html
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
```

**Remember:** `lorem` is not an HTML tag. The generated words are dummy text used while designing a page; replace them with real content.

## 7. Line break — `<br>`

`<br>` inserts a line break inside text. It is a void element and does not need `</br>`.

```html
<p>
  Anamika Khandelwal<br>
  Aspiring Software Developer<br>
  Pune, India
</p>
```

Use `<br>` for meaningful line breaks, not to create large gaps between sections. Use CSS margins and padding for spacing.

## 8. Anchor/link — `<a>`

The `<a>` element creates a hyperlink. Its `href` attribute specifies the destination.

```html
<a href="https://developer.mozilla.org/">Learn HTML on MDN</a>
```

Open a link in a new tab when appropriate:

```html
<a href="https://developer.mozilla.org/" target="_blank" rel="noopener noreferrer">
  Open MDN
</a>
```

- `href` — destination URL or path.
- `target="_blank"` — opens the link in a new browsing context, usually a new tab.
- `rel="noopener noreferrer"` — recommended alongside `_blank` for security and privacy.

A link can point to another website, another file/page in your project, an email address (`mailto:`) or a section on the same page.

## 9. Image — `<img>`

The `<img>` element embeds an image. It is a void element.

```html
<img src="profile.jpg" alt="Portrait for my portfolio" width="200">
```

- `src` — image file path or URL.
- `alt` — text alternative describing the image; important for accessibility and when an image cannot load.
- `width` — image width (here, in CSS pixels when used as an HTML dimension).

For a decorative image that adds no information, an empty `alt=""` can be appropriate. Do not omit meaningful alternative text.

## 10. Attributes

**Attributes** provide extra information or configure an HTML element. They are usually written in the opening tag as `name="value"`.

```html
<a href="https://example.com" target="_blank">Visit example</a>
<img src="cat.jpg" alt="A cat sitting on a chair" width="300">
```

Here, `href`, `target`, `src`, `alt` and `width` are attributes.

Common attributes to recognise:

- `href` — link destination.
- `src` — resource location, such as an image.
- `alt` — image text alternative.
- `id` — unique identifier for an element in a document.
- `class` — one or more class names, commonly used to select elements in CSS.
- `title` — advisory information, often shown as a tooltip.
- `width` and `height` — dimensions for applicable elements.
- `lang` — language declaration.
- `style` — inline CSS (use sparingly; a stylesheet is usually easier to maintain).

## 11. Important extra HTML concepts to learn next

- [ ] Lists: `<ul>`, `<ol>`, `<li>`
- [ ] Comments: `<!-- This is a comment -->`
- [ ] Bold importance: `<strong>`; stress emphasis: `<em>`
- [ ] Generic containers: `<div>` and `<span>`
- [ ] Buttons: `<button>`
- [ ] Forms: `<form>`, `<label>`, `<input>`, `<textarea>`, `<select>`
- [ ] Semantic structure: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- [ ] Tables when presenting tabular data: `<table>`, `<tr>`, `<th>`, `<td>`
- [ ] File paths and folders for local images and links
- [ ] Difference between `id` and `class`
- [ ] Difference between block and inline elements (and how CSS can change display behaviour)

These are suggested next topics, not claims that they were all covered in today's lesson.

## 12. Common beginner mistakes

- Forgetting the `alt` attribute on meaningful images.
- Using `<br>` repeatedly to create spacing instead of CSS.
- Thinking `lorem` is an HTML element.
- Forgetting quotation marks around attribute values.
- Confusing a tag with an attribute: `<a>` is a tag; `href` is an attribute.
- Using heading tags only to make text larger.
- Forgetting that `src` and `href` need correct paths or URLs.

## 13. Quick revision questions

Try to answer without looking at the notes:

1. What does HTML stand for?
2. What is the difference between a tag and an attribute?
3. What is the purpose of `<head>`? What belongs in `<body>`?
4. What are `<h1>` and `<p>` used for?
5. Is `lorem` an HTML tag? What is it used for?
6. What does `<br>` do, and does it need a closing tag?
7. What does `href` do in an anchor element?
8. What are `src` and `alt` used for in an image?
9. What is the difference between `id` and `class`?
10. Why should a webpage use headings in a logical order?

## 14. Practice exercise

Create `index.html` and write a simple introduction page containing:

- [ ] One `<h1>` with your name
- [ ] One paragraph about what you are learning
- [ ] One `<h2>` for your goals
- [ ] A list of three goals (use `<ul>` and `<li>`)
- [ ] One link to a learning resource
- [ ] One image with a useful `alt` value, if you have an image available

Run the page in a browser and check that each element appears as expected.

## 15. Daily learning log

### Day 1 — Topics shown in my course screenshots

- [x] `<h1>` and other heading elements
- [x] `<p>` paragraph element
- [x] `lorem` placeholder text shortcut
- [x] `<br>` line break
- [x] `<a>` anchor/link element
- [x] `<img>` image element
- [x] HTML attributes
- [x] `<head>`, `<title>` and `<!DOCTYPE html>`

**Next:** Practise these elements in a small page, then add new topics here when learned. Checkboxes mean the topic was covered in the course/screenshots; they do not automatically mean I have mastered it.
