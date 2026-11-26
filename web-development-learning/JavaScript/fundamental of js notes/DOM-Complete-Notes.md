# DOM Complete Notes
## Document Object Model — Beginner-Friendly Step-by-Step Notes

> These notes focus on browser DOM concepts and events. Core JavaScript language concepts are in `JavaScript-Complete-Notes.md`.

## 1. What is the DOM?

DOM means **Document Object Model**.

When a browser loads an HTML page, it creates a tree-like object representation of that page. JavaScript can use the DOM to:
- Find HTML elements.
- Read or change text.
- Change attributes and styles.
- Add or remove elements.
- Respond to user actions such as clicks and key presses.

### HTML example
```html
<html>
  <body>
    <h1>Hello</h1>
    <p>Welcome</p>
  </body>
</html>
```

A simplified DOM tree:
```text
window
  └── document
       └── html
            ├── head
            └── body
                 ├── h1
                 │    └── "Hello" (text node)
                 └── p
                      └── "Welcome" (text node)
```

## 2. window and document

### window object
`window` represents the browser window and is the global object in a browser page. It exposes browser features such as:
- `window.document`
- `window.console`
- `window.location`
- `window.history`
- `window.localStorage`
- `window.setTimeout()`
- `window.alert()`

### document object
`document` represents the currently loaded HTML document. It provides methods to select and create elements.

```javascript
console.log(window);
console.log(window.document);
console.log(document);
```

**Remember:** `window` is the browser window; `document` is the webpage inside it.

## 3. console.log() vs console.dir()

```javascript
console.log(document.body);
console.dir(document.body);
```

- `console.log()` is general-purpose output.
- `console.dir()` is useful for inspecting an object's properties.
- The exact visual display depends on browser developer tools.

## 4. DOM node types

A node is an item in the DOM tree.

Important node types:
| Node | Meaning | `nodeType` |
|---|---|---:|
| Document node | Whole document | 9 |
| Element node | HTML element such as `div`, `p`, `h1` | 1 |
| Text node | Text inside an element | 3 |
| Comment node | HTML comment | 8 |

Example:
```html
<div>
  Hello
  <!-- this is a comment -->
  <p>Welcome</p>
</div>
```

- `div` and `p` are element nodes.
- `Hello` and `Welcome` are text nodes.
- `<!-- this is a comment -->` is a comment node.

**Node vs element:** Every element is a node, but not every node is an element.

Useful properties:
```javascript
element.nodeName;
element.nodeType;
element.parentNode;
element.childNodes;
element.children;
```

- `childNodes` can include text and comment nodes.
- `children` contains element children only.

## 5. Selecting HTML elements

Before changing an element, first select it.

### getElementById()
Selects one element by its id:
```javascript
const heading = document.getElementById("title");
```

### getElementsByClassName()
Returns a live HTMLCollection:
```javascript
const cards = document.getElementsByClassName("card");
```

### getElementsByTagName()
Returns a live HTMLCollection:
```javascript
const paragraphs = document.getElementsByTagName("p");
```

### querySelector()
Returns the first element matching a CSS selector, or `null`:
```javascript
const heading = document.querySelector("#title");
const card = document.querySelector(".card");
const firstParagraph = document.querySelector("p");
```

### querySelectorAll()
Returns a static NodeList containing all matches:
```javascript
const allCards = document.querySelectorAll(".card");
```

### querySelector vs querySelectorAll
| `querySelector()` | `querySelectorAll()` |
|---|---|
| First matching element | All matching elements |
| Element or `null` | Static NodeList |
| One result | Can loop through results |

Loop through selected elements:
```javascript
const items = document.querySelectorAll(".item");

items.forEach(item => {
  console.log(item);
});
```

**Important:** CSS selector syntax is used: `#id`, `.class`, `tag`, `[attribute]`.

## 6. Reading and changing content

Suppose:
```html
<div id="box">
  <h2>Hello</h2>
  <p>Welcome</p>
</div>
```

### innerText
Gets or sets rendered text:
```javascript
const box = document.querySelector("#box");
console.log(box.innerText);
box.innerText = "New visible text";
```

### textContent
Gets or sets text content of the node and descendants. It includes text that may not be visibly rendered:
```javascript
console.log(box.textContent);
box.textContent = "Only plain text";
```

### innerHTML
Gets or sets HTML markup inside an element:
```javascript
box.innerHTML = "<h2>New heading</h2><p>New paragraph</p>";
```

**Safety note:** Do not insert untrusted user input using `innerHTML`; it can create cross-site scripting (XSS) vulnerabilities. Use `textContent` for plain text.

## 7. Attributes: get, set and remove

HTML:
```html
<img id="photo" src="old.jpg" alt="Profile">
```

Select first:
```javascript
const image = document.querySelector("#photo");
```

### getAttribute()
Reads an attribute value:
```javascript
const source = image.getAttribute("src");
console.log(source);
```

### setAttribute()
Sets or updates an attribute:
```javascript
image.setAttribute("src", "new.jpg");
image.setAttribute("alt", "New profile photo");
```

### removeAttribute()
Removes an attribute:
```javascript
image.removeAttribute("alt");
```

**Step to remember:**
1. Select the element.
2. Use `getAttribute()` to read.
3. Use `setAttribute()` to add/update.
4. Use `removeAttribute()` to remove.

## 8. Changing CSS styles with JavaScript

HTML:
```html
<p id="message">Hello</p>
```

JavaScript:
```javascript
const message = document.querySelector("#message");

message.style.color = "blue";
message.style.backgroundColor = "lightyellow";
message.style.fontSize = "24px";
```

Remember:
- CSS properties with hyphens become camelCase in JavaScript.
- `background-color` becomes `backgroundColor`.
- `font-size` becomes `fontSize`.
- Inline style changes affect the element's style attribute.

For reading the final computed style, use:
```javascript
const styles = getComputedStyle(message);
console.log(styles.color);
```

## 9. classList

`classList` lets JavaScript manage CSS classes.

HTML:
```html
<div id="card" class="card">Hello</div>
```

JavaScript:
```javascript
const card = document.querySelector("#card");

card.classList.add("active");       // add class
card.classList.remove("card");      // remove class
card.classList.toggle("dark");      // add if missing, remove if present
card.classList.contains("active");  // true/false
```

**Why use classList instead of changing style directly?**
It is often cleaner to define styles in CSS and use JavaScript to add/remove classes.

Example:
```css
.active {
  background-color: lightgreen;
  border: 2px solid green;
}
```
```javascript
card.classList.add("active");
```

## 10. Creating and inserting a new element

Remember this sequence:

1. Select the parent where the new element should go.
2. Create the element.
3. Add text, attributes or classes.
4. Insert it into the DOM.

HTML:
```html
<ul id="list"></ul>
```

JavaScript:
```javascript
// Step 1: select parent
const list = document.querySelector("#list");

// Step 2: create new element
const item = document.createElement("li");

// Step 3: add content and class
item.textContent = "Learn JavaScript";
item.classList.add("list-item");

// Step 4: insert into parent
list.append(item);
```

### createElement()
Creates an element but does not automatically add it to the page:
```javascript
const heading = document.createElement("h2");
```

### append()
Adds at the end, inside the selected parent:
```javascript
list.append(item);
```

### prepend()
Adds at the beginning, inside the selected parent:
```javascript
list.prepend(item);
```

### before()
Adds a sibling before the selected element:
```javascript
list.before(item);
```

### after()
Adds a sibling after the selected element:
```javascript
list.after(item);
```

### append vs prepend vs before vs after
| Method | Where it inserts |
|---|---|
| `append()` | Inside parent, at the end |
| `prepend()` | Inside parent, at the beginning |
| `before()` | Outside selected element, before it |
| `after()` | Outside selected element, after it |

## 11. Removing an element

Select the element and call `remove()`:
```javascript
const item = document.querySelector(".list-item");
item.remove();
```

Alternative using parent:
```javascript
const parent = document.querySelector("#list");
const child = document.querySelector(".list-item");
parent.removeChild(child);
```

## 12. What is an event?

An event is an action or occurrence in the browser that JavaScript can respond to.

Common event categories:
- Mouse: `click`, `dblclick`, `mouseenter`, `mouseleave`, `mousemove`
- Keyboard: `keydown`, `keyup`
- Form/input: `input`, `change`, `submit`, `focus`, `blur`
- Window/document: `load`, `resize`, `scroll`, `DOMContentLoaded`

Examples:
```javascript
button.addEventListener("click", () => {
  console.log("Button clicked");
});
```

## 13. Event handling methods

### Method 1: Inline HTML handler
```html
<button onclick="sayHello()">Click</button>
```
This mixes HTML and JavaScript, so it is generally not preferred.

### Method 2: Assign an event property
```javascript
button.onclick = function () {
  console.log("Clicked");
};
```
Assigning another function to `onclick` replaces the previous property handler.

### Method 3: addEventListener() — recommended
```javascript
button.addEventListener("click", function () {
  console.log("Clicked");
});
```
Advantages:
- Keeps HTML and JavaScript separate.
- Allows multiple listeners for the same event.
- Supports options such as `capture`, `once` and `passive`.

## 14. Event object

When an event happens, the browser passes an event object to the handler.

```javascript
button.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.type);
  console.log(event.target);
  console.log(event.currentTarget);
});
```

Useful properties:
- `event.type`: event name, such as `"click"`.
- `event.target`: element where the event originated.
- `event.currentTarget`: element whose listener is currently running.
- `event.clientX`, `event.clientY`: pointer position relative to viewport for mouse/pointer events.
- `event.key`: key value for keyboard events.

## 15. Removing an event listener — important

**Remember: first store the callback in a variable, then use the same variable to remove it.**

```javascript
const button = document.querySelector("#btn");

// Step 1: create and store the callback function
const handleClick = () => {
  console.log("Button clicked");
};

// Step 2: add listener using that function reference
button.addEventListener("click", handleClick);

// Step 3: remove using the SAME event and SAME function reference
button.removeEventListener("click", handleClick);
```

Why store the function?
This does not work:
```javascript
button.addEventListener("click", () => console.log("Hi"));
button.removeEventListener("click", () => console.log("Hi"));
```
The two arrow functions are different function objects, even though their code looks the same.

The event type, callback reference and capture setting must match for removal.

## 16. Event bubbling and capturing

An event can travel through the DOM in phases.

### Capturing phase
The event travels from outer ancestors down toward the target.

### Target phase
The event reaches the target element.

### Bubbling phase
The event travels from the target back up through ancestors (for events that bubble).

Simplified:
```text
Capturing: window → document → parent → target
Target:                              target
Bubbling:  target → parent → document → window
```

To listen during capture:
```javascript
parent.addEventListener("click", handler, { capture: true });
```

## 17. Event delegation

Event delegation means adding one listener to a parent and handling events from its child elements.

```html
<ul id="list">
  <li>Apple</li>
  <li>Mango</li>
  <li>Banana</li>
</ul>
```

```javascript
const list = document.querySelector("#list");

list.addEventListener("click", (event) => {
  const item = event.target.closest("li");

  if (item && list.contains(item)) {
    console.log("Clicked:", item.textContent);
  }
});
```

Benefits:
- One listener can handle many children.
- Works well when children are added later.
- Reduces the number of separate listeners.

## 18. preventDefault() vs stopPropagation()

### preventDefault()
Stops the browser's default action.
```javascript
form.addEventListener("submit", event => {
  event.preventDefault();
  console.log("Handle form with JavaScript");
});
```

### stopPropagation()
Stops the event from travelling further through the propagation path.
```javascript
button.addEventListener("click", event => {
  event.stopPropagation();
});
```

They are not the same:
- `preventDefault()` affects the default browser action.
- `stopPropagation()` affects event propagation.

## 19. DOM ready events

### DOMContentLoaded
Fires when HTML parsing is complete and the DOM is ready. It does not wait for all images and subresources to finish loading.
```javascript
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM is ready");
});
```

### load
The window `load` event fires after the page and dependent resources have loaded.
```javascript
window.addEventListener("load", () => {
  console.log("Page resources loaded");
});
```

## 20. Browser storage (related browser API)

### localStorage
Persists until it is cleared:
```javascript
localStorage.setItem("name", "Anu");
const name = localStorage.getItem("name");
localStorage.removeItem("name");
```

### sessionStorage
Stores values for the current tab's page session:
```javascript
sessionStorage.setItem("theme", "dark");
```

Storage values are strings. To store objects, use `JSON.stringify()` and `JSON.parse()`. Do not store sensitive secrets in localStorage because same-origin JavaScript can read it.

## 21. Complete mini example: Add and remove list items

HTML:
```html
<input id="taskInput" placeholder="Enter a task">
<button id="addBtn">Add task</button>
<ul id="taskList"></ul>
```

JavaScript:
```javascript
const input = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");

addBtn.addEventListener("click", () => {
  const taskText = input.value.trim();

  if (taskText === "") return;

  // Create element
  const li = document.createElement("li");
  li.textContent = taskText;

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  // Remove this list item when delete is clicked
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.append(deleteBtn);
  taskList.append(li);

  input.value = "";
});
```

## 22. Quick revision table

| Topic | Remember |
|---|---|
| `window` | Browser window/global object |
| `document` | Current webpage |
| DOM | Tree-like representation of HTML |
| Node | Any item in the DOM tree |
| Element | HTML element node |
| Text node | Text content node |
| Comment node | HTML comment node |
| `querySelector()` | First CSS selector match |
| `querySelectorAll()` | Static NodeList of matches |
| `innerText` | Rendered text |
| `textContent` | Text of node and descendants |
| `innerHTML` | HTML markup inside an element |
| `getAttribute()` | Read attribute |
| `setAttribute()` | Add/update attribute |
| `classList.add()` | Add CSS class |
| `classList.remove()` | Remove CSS class |
| `classList.toggle()` | Toggle CSS class |
| `createElement()` | Create element (not yet inserted) |
| `append()` | Add inside parent at end |
| `prepend()` | Add inside parent at start |
| `before()` / `after()` | Insert sibling |
| `remove()` | Remove selected element |
| `addEventListener()` | Register event callback |
| `removeEventListener()` | Remove using same callback reference |
| `event.target` | Event origin |
| `event.currentTarget` | Current listener target |
| Bubbling | Target upward |
| Capturing | Ancestors downward |
| Delegation | Parent listener handles child events |
| `preventDefault()` | Stop default browser action |
| `stopPropagation()` | Stop propagation |

## 23. DOM revision checklist

- [ ] What is DOM?
- [ ] `window` vs `document`
- [ ] `console.log()` vs `console.dir()`
- [ ] Node, element, text and comment nodes
- [ ] `nodeType`, `children`, `childNodes`
- [ ] `getElementById()`
- [ ] `getElementsByClassName()` and `getElementsByTagName()`
- [ ] `querySelector()` and `querySelectorAll()`
- [ ] `innerText`, `textContent`, `innerHTML`
- [ ] `getAttribute()`, `setAttribute()`, `removeAttribute()`
- [ ] `style` and `getComputedStyle()`
- [ ] `classList` methods
- [ ] `createElement()`
- [ ] `append()`, `prepend()`, `before()`, `after()`
- [ ] `remove()` and `removeChild()`
- [ ] Mouse, keyboard and form events
- [ ] Event object and `target` vs `currentTarget`
- [ ] `addEventListener()`
- [ ] Remove listener using same stored callback
- [ ] Bubbling and capturing
- [ ] Event delegation
- [ ] `preventDefault()` vs `stopPropagation()`
- [ ] `DOMContentLoaded` vs `load`
- [ ] localStorage and sessionStorage


---

# 24. Additional DOM Topics — Expanded Reference

## 24.1 DOM Traversal

Traversal means moving from one node/element to a related node/element.

```javascript
const item = document.querySelector(".item");

item.parentElement;             // parent element
item.children;                  // child elements only
item.firstElementChild;         // first child element
item.lastElementChild;          // last child element
item.nextElementSibling;        // next sibling element
item.previousElementSibling;    // previous sibling element
item.closest(".container");     // nearest matching ancestor (including itself)
```

Related node properties:
- `parentNode`, `childNodes`, `firstChild`, `lastChild`, `nextSibling`, `previousSibling` can include text and comment nodes.
- The `Element`-ending versions work with element nodes only.

## 24.2 dataset and data-* Attributes

HTML:
```html
<button id="buyBtn" data-product-id="42" data-category="books">
  Buy
</button>
```

JavaScript:
```javascript
const button = document.querySelector("#buyBtn");
console.log(button.dataset.productId); // "42"
console.log(button.dataset.category);  // "books"

button.dataset.status = "selected";
delete button.dataset.category;
```

`data-*` values are strings. In JavaScript, dash-separated names become camelCase in `dataset`.

## 24.3 Forms and Input Values

HTML:
```html
<form id="signupForm">
  <input id="username" name="username" required>
  <button type="submit">Submit</button>
</form>
```

JavaScript:
```javascript
const form = document.querySelector("#signupForm");
const username = document.querySelector("#username");

form.addEventListener("submit", event => {
  event.preventDefault();

  const value = username.value.trim();

  if (value === "") {
    console.log("Please enter a username");
    return;
  }

  console.log("Submitted:", value);
});
```

Important form concepts:
- `input.value`: current value of many input controls.
- `input.checked`: checked state of checkbox/radio.
- `input.disabled`: disabled state.
- `required`, `min`, `max`, `minlength`, `maxlength`, `pattern`: native validation attributes.
- `change`: commonly fires when a value is committed/changed.
- `input`: fires as the user edits a value.
- `submit`: handle form submission on the form element.

For multiple form fields:
```javascript
const formData = new FormData(form);
console.log(formData.get("username"));
```

## 24.4 Event Listener Options

```javascript
element.addEventListener("click", handler, {
  once: true,
  capture: false,
  passive: true
});
```

- `once: true`: listener is automatically removed after it runs once.
- `capture: true`: listener runs during capturing phase.
- `passive: true`: promises the handler will not call `preventDefault()`; useful for certain scroll/touch listeners.
- `signal`: an `AbortSignal` can be used to remove listeners when its controller is aborted.

Example with AbortController:
```javascript
const controller = new AbortController();

button.addEventListener("click", handleClick, {
  signal: controller.signal
});

// Remove listeners registered with this signal:
controller.abort();
```

## 24.5 insertAdjacentHTML(), insertAdjacentText() and insertAdjacentElement()

These methods insert content at a chosen position relative to an element.

```javascript
const box = document.querySelector("#box");

box.insertAdjacentHTML("beforeend", "<p>Hello</p>");
box.insertAdjacentText("afterbegin", "Start text ");
```

Positions:
- `beforebegin`: before the element itself.
- `afterbegin`: inside the element, before its first child.
- `beforeend`: inside the element, after its last child.
- `afterend`: after the element itself.

**Security:** `insertAdjacentHTML()` parses HTML. Never pass untrusted input into it. Use `insertAdjacentText()` or `textContent` for plain text.

## 24.6 replaceWith(), replaceChild() and replaceChildren()

```javascript
const oldElement = document.querySelector(".old");
const newElement = document.createElement("p");
newElement.textContent = "Replacement";

oldElement.replaceWith(newElement);
```

- `replaceWith()`: replaces the selected node with supplied nodes/text.
- `parent.replaceChild(newNode, oldNode)`: parent-based replacement.
- `element.replaceChildren(...)`: replaces all children with supplied nodes/text.

## 24.7 cloneNode()

Creates a copy of a node:
```javascript
const original = document.querySelector(".card");
const copy = original.cloneNode(true); // true = include descendants
document.body.append(copy);
```
`cloneNode(true)` copies descendants too. It does not copy listeners registered using `addEventListener()`.

## 24.8 contains() and matches()

```javascript
container.contains(child); // true if child is inside container
button.matches(".primary"); // true if it matches selector
button.closest(".card");    // nearest matching ancestor or itself
```
These are useful for event delegation and checking relationships.

## 24.9 Focus and Form Interaction

```javascript
input.focus();
input.blur();
input.select();
```
- `focus()` moves keyboard focus to the element.
- `blur()` removes focus.
- `select()` selects text in supported text controls.

## 24.10 Accessibility Basics for DOM Work

- Use semantic HTML elements (`button`, `nav`, `main`, `label`, etc.).
- Give form controls associated labels.
- Ensure interactive elements work with a keyboard.
- Do not use a clickable `div` when a real `button` is appropriate.
- Keep focus visible and manage focus when opening/closing dialogs.
- Use ARIA only when native HTML semantics are not sufficient; do not replace semantic HTML unnecessarily.

## 24.11 MutationObserver

Observes changes to the DOM:
```javascript
const target = document.querySelector("#content");

const observer = new MutationObserver(records => {
  console.log(records);
});

observer.observe(target, {
  childList: true,
  subtree: true,
  attributes: true
});

// Later, when no longer needed:
observer.disconnect();
```
Useful when code needs to respond to DOM changes made by other code.

## 24.12 IntersectionObserver

Observes when an element intersects a viewport or ancestor:
```javascript
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("Element is visible");
    }
  });
});

observer.observe(document.querySelector(".lazy-section"));
```
Useful for lazy loading and scroll-based visibility features.

## 24.13 ResizeObserver

Observes changes to an element's size:
```javascript
const observer = new ResizeObserver(entries => {
  for (const entry of entries) {
    console.log(entry.contentRect.width);
  }
});

observer.observe(document.querySelector(".panel"));
```

## 24.14 Browser Events — More Examples

### Input event
```javascript
searchInput.addEventListener("input", event => {
  console.log(event.target.value);
});
```

### Keyboard event
```javascript
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    console.log("Escape pressed");
  }
});
```

### Mouse enter/leave
```javascript
card.addEventListener("mouseenter", () => card.classList.add("active"));
card.addEventListener("mouseleave", () => card.classList.remove("active"));
```

### Window resize
```javascript
window.addEventListener("resize", () => {
  console.log(window.innerWidth, window.innerHeight);
});
```

## 24.15 HTMLCollection vs NodeList

- `getElementsByClassName()` and `getElementsByTagName()` return live HTMLCollections.
- `querySelectorAll()` returns a static NodeList.
- A live collection updates as the DOM changes; a static NodeList does not automatically update.
- `NodeList` from `querySelectorAll()` supports `forEach()` in modern browsers. Use `Array.from(collection)` if you need array methods on an HTMLCollection.

## 24.16 DOM Performance Tips

- Avoid repeatedly querying the same element when you can store a reference.
- Avoid unnecessary layout reads/writes mixed repeatedly in large loops.
- Prefer CSS classes for groups of style changes.
- Use event delegation for many similar dynamic children.
- Use `DocumentFragment` when assembling many nodes before inserting them.
- Remove listeners and disconnect observers when they are no longer needed.
- Profile actual performance before optimizing.

### DocumentFragment example
```javascript
const list = document.querySelector("#list");
const fragment = document.createDocumentFragment();

for (const name of ["Asha", "Riya", "Maya"]) {
  const li = document.createElement("li");
  li.textContent = name;
  fragment.append(li);
}

list.append(fragment);
```

## 24.17 DOM Interview Output/Concept Checks

### Q1. Does createElement() add an element to the page?
No. It creates the element object. You must insert it using methods such as `append()`.

### Q2. Does querySelectorAll() return a live collection?
No. It returns a static NodeList.

### Q3. What is the difference between children and childNodes?
`children` contains element children only. `childNodes` can also include text and comment nodes.

### Q4. Why does removeEventListener() sometimes fail?
Usually because the callback reference or capture setting does not match the one used when registering the listener.

### Q5. Does cloneNode(true) copy addEventListener handlers?
No. It clones the DOM structure and attributes, not listeners registered through `addEventListener()`.

### Q6. What is the difference between input and change?
`input` fires as the user edits. `change` generally fires when the value is committed, with exact timing depending on the control.

## 24.18 DOM Topics Checklist — Expanded

- [ ] DOM tree, window and document
- [ ] Node types and nodeType
- [ ] Element vs node
- [ ] Selectors and collection types
- [ ] Content: innerText, textContent, innerHTML
- [ ] Attributes and dataset
- [ ] Inline styles and computed styles
- [ ] classList
- [ ] Traversal: parent, children, siblings, closest
- [ ] Create, insert, append, prepend
- [ ] before, after, insertAdjacent*
- [ ] Remove, replace, clone
- [ ] contains and matches
- [ ] Forms, values and FormData
- [ ] Mouse, keyboard, input and submit events
- [ ] Event object, target and currentTarget
- [ ] addEventListener options
- [ ] removeEventListener using same callback reference
- [ ] AbortController for listener cleanup
- [ ] Bubbling, capturing and delegation
- [ ] preventDefault vs stopPropagation
- [ ] DOMContentLoaded and load
- [ ] MutationObserver, IntersectionObserver, ResizeObserver
- [ ] Accessibility basics
- [ ] DOM performance and DocumentFragment
- [ ] localStorage and sessionStorage
