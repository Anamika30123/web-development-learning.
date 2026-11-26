# JavaScript DOM — Complete Notes

> Beginner-friendly notes. Remember the workflow: **select → read/change → create if needed → insert → style → handle events.**

## Contents
1. DOM basics
2. Window and document objects
3. `console.log()` vs `console.dir()`
4. DOM tree, nodes and elements
5. Selecting elements
6. Reading and changing content
7. Attributes: get, set, remove
8. Styling with `style`
9. `classList`
10. Creating and inserting elements step by step
11. Removing and replacing elements
12. Events
13. Complete example
14. Revision and practice

---

## 1. What is DOM?

DOM means **Document Object Model**. When a browser loads HTML, it creates a tree-like representation of the page. JavaScript can use this tree to read, change, add, or remove page content.

Example HTML:

```html
<html>
  <head><title>My Page</title></head>
  <body>
    <h1>Hello</h1>
    <p>Welcome to JavaScript</p>
  </body>
</html>
```

Simplified tree:

```text
window
  └── document
      └── html
          ├── head
          │   └── title
          └── body
              ├── h1
              └── p
```

**Remember:** DOM is the webpage represented as objects in a tree.

## 2. Window Object

The **`window` object** is the browser's global object. It represents the browser window/tab and gives access to browser features.

```javascript
console.log(window);
console.log(window.document);
console.log(window.location);
console.log(window.innerWidth);
```

Useful properties and methods:

| Property / method | Meaning |
|---|---|
| `window.document` | Current HTML document |
| `window.location` | Current URL information |
| `window.innerWidth` | Viewport width |
| `window.innerHeight` | Viewport height |
| `window.alert()` | Shows an alert |
| `window.setTimeout()` | Schedules a callback after a delay |
| `window.setInterval()` | Schedules a repeated callback |
| `window.console` | Browser console |

In browser JavaScript, you can usually write `document` instead of `window.document`, and `setTimeout()` instead of `window.setTimeout()`.

**Remember:** `window` = browser global object; `document` = current webpage document.

## 3. Document Object

The **`document` object** represents the HTML document loaded in the browser. It is the main starting point for selecting and changing page elements.

```javascript
console.log(document);
console.log(document.title);
console.log(document.URL);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
```

- `document.title` — page title.
- `document.URL` — page URL.
- `document.head` — `<head>` element.
- `document.body` — `<body>` element.
- `document.documentElement` — root `<html>` element.

## 4. `console.log()` vs `console.dir()`

### `console.log()`
Prints messages, values, and variables.

```javascript
console.log("Hello JavaScript");
console.log(document.body);
```

### `console.dir()`
Displays an object's properties in an inspectable list/tree-like view. Helpful when exploring DOM objects.

```javascript
console.dir(document);
console.dir(document.body);
```

| `console.log()` | `console.dir()` |
|---|---|
| General-purpose logging | Inspects object properties |
| Good for messages and values | Good for exploring object structure |
| DOM elements may appear as HTML-like previews | Often shows the object's property list |

The browser's developer tools decide the exact display. `console.clear()` clears visible console output, not the webpage.

## 5. DOM Tree: Node Types

A **node** is an item in the DOM tree.

### Element node
An HTML tag, such as `<div>`, `<h1>`, `<p>`, or `<body>`.

### Text node
Text inside an element.

### Comment node
An HTML comment, such as `<!-- heading -->`.

Example:

```html
<div>
  Hello DOM
  <!-- This is a comment -->
  <p>Learn JavaScript</p>
</div>
```

Here:
- `<div>` and `<p>` are element nodes.
- `Hello DOM` and `Learn JavaScript` are text nodes.
- `<!-- This is a comment -->` is a comment node.

Spaces and line breaks between tags can also create text nodes.

### Node type values

| Node | `nodeType` |
|---|---:|
| Element | `1` |
| Text | `3` |
| Comment | `8` |
| Document | `9` |

### Node vs Element

- **Node** is the general term for items in the DOM tree: elements, text, comments, and the document.
- **Element** specifically means an HTML element node.
- Every element is a node, but not every node is an element.

Useful properties: `nodeType`, `nodeName`, `tagName` (for elements), and `textContent`.

## 6. Selecting Elements

Before changing an element, first select it.

### `getElementById()`

Selects an element by ID. Do not add `#` in this method.

```html
<h1 id="heading">Hello</h1>
```

```javascript
const heading = document.getElementById("heading");
```

### `querySelector()`

Returns the **first element** matching a CSS selector. Returns `null` if nothing matches.

```javascript
const heading = document.querySelector("h1");   // tag
const card = document.querySelector(".card");   // class
const title = document.querySelector("#title"); // ID
```

### `querySelectorAll()`

Returns all matching elements in a **static NodeList**.

```javascript
const paragraphs = document.querySelectorAll("p");

paragraphs.forEach((paragraph) => {
  console.log(paragraph.textContent);
});
```

| Selector | Selects |
|---|---|
| `"p"` | Paragraph |
| `".card"` | Element with class card |
| `"#title"` | Element with ID title |
| `"div p"` | Paragraph inside a div |
| `"input[type='text']"` | Text input |

Other methods:

```javascript
document.getElementsByClassName("card");
document.getElementsByTagName("p");
```

These return live `HTMLCollection` objects. `querySelectorAll()` returns a static `NodeList`.

**Remember:** `querySelector()` = first match; `querySelectorAll()` = all matches; `getElementById("main")` takes ID without `#`.

## 7. Reading and Changing Content

First select the element:

```javascript
const heading = document.querySelector("h1");
```

### `innerText`
Reads or sets rendered text. It is affected by CSS visibility and layout.

```javascript
console.log(heading.innerText);
heading.innerText = "Welcome to DOM";
```

### `textContent`
Reads or sets text in the element and its descendants, including hidden text. It treats the value as text, not HTML.

```javascript
const para = document.querySelector("p");
console.log(para.textContent);
para.textContent = "I am learning DOM";
```

### `innerHTML`
Reads or sets HTML markup inside an element.

```javascript
const box = document.querySelector(".box");
console.log(box.innerHTML);
box.innerHTML = "<strong>Hello!</strong>";
```

**Security:** Do not put untrusted user input into `innerHTML`; it can cause XSS vulnerabilities. Use `textContent` for plain text.

| Property | Meaning |
|---|---|
| `innerText` | Rendered, visible text |
| `textContent` | Text of node and descendants |
| `innerHTML` | HTML markup inside the element |

## 8. Attributes: `getAttribute()`, `setAttribute()`

An **attribute** gives extra information to an HTML element. Examples: `id`, `class`, `src`, `href`, `alt`, `title`, `type`.

Example:

```html
<img id="photo" src="old.jpg" alt="Old photo">
```

### `getAttribute()` — read/get an attribute

```javascript
const image = document.querySelector("#photo");

console.log(image.getAttribute("src")); // old.jpg
console.log(image.getAttribute("alt")); // Old photo
```

### `setAttribute()` — add or update an attribute

```javascript
image.setAttribute("src", "new.jpg");
image.setAttribute("alt", "A new photo");
```

Syntax:

```javascript
element.setAttribute("attributeName", "value");
```

### `removeAttribute()` — remove an attribute

```javascript
image.removeAttribute("title");
```

### `hasAttribute()` — check if an attribute exists

```javascript
console.log(image.hasAttribute("src")); // true
```

| Method | Use |
|---|---|
| `getAttribute("href")` | Read attribute |
| `setAttribute("href", "...")` | Add/update attribute |
| `removeAttribute("href")` | Remove attribute |
| `hasAttribute("href")` | Check attribute |

**Easy memory trick:** get = read, set = add/change, remove = delete, has = check.

Example: update a link:

```html
<a id="myLink" href="https://example.com">Open</a>
```

```javascript
const link = document.querySelector("#myLink");
console.log(link.getAttribute("href"));
link.setAttribute("href", "https://developer.mozilla.org/");
link.setAttribute("target", "_blank");
```

## 9. Styling with `element.style`

JavaScript can change an element's inline CSS using the `style` property.

```javascript
const heading = document.querySelector("h1");

heading.style.color = "blue";
heading.style.backgroundColor = "lightyellow";
heading.style.fontSize = "30px";
heading.style.textAlign = "center";
```

CSS properties with hyphens use camelCase in JavaScript:

| CSS | JavaScript |
|---|---|
| `background-color` | `backgroundColor` |
| `font-size` | `fontSize` |
| `text-align` | `textAlign` |
| `border-radius` | `borderRadius` |
| `margin-top` | `marginTop` |

Values are generally strings:

```javascript
const card = document.querySelector(".card");
card.style.borderRadius = "12px";
card.style.marginTop = "20px";
```

`element.style` works with inline styles. To read the final style after CSS rules are applied, use:

```javascript
console.log(window.getComputedStyle(card).backgroundColor);
```

For larger design changes, prefer CSS classes and `classList` rather than setting many inline styles.

## 10. `classList`

`classList` helps JavaScript add, remove, toggle, and check CSS classes.

HTML:

```html
<div id="box" class="card">Hello</div>
```

```javascript
const box = document.querySelector("#box");
```

### `add()` — add a class

```javascript
box.classList.add("active");
```

### `remove()` — remove a class

```javascript
box.classList.remove("card");
```

### `toggle()` — add if missing, remove if present

```javascript
box.classList.toggle("dark");
```

### `contains()` — check if class exists

```javascript
console.log(box.classList.contains("active")); // true or false
```

Complete example:

```html
<style>
  .highlight {
    background-color: yellow;
    color: black;
  }
</style>

<p id="message">Hello JavaScript</p>
<button id="changeBtn">Highlight</button>
```

```javascript
const message = document.querySelector("#message");
const button = document.querySelector("#changeBtn");

button.addEventListener("click", () => {
  message.classList.toggle("highlight");
});
```

**Why use `classList`?** Write styling once in CSS, then use JavaScript to add/remove the class. It keeps HTML, CSS, and JavaScript cleaner.

## 11. Creating and Inserting Elements — Step by Step

Suppose you want to add a new paragraph to the page.

**Remember these steps:**

1. Select the parent where the new element should go.
2. Create the new element.
3. Add text/content.
4. Add a class, attribute, or style if needed.
5. Insert the element into the page.

HTML:

```html
<div id="container">
  <h2>My Page</h2>
</div>
```

### Step 1 — Select the parent

```javascript
const container = document.querySelector("#container");
```

### Step 2 — Create the element

Use `document.createElement()`.

```javascript
const paragraph = document.createElement("p");
```

This creates the element in memory. It is **not visible yet** because it has not been inserted into the DOM.

### Step 3 — Add content

```javascript
paragraph.textContent = "This paragraph was created using JavaScript.";
```

### Step 4 — Add a class or attribute (optional)

```javascript
paragraph.classList.add("new-text");
paragraph.setAttribute("title", "New paragraph");
```

### Step 5 — Insert into the page

```javascript
container.append(paragraph);
```

Full example:

```html
<div id="container">
  <h2>My Page</h2>
</div>

<script>
  // 1. Select parent
  const container = document.querySelector("#container");

  // 2. Create element
  const paragraph = document.createElement("p");

  // 3. Add content
  paragraph.textContent = "Hello! I was added using JavaScript.";

  // 4. Add class
  paragraph.classList.add("new-text");

  // 5. Insert into page
  container.append(paragraph);
</script>
```

**Very important:** `createElement()` creates the element; `append()` or another insertion method places it into the DOM.

## 12. `append()`, `prepend()`, `before()`, `after()`

Assume:

```html
<div id="parent">
  <p id="first">First paragraph</p>
</div>
```

```javascript
const parent = document.querySelector("#parent");
const first = document.querySelector("#first");

const newElement = document.createElement("p");
newElement.textContent = "New paragraph";
```

- `parent.append(newElement)` — adds at the end, **inside** parent.
- `parent.prepend(newElement)` — adds at the beginning, **inside** parent.
- `first.before(newElement)` — adds **outside**, before the selected element as a sibling.
- `first.after(newElement)` — adds **outside**, after the selected element as a sibling.

| Method | Where it inserts |
|---|---|
| `append()` | End, inside parent |
| `prepend()` | Beginning, inside parent |
| `before()` | Before selected element, outside it |
| `after()` | After selected element, outside it |

**Memory trick:** append = inside/end; prepend = inside/start; before/after = outside as siblings.

If an element already exists in the document and you append it elsewhere, it moves; it is not automatically copied.

## 13. Removing and Replacing Elements

### `remove()`

Removes the selected element from the DOM.

```javascript
const paragraph = document.querySelector("p");
paragraph.remove();
```

### `removeChild()`

Removes a child through its parent.

```javascript
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
parent.removeChild(child);
```

### `replaceWith()`

Replaces an element with another node or text.

```javascript
const oldHeading = document.querySelector("h1");
const newHeading = document.createElement("h2");

newHeading.textContent = "New Heading";
oldHeading.replaceWith(newHeading);
```

## 14. DOM Events — Introduction

An **event** is an action in the browser, such as a click, key press, or form submission.

Use `addEventListener()` to run code when an event happens.

```html
<button id="myButton">Click me</button>
```

```javascript
const button = document.querySelector("#myButton");

button.addEventListener("click", () => {
  console.log("Button clicked!");
});
```

Common events:
- `click`, `dblclick`
- `input`, `change`
- `submit`
- `keydown`, `keyup`
- `mouseover`, `mouseout`
- `DOMContentLoaded` — fires after HTML is parsed and the DOM is ready; it does not wait for all images to finish loading.

## 15. Complete Mini Example

This combines selection, element creation, text, classes, and a click event.

```html
<!DOCTYPE html>
<html>
<head>
  <title>DOM Practice</title>
  <style>
    .highlight {
      color: darkblue;
      background-color: lightyellow;
      padding: 8px;
    }
  </style>
</head>
<body>
  <h1 id="heading">My DOM Practice</h1>
  <button id="addBtn">Add paragraph</button>
  <div id="container"></div>

  <script>
    // 1. Select elements
    const button = document.querySelector("#addBtn");
    const container = document.querySelector("#container");

    // 2. Listen for click
    button.addEventListener("click", () => {
      // 3. Create paragraph
      const paragraph = document.createElement("p");

      // 4. Add text
      paragraph.textContent = "I was created with JavaScript!";

      // 5. Add CSS class
      paragraph.classList.add("highlight");

      // 6. Insert into container
      container.append(paragraph);
    });
  </script>
</body>
</html>
```

## 16. Quick Revision

- DOM = Document Object Model; tree representation of the webpage.
- `window` = browser global object.
- `document` = current webpage document.
- `console.log()` = general logging.
- `console.dir()` = inspect object properties.
- Node = any item in the DOM tree.
- Element node = HTML element.
- Text node = text in the document.
- Comment node = HTML comment.
- `querySelector()` = first matching element.
- `querySelectorAll()` = all matches in a static NodeList.
- `getAttribute()` = read an attribute.
- `setAttribute()` = add/update an attribute.
- `removeAttribute()` = remove an attribute.
- `.style` = change inline CSS.
- `classList.add()` = add a class.
- `classList.remove()` = remove a class.
- `classList.toggle()` = add if absent, remove if present.
- `classList.contains()` = check a class.
- `createElement()` = create an element; not inserted yet.
- `append()` = insert at end inside parent.
- `prepend()` = insert at start inside parent.
- `before()` / `after()` = insert as a sibling.
- `remove()` = remove an element.
- `addEventListener()` = respond to events.

## 17. Practice Tasks

Try these in an HTML file with a linked JavaScript file:

- [ ] Print `window` and `document` in the browser console.
- [ ] Compare `console.log(document.body)` and `console.dir(document.body)`.
- [ ] Select an element by ID with `getElementById()`.
- [ ] Select a class with `querySelector()`.
- [ ] Select all paragraphs with `querySelectorAll()`.
- [ ] Inspect `nodeType` for an element, text node, and comment node.
- [ ] Change a heading using `textContent`.
- [ ] Compare `innerText`, `textContent`, and `innerHTML`.
- [ ] Read an image's `src` with `getAttribute()`.
- [ ] Change an image's `src` with `setAttribute()`.
- [ ] Change a heading's color using `.style`.
- [ ] Add, remove, toggle, and check a class using `classList`.
- [ ] Create a paragraph using `createElement()`.
- [ ] Add text and a class to it.
- [ ] Insert it using `append()` and `prepend()`.
- [ ] Practise `before()` and `after()`.
- [ ] Remove an element using `remove()`.
- [ ] Add a click event listener to a button.

## 18. Next DOM Topics

Add these as you learn them:
1. Parent, child, and sibling traversal (`parentElement`, `children`, `firstElementChild`, `nextElementSibling`).
2. Event object, event bubbling, capturing, and delegation.
3. Forms and input handling.
4. `DOMContentLoaded`, script loading, `defer`, and `async`.
5. Small DOM projects.


---

# 19. Events in JavaScript

## 19.1 What is an Event?

An **event** is an action or change that happens in the browser or on a webpage. JavaScript can listen for an event and run code when it happens.

Examples:
- A user clicks a button.
- A user double-clicks an element.
- A user presses or releases a keyboard key.
- A user types into an input field.
- A user submits a form.
- A page is about to be printed.

**Easy definition to remember:** An event is something that happens on a webpage, and JavaScript can respond to it.

Events notify JavaScript that something interesting has happened and may require code to run.

## 19.2 Types of Events

### 1. Mouse events

| Event | When it happens |
|---|---|
| `click` | User clicks an element |
| `dblclick` | User double-clicks |
| `mousedown` | Mouse button is pressed |
| `mouseup` | Mouse button is released |
| `mouseover` | Pointer enters an element or one of its descendants |
| `mouseout` | Pointer leaves an element or one of its descendants |
| `mousemove` | Pointer moves |
| `mouseenter` | Pointer enters an element; does not bubble |
| `mouseleave` | Pointer leaves an element; does not bubble |

### 2. Keyboard events

| Event | When it happens |
|---|---|
| `keydown` | A key is pressed |
| `keyup` | A key is released |
| `keypress` | Older event; deprecated, so prefer `keydown` |

### 3. Form and input events

| Event | When it happens |
|---|---|
| `input` | Input value changes as the user types |
| `change` | A value change is committed |
| `submit` | A form is submitted |
| `focus` | An element receives focus |
| `blur` | An element loses focus |
| `reset` | A form is reset |

### 4. Print events

- `beforeprint` — fires when the page is about to be printed or print preview opens.
- `afterprint` — fires after printing or print preview closes.

### 5. Other useful events

- `load` — a resource or page has loaded.
- `DOMContentLoaded` — the HTML has been parsed and the DOM is ready.
- `scroll` — an element or document is scrolled.
- `resize` — the browser window is resized.

## 19.3 Event Handling

**Event handling** means writing JavaScript code that runs when a particular event occurs.

There are different ways to attach an event handler.

### Method 1: Inline HTML event handler

```html
<button onclick="alert('Button clicked!')">Click me</button>
```

This puts JavaScript directly inside HTML.

It works, but it is generally not recommended for modern code because it mixes HTML structure and JavaScript behavior.

### Method 2: Event handler property

The event handler can be assigned through a property such as `onclick`.

```html
<button id="btn">Click me</button>
```

```javascript
const button = document.querySelector("#btn");

button.onclick = function () {
  console.log("Button clicked!");
};
```

You can also use an arrow function:

```javascript
button.onclick = () => {
  console.log("Button clicked!");
};
```

**Limitation:** Assigning a new function to `onclick` replaces the previous handler assigned to that property. It is not the best choice when multiple independent listeners are needed.

### Method 3: `addEventListener()` — Recommended

```javascript
element.addEventListener("eventName", callbackFunction);
```

Example:

```javascript
const button = document.querySelector("#btn");

button.addEventListener("click", () => {
  console.log("Button clicked!");
});
```

- First argument: event name, written as a string such as `"click"`.
- Second argument: callback function that runs when the event occurs.

**Remember:** Prefer `addEventListener()` for most event handling. It keeps JavaScript separate from HTML and supports multiple listeners for the same event.

## 19.4 Event Object

The **event object** is a special object automatically passed to an event handler when an event occurs. It contains information about that event.

You can name its parameter `event`, `e`, or any other valid variable name.

```javascript
button.addEventListener("click", (event) => {
  console.log(event);
});
```

The shorter common style is:

```javascript
button.addEventListener("click", (e) => {
  console.log(e);
});
```

### Important event object properties

| Property | Meaning |
|---|---|
| `e.type` | Name/type of the event, such as `"click"` |
| `e.target` | Element where the event originally occurred |
| `e.currentTarget` | Element whose event listener is currently running |
| `e.clientX` | Mouse pointer's horizontal position in the viewport |
| `e.clientY` | Mouse pointer's vertical position in the viewport |
| `e.key` | Key value for keyboard events, such as `"Enter"` |
| `e.code` | Physical key position identifier, such as `"KeyA"` |
| `e.preventDefault()` | Prevents the browser's default action when possible |
| `e.stopPropagation()` | Stops the event from continuing through the propagation path |

Example:

```javascript
button.addEventListener("click", (e) => {
  console.log("Event type:", e.type);
  console.log("Clicked element:", e.target);
  console.log("Listener element:", e.currentTarget);
  console.log("Mouse X:", e.clientX);
  console.log("Mouse Y:", e.clientY);
});
```

**Important difference:**
- `target` = where the event started.
- `currentTarget` = element whose listener is currently executing.

For example, if a button contains a `<span>` and the user clicks the span, `e.target` may be the span while `e.currentTarget` is the button.

## 19.5 `addEventListener()` vs `removeEventListener()`

### Add an event listener

```javascript
element.addEventListener("click", callback);
```

Attaches a callback function to an event.

### Remove an event listener

```javascript
element.removeEventListener("click", callback);
```

Removes the previously attached listener.

**Very important:** To remove a listener, pass the same event type and the same function reference that was used to add it. An identical-looking new arrow function is a different function object.

Correct example:

```javascript
const button = document.querySelector("#btn");

function sayHello() {
  console.log("Hello!");
}

button.addEventListener("click", sayHello);

// Later, remove the same listener:
button.removeEventListener("click", sayHello);
```

This will not remove the original listener because it creates a new function:

```javascript
button.addEventListener("click", () => console.log("Hello!"));

// This is a different function, so it does not remove the first one:
button.removeEventListener("click", () => console.log("Hello!"));
```

### Can one element have multiple listeners for the same event?

Yes. `addEventListener()` allows multiple listeners to be attached.

```javascript
button.addEventListener("click", () => {
  console.log("First listener");
});

button.addEventListener("click", () => {
  console.log("Second listener");
});
```

Both callbacks run when the button is clicked. Adding the same function reference again with the same event type and options does not create a duplicate registration.

## 19.6 Event Listener Options

`addEventListener()` can take a third argument for options.

```javascript
element.addEventListener("click", callback, options);
```

Useful options:

- `once: true` — listener runs once and is then removed automatically.
- `capture: true` — listener runs during the capturing phase.
- `passive: true` — tells the browser the listener will not call `preventDefault()`; useful for certain scroll and touch listeners.

Example — run only once:

```javascript
button.addEventListener("click", () => {
  console.log("This runs only once");
}, { once: true });
```

Example — capture phase:

```javascript
parent.addEventListener("click", () => {
  console.log("Parent capture");
}, { capture: true });
```

## 19.7 Mouse Event Example

```html
<button id="clickBtn">Click me</button>
```

```javascript
const clickBtn = document.querySelector("#clickBtn");

clickBtn.addEventListener("click", () => {
  console.log("You clicked the button!");
});

clickBtn.addEventListener("dblclick", () => {
  console.log("You double-clicked the button!");
});
```

## 19.8 Keyboard Event Example

Keyboard events are often listened for on an input or on the document.

```html
<input id="nameInput" placeholder="Type something">
```

```javascript
const input = document.querySelector("#nameInput");

input.addEventListener("keydown", (e) => {
  console.log("Key pressed:", e.key);
});

input.addEventListener("keyup", (e) => {
  console.log("Key released:", e.key);
});
```

Example — detect Enter:

```javascript
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    console.log("You pressed Enter");
  }
});
```

## 19.9 Input and Change Events

### `input`

Runs whenever the value changes as the user types or edits the field.

```javascript
const nameInput = document.querySelector("#nameInput");

nameInput.addEventListener("input", (e) => {
  console.log("Current value:", e.target.value);
});
```

### `change`

Runs when a change is committed. For a text input, this commonly happens when the field loses focus after its value has changed. For a checkbox or select, it fires when the selection changes.

```javascript
const citySelect = document.querySelector("#city");

citySelect.addEventListener("change", (e) => {
  console.log("Selected city:", e.target.value);
});
```

**Remember:** `input` is useful for live updates while typing; `change` is useful when you need the committed value.

## 19.10 Form Submit Event and `preventDefault()`

When a form is submitted, the browser normally performs its default submission behavior, which may navigate or reload the page.

Use `preventDefault()` when you want to handle the submission with JavaScript instead.

```html
<form id="myForm">
  <input id="username" placeholder="Enter your name">
  <button type="submit">Submit</button>
</form>
```

```javascript
const form = document.querySelector("#myForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.querySelector("#username").value;
  console.log("Submitted name:", username);
});
```

**Remember:** `preventDefault()` stops the browser's default action for that event. It does not stop event bubbling.

## 19.11 Event Bubbling

**Event bubbling** means that after an event occurs on a nested element, it can travel upward through its ancestors.

Example structure:

```html
<div id="parent">
  Parent
  <button id="child">Child button</button>
</div>
```

```javascript
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");

parent.addEventListener("click", () => {
  console.log("Parent clicked");
});

child.addEventListener("click", () => {
  console.log("Child clicked");
});
```

When the button is clicked, the usual bubbling order is:

```text
Child clicked
Parent clicked
```

The event starts at the target and bubbles upward through ancestors.

## 19.12 Event Capturing

**Event capturing** is the phase where the event travels from outer ancestors down toward the target element.

To listen during capturing, pass `{ capture: true }` or `true` as the third argument.

```javascript
parent.addEventListener("click", () => {
  console.log("Parent capture");
}, { capture: true });

child.addEventListener("click", () => {
  console.log("Child listener");
});
```

For a click on the child, the capturing listener on the parent runs before the event reaches the child.

### Event flow — simplified

1. **Capturing phase:** outer ancestors → target.
2. **Target phase:** event reaches the target.
3. **Bubbling phase:** target → outer ancestors.

Not every event bubbles. Check the event's behavior when needed.

## 19.13 `stopPropagation()`

`stopPropagation()` stops the event from continuing to travel through the capturing or bubbling path.

```javascript
child.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Child clicked");
});
```

With this handler, the click will not continue bubbling to the parent.

**Difference:**
- `preventDefault()` prevents the browser's default action.
- `stopPropagation()` stops the event travelling to other elements along the propagation path.
- `stopImmediatePropagation()` also prevents other listeners on the same element from running.

Use propagation-stopping methods only when necessary; they can make event behavior harder to understand.

## 19.14 Event Delegation

**Event delegation** means adding one event listener to a parent instead of adding separate listeners to many child elements. It works because many events bubble.

Example:

```html
<ul id="fruitList">
  <li>Apple</li>
  <li>Mango</li>
  <li>Banana</li>
</ul>
```

```javascript
const fruitList = document.querySelector("#fruitList");

fruitList.addEventListener("click", (e) => {
  if (e.target.matches("li")) {
    console.log("You clicked:", e.target.textContent);
  }
});
```

Benefits:
- Fewer event listeners.
- Useful for lists with many items.
- Can handle child elements added later, as long as the event bubbles to the parent.

**Remember:** Event delegation = one parent listener handles events from matching children.

## 19.15 `target` vs `currentTarget`

```javascript
parent.addEventListener("click", (e) => {
  console.log("target:", e.target);
  console.log("currentTarget:", e.currentTarget);
});
```

- `e.target` is the element where the event originated.
- `e.currentTarget` is the element whose listener is running.

This difference is especially important in event delegation.

## 19.16 Common Mistakes to Avoid

1. Writing `"onclick"` in `addEventListener()`. Use `"click"` instead.
2. Calling the callback immediately: use `handleClick`, not `handleClick()`, when passing a function reference.
3. Trying to remove a listener with a newly created anonymous function. Reuse the same function reference.
4. Forgetting `e.preventDefault()` when handling a form submission without normal navigation.
5. Confusing `target` with `currentTarget`.
6. Thinking `preventDefault()` stops bubbling. It does not.
7. Assuming every event bubbles. Some events do not.
8. Adding many separate listeners when event delegation would be simpler.

## 19.17 Quick Revision

- **Event:** An action or change that happens in the browser.
- **Event handling:** Running JavaScript in response to an event.
- **Mouse events:** `click`, `dblclick`, `mouseover`, `mouseout`, etc.
- **Keyboard events:** `keydown`, `keyup`.
- **Form events:** `input`, `change`, `submit`, `focus`, `blur`.
- **Print events:** `beforeprint`, `afterprint`.
- **Inline handler:** HTML attribute such as `onclick`; generally avoid in modern code.
- **Handler property:** `element.onclick = function`; assigning again replaces the previous property handler.
- **`addEventListener()`:** Attaches an event callback; supports multiple listeners.
- **`removeEventListener()`:** Removes a listener using the same event type and callback reference.
- **Event object:** Object containing details about the event.
- **`e.type`:** Event name.
- **`e.target`:** Original event target.
- **`e.currentTarget`:** Element whose listener is executing.
- **`e.clientX` / `e.clientY`:** Pointer coordinates in the viewport.
- **`e.key`:** Keyboard key value.
- **`preventDefault()`:** Prevents default browser behavior.
- **Bubbling:** Event travels upward from target to ancestors.
- **Capturing:** Event travels from ancestors toward the target.
- **`stopPropagation()`:** Stops further propagation.
- **Event delegation:** Parent listener handles events from child elements.

## 19.18 Event Practice Tasks

- [ ] Show a message when a button is clicked.
- [ ] Show a different message on double-click.
- [ ] Change a heading when the mouse enters it.
- [ ] Print the key pressed using `keydown`.
- [ ] Detect when the Enter key is pressed.
- [ ] Show the current input value using the `input` event.
- [ ] Read a selected option using the `change` event.
- [ ] Handle a form's `submit` event and use `preventDefault()`.
- [ ] Log `e.type`, `e.target`, and `e.currentTarget`.
- [ ] Add two listeners to the same button.
- [ ] Remove a listener using the same callback function reference.
- [ ] Try an event listener with `{ once: true }`.
- [ ] Observe bubbling from a button to its parent.
- [ ] Compare bubbling and capturing order.
- [ ] Stop bubbling using `stopPropagation()`.
- [ ] Build a list and handle all item clicks using event delegation.

## 19.19 Interview Questions — Events

### Q1. What is an event in JavaScript?
An event is an action or change in the browser, such as a click, key press, or form submission, that JavaScript can respond to.

### Q2. What is event handling?
Event handling means writing a function that runs when a particular event occurs.

### Q3. What is `addEventListener()`?
It attaches a callback function to an element for a particular event.

### Q4. Difference between `onclick` and `addEventListener()`?
`onclick` is a handler property and assigning a new function replaces the previous property handler. `addEventListener()` supports multiple listeners and provides options such as capturing and once.

### Q5. What is the event object?
It is an object automatically passed to an event handler that contains details about the event, such as its type, target, and pointer coordinates.

### Q6. Difference between `target` and `currentTarget`?
`target` is where the event originated. `currentTarget` is the element whose listener is currently executing.

### Q7. Difference between `keydown` and `keyup`?
`keydown` fires when a key is pressed; `keyup` fires when it is released.

### Q8. Difference between `input` and `change`?
`input` fires as the value is edited. `change` fires when the value change is committed.

### Q9. What is event bubbling?
It is the propagation phase where an event travels from the target element upward through its ancestors.

### Q10. What is event capturing?
It is the propagation phase where the event travels from outer ancestors down toward the target.

### Q11. What is `preventDefault()`?
It prevents the browser's default action for an event, such as the normal form submission behavior.

### Q12. What is `stopPropagation()`?
It prevents the event from continuing through the propagation path.

### Q13. What is event delegation?
It is a technique where one listener on a parent handles events from its child elements.

### Q14. How do you remove an event listener?
Use `removeEventListener()` with the same event type and callback function reference used when adding it.

## 19.20 Next DOM Topics

Continue adding these when you learn them:
1. Parent, child, and sibling traversal.
2. More event practice and browser event details.
3. Forms and input validation.
4. `DOMContentLoaded`, `defer`, and `async`.
5. Practical DOM projects.
