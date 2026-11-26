# DOM Expanded Topics — Detailed Beginner-Friendly Guide

This guide explains the additional DOM topics from the expanded DOM notes. Each section includes a definition, syntax, example, explanation, and important points.

## 1. DOM Traversal

### Definition
DOM traversal means moving from one element to another through their relationships in the DOM tree. You can move to a parent, child, or sibling without selecting everything again.

### Common properties
```js
 element.parentElement       // parent element
 element.children            // element children only
 element.firstElementChild   // first element child
 element.lastElementChild    // last element child
 element.nextElementSibling  // next sibling element
 element.previousElementSibling // previous sibling element
```

### Example
```html
<div id="parent">
  <p id="first">First</p>
  <p id="second">Second</p>
</div>
```
```js
const second = document.querySelector("#second");
console.log(second.parentElement); // the div
console.log(second.previousElementSibling); // first paragraph
console.log(second.parentElement.children); // both paragraphs
```

### Explanation
- `parentElement` moves upward to the parent element.
- `children` gives the child elements.
- `nextElementSibling` and `previousElementSibling` move sideways.
- `children` excludes text and comment nodes; `childNodes` includes them.

**Interview point:** Use `nextElementSibling` when you specifically want the next HTML element, not a text node or comment.

## 2. `dataset` and `data-*` attributes

### Definition
Custom `data-*` attributes let you store extra information on an HTML element. JavaScript reads and writes these values through the element's `dataset` property.

### Syntax
```html
<div data-user-id="42" data-user-name="Anu"></div>
```
```js
 element.dataset.userId
 element.dataset.userName
 element.dataset.userId = "50";
```

### Example
```html
<button id="buyBtn" data-product-id="p101" data-price="499">Buy</button>
```
```js
const button = document.querySelector("#buyBtn");
console.log(button.dataset.productId); // "p101"
console.log(button.dataset.price);     // "499"
button.dataset.price = "599";
```

### Explanation
- HTML uses lowercase, hyphen-separated names such as `data-product-id`.
- JavaScript converts them to camelCase: `dataset.productId`.
- Dataset values are strings. Convert them when you need numbers: `Number(button.dataset.price)`.

**Important:** `data-*` attributes are for custom data, not for storing secrets. Users can inspect them in browser tools.

## 3. Forms and input values

### Definition
The DOM lets JavaScript read what a user typed, check form fields, and respond when a form is submitted.

### Common properties and methods
```js
input.value                 // current input value
checkbox.checked            // true or false
select.value                // selected option value
form.elements               // form controls collection
form.reset()                // reset controls to default values
input.focus()               // move keyboard focus to input
```

### Example: read a form
```html
<form id="signupForm">
  <label for="username">Name</label>
  <input id="username" name="username" required>
  <button type="submit">Submit</button>
</form>
<p id="result"></p>
```
```js
const form = document.querySelector("#signupForm");
const username = document.querySelector("#username");
const result = document.querySelector("#result");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  result.textContent = `Hello, ${username.value}`;
});
```

### Explanation
1. Select the form and input.
2. Listen for the form's `submit` event.
3. `preventDefault()` stops the browser's normal form navigation/submission for this example.
4. Read the entered text using `.value`.
5. Display it safely with `textContent`.

### Built-in validation
```js
if (username.checkValidity()) {
  console.log("Input is valid");
} else {
  console.log(username.validationMessage);
}
```
Useful attributes include `required`, `minlength`, `maxlength`, `min`, `max`, `type="email"`, and `pattern`.

**Important:** Client-side validation improves user experience but does not replace server-side validation.

## 4. Event listener options

### Definition
`addEventListener()` accepts an optional third argument that controls how and when a listener runs.

### Syntax
```js
 element.addEventListener("eventName", callback, options);
```

### `once`
Runs the listener once and then removes it automatically.
```js
button.addEventListener("click", () => {
  console.log("This runs once");
}, { once: true });
```

### `capture`
Runs the listener during the capturing phase instead of the default bubbling phase.
```js
parent.addEventListener("click", handleClick, { capture: true });
```

### `passive`
Promises that the listener will not call `preventDefault()`. It can help the browser handle scrolling smoothly for events such as `wheel` or `touchmove`.
```js
window.addEventListener("scroll", handleScroll, { passive: true });
```

### `signal`
Uses an `AbortController` signal to remove one or more listeners together.
```js
const controller = new AbortController();
button.addEventListener("click", handleClick, { signal: controller.signal });
// Later:
controller.abort();
```

**Important:** Do not use `passive: true` when the handler needs to cancel the event with `preventDefault()`.

## 5. `insertAdjacentHTML()`, `insertAdjacentText()`, `insertAdjacentElement()`

### Definition
These methods insert content at a chosen position relative to an existing element.

### Four positions
- `beforebegin`: before the element itself.
- `afterbegin`: inside the element, before its first child.
- `beforeend`: inside the element, after its last child.
- `afterend`: after the element itself.

### Syntax
```js
 element.insertAdjacentHTML(position, htmlString);
 element.insertAdjacentText(position, text);
 element.insertAdjacentElement(position, newElement);
```

### Example
```html
<ul id="list"><li>Apple</li></ul>
```
```js
const list = document.querySelector("#list");
list.insertAdjacentHTML("beforeend", "<li>Banana</li>");
list.insertAdjacentText("afterbegin", "Shopping: ");
```

### Explanation
`beforeend` adds the new list item inside the end of the list. `insertAdjacentText` inserts literal text rather than parsing it as HTML.

**Security point:** Never pass untrusted input to `insertAdjacentHTML()`. Use `insertAdjacentText()` or `textContent` for plain user-provided text.

## 6. Replacing elements: `replaceWith()`, `replaceChild()`, `replaceChildren()`

### Definition
These methods replace an existing node or replace the contents of a parent element.

### `replaceWith()`
```js
oldElement.replaceWith(newElement);
```
Example:
```js
const oldPara = document.querySelector("#oldPara");
const newPara = document.createElement("p");
newPara.textContent = "Updated paragraph";
oldPara.replaceWith(newPara);
```

### `replaceChild()`
Called on the parent. The new node is the first argument and the old node is the second.
```js
parent.replaceChild(newNode, oldNode);
```

### `replaceChildren()`
Replaces all children of an element with the supplied nodes or text.
```js
container.replaceChildren(newHeading, newParagraph);
// Remove all children:
container.replaceChildren();
```

**Remember:** `replaceWith()` is called on the node being replaced; `replaceChild()` is called on its parent; `replaceChildren()` replaces all children inside the receiver.

## 7. `cloneNode()`

### Definition
`cloneNode()` creates a copy of a DOM node.

### Syntax
```js
const copy = element.cloneNode(false); // shallow copy
const deepCopy = element.cloneNode(true); // copy descendants too
```

### Example
```html
<div id="card"><h2>Product</h2><p>Price: 100</p></div>
```
```js
const card = document.querySelector("#card");
const copy = card.cloneNode(true);
document.body.append(copy);
```

### Explanation
- `false` copies the element itself, not its child nodes.
- `true` copies the element and its descendants.
- The copy is not automatically inserted into the page; append or insert it.

**Important interview point:** `cloneNode(true)` does not copy listeners registered using `addEventListener()`. Also be careful with duplicate `id` attributes when cloning.

## 8. `contains()` and `matches()`

### `contains()` definition
Checks whether a node is itself or a descendant of another node.

```js
parent.contains(child); // true or false
```

Example:
```js
const box = document.querySelector("#box");
const item = document.querySelector(".item");
console.log(box.contains(item));
```

### `matches()` definition
Checks whether an element matches a CSS selector.

```js
 element.matches(".active");
```

Example:
```js
const button = document.querySelector("button");
if (button.matches(".primary")) {
  console.log("Primary button");
}
```

### Related: `closest()`
Finds the element itself or nearest ancestor matching a selector.
```js
const card = button.closest(".card");
```
`closest()` is especially useful in event delegation when a click happens on a nested icon or span inside a button.

## 9. Focus and form interaction

### Definition
Focus is the state in which an element is ready to receive keyboard input. Inputs and buttons can receive focus.

### Common methods and properties
```js
input.focus();
input.blur();
document.activeElement;
```

### Example
```html
<input id="search" placeholder="Search">
<button id="searchBtn">Focus search</button>
```
```js
const search = document.querySelector("#search");
document.querySelector("#searchBtn").addEventListener("click", () => {
  search.focus();
});
console.log(document.activeElement);
```

**Important:** Do not remove the visible keyboard focus indicator without providing a clear alternative. Keyboard users need to know which control is focused.

## 10. Accessibility basics for DOM work

### Definition
Accessibility means making a webpage usable by people with different abilities and input methods, including keyboard and assistive technologies such as screen readers.

### Practical rules
1. Use semantic HTML: `<button>` for actions, `<a>` for navigation, `<label>` for form labels.
2. Give form inputs associated labels.
3. Provide meaningful `alt` text for informative images; use empty `alt=""` for decorative images.
4. Ensure controls can be used with a keyboard.
5. Keep visible focus styles.
6. Use headings in a logical order.
7. Use ARIA only when native HTML does not provide the needed semantics.

### Example: accessible button and input
```html
<label for="email">Email address</label>
<input id="email" type="email" required>
<button type="button" id="showHelp">Show help</button>
<p id="help" aria-live="polite"></p>
```
```js
document.querySelector("#showHelp").addEventListener("click", () => {
  document.querySelector("#help").textContent = "Enter a valid email address.";
});
```

`aria-live="polite"` can announce updates to assistive technology without abruptly interrupting the user. Use it thoughtfully.

## 11. `MutationObserver`

### Definition
`MutationObserver` watches a DOM node for changes, such as added/removed children or changed attributes/text.

### Syntax
```js
const observer = new MutationObserver((mutationRecords) => {
  // respond to changes
});
observer.observe(targetElement, options);
observer.disconnect();
```

### Example
```html
<div id="watchMe">Original text</div>
```
```js
const target = document.querySelector("#watchMe");
const observer = new MutationObserver((records) => {
  records.forEach(record => console.log(record.type));
});
observer.observe(target, {
  childList: true,
  attributes: true,
  characterData: true,
  subtree: true
});
target.textContent = "Changed text";
// When no longer needed:
// observer.disconnect();
```

### Options
- `childList`: watch children being added or removed.
- `attributes`: watch attribute changes.
- `characterData`: watch text-node data changes.
- `subtree`: include descendants.

**Use case:** Detect when another script changes a part of the page. Disconnect observers when they are no longer needed.

## 12. `IntersectionObserver`

### Definition
`IntersectionObserver` asynchronously detects when a target element enters or leaves the visible area of a viewport or another scrolling container.

### Example: lazy-load or reveal an item
```js
const target = document.querySelector("#section");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("Section is visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.25 });
observer.observe(target);
```

### Important terms
- `observe(element)`: start watching an element.
- `unobserve(element)`: stop watching one element.
- `disconnect()`: stop watching all targets.
- `isIntersecting`: whether the target intersects the observer root.
- `threshold`: how much intersection is needed to trigger an entry.

**Use cases:** lazy loading images, reveal-on-scroll effects, and checking whether an item is visible. It is generally preferable to repeatedly calculating positions during scroll events.

## 13. `ResizeObserver`

### Definition
`ResizeObserver` watches an element's size and calls a callback when its content or border box size changes.

### Example
```js
const panel = document.querySelector("#panel");
const observer = new ResizeObserver(entries => {
  for (const entry of entries) {
    console.log("New size:", entry.contentRect.width, entry.contentRect.height);
  }
});
observer.observe(panel);
// Later: observer.disconnect();
```

**Use case:** update a chart, component, or layout when its container changes size, even if the browser window itself did not resize.

## 14. More browser events

### `input`
Fires as the value of an input or textarea changes, usually for each user edit.
```js
input.addEventListener("input", event => {
  console.log(event.target.value);
});
```

### `change`
Fires when a value is committed/changed. Its timing depends on the control; for text inputs it commonly fires after editing and focus change.
```js
select.addEventListener("change", event => {
  console.log(event.target.value);
});
```

### Keyboard events
```js
document.addEventListener("keydown", event => {
  console.log(event.key);
  if (event.key === "Escape") console.log("Escape pressed");
});
```
Use `event.key` for the meaning of the key. Avoid relying on deprecated key-code properties.

### Mouse enter and leave
```js
card.addEventListener("mouseenter", () => card.classList.add("highlight"));
card.addEventListener("mouseleave", () => card.classList.remove("highlight"));
```
These events do not bubble like `mouseover` and `mouseout`.

### Window resize
```js
window.addEventListener("resize", () => {
  console.log(window.innerWidth, window.innerHeight);
});
```
For an element's size, use `ResizeObserver` rather than assuming window resize tells you everything.

## 15. `HTMLCollection` vs `NodeList`

### Definition
Both are collection-like objects used to represent groups of DOM nodes/elements.

| Feature | HTMLCollection | NodeList |
|---|---|---|
| Common source | `getElementsByClassName()`, `children` | `querySelectorAll()`, `childNodes` |
| Contents | Elements only | Can contain different node types, depending on source |
| Live/static | Commonly live | Can be live or static; `querySelectorAll()` returns static |
| `forEach()` | Not generally available | Available on modern NodeList |

### Example
```js
const liveItems = document.getElementsByClassName("item");
const staticItems = document.querySelectorAll(".item");
```
If matching elements are added later, the live collection updates automatically; the static NodeList from `querySelectorAll()` does not update.

**Interview point:** Do not memorize “all NodeLists are static.” `childNodes` is a live NodeList; `querySelectorAll()` returns a static NodeList.

## 16. DOM performance and `DocumentFragment`

### Definition
DOM performance means avoiding unnecessary layout, style recalculation, and repeated DOM updates. A `DocumentFragment` is a lightweight container that can hold nodes before they are inserted into the document.

### Example
```html
<ul id="items"></ul>
```
```js
const list = document.querySelector("#items");
const fragment = document.createDocumentFragment();

for (let i = 1; i <= 3; i++) {
  const li = document.createElement("li");
  li.textContent = `Item ${i}`;
  fragment.append(li);
}

list.append(fragment);
```

### Explanation
1. Create elements while they are in the fragment.
2. Append each new item to the fragment.
3. Append the fragment to the real list once.
4. Its child nodes move into the document; the fragment itself is not inserted as a visible element.

### More performance tips
- Cache frequently used element references.
- Avoid repeatedly querying the same element inside large loops.
- Prefer `textContent` for plain text.
- Use event delegation for many similar child elements when appropriate.
- Avoid unnecessary layout reads mixed with style writes in tight loops.
- Use `requestAnimationFrame()` for visual updates tied to rendering when appropriate.

## 17. Event delegation — detailed reminder

### Definition
Event delegation means adding one listener to a common parent instead of adding a separate listener to every child. It works because many events bubble from the target to ancestors.

### Example
```html
<ul id="menu">
  <li><button data-action="edit">Edit</button></li>
  <li><button data-action="delete">Delete</button></li>
</ul>
```
```js
const menu = document.querySelector("#menu");
menu.addEventListener("click", event => {
  const button = event.target.closest("button[data-action]");
  if (!button || !menu.contains(button)) return;
  console.log(button.dataset.action);
});
```

### Why use it?
- Fewer event listeners.
- Works for matching child elements added later.
- Centralizes handling logic.

**Important:** Check that the matched element belongs to the intended parent. `closest()` may find an ancestor outside the delegated container if the structure allows it; `contains()` helps guard this.

## 18. Quick syntax revision

| Topic | Syntax to remember |
|---|---|
| Parent | `element.parentElement` |
| Children | `element.children` |
| Next sibling | `element.nextElementSibling` |
| Custom data | `element.dataset.userId` |
| Input value | `input.value` |
| Checkbox state | `checkbox.checked` |
| One-time listener | `addEventListener("click", fn, { once: true })` |
| Stop listener with controller | `controller.abort()` |
| Insert HTML | `element.insertAdjacentHTML("beforeend", html)` |
| Replace node | `oldNode.replaceWith(newNode)` |
| Replace all children | `element.replaceChildren(node)` |
| Clone deeply | `element.cloneNode(true)` |
| Check descendant | `parent.contains(child)` |
| Match selector | `element.matches(".active")` |
| Find nearest matching ancestor | `element.closest(".card")` |
| Current focused element | `document.activeElement` |
| Watch DOM changes | `new MutationObserver(callback)` |
| Watch visibility | `new IntersectionObserver(callback)` |
| Watch element size | `new ResizeObserver(callback)` |
| Create fragment | `document.createDocumentFragment()` |

## 19. Practice questions

1. What is the difference between `parentNode` and `parentElement`?
2. How do `children` and `childNodes` differ?
3. How does `dataset` convert `data-user-id` into JavaScript property naming?
4. What is the difference between `input` and `change` events?
5. What does `{ once: true }` do in `addEventListener()`?
6. What are the four positions accepted by `insertAdjacentHTML()`?
7. What is the difference between `replaceWith()` and `replaceChildren()`?
8. Does `cloneNode(true)` copy listeners registered with `addEventListener()`?
9. What is the difference between `matches()` and `closest()`?
10. What does `MutationObserver` watch?
11. When would you use `IntersectionObserver`?
12. Why might you use `ResizeObserver` instead of the window `resize` event?
13. Is every NodeList static?
14. What is a `DocumentFragment`?
15. Why is `textContent` safer than inserting untrusted strings with `innerHTML`?

## 20. Final learning advice

Learn the basics first: selecting elements, changing content and attributes, styles, creating/removing elements, and event listeners. Then learn traversal, forms, delegation, and event options. Finally, study observers, accessibility, and performance. Practise each topic in a small HTML file rather than memorizing syntax alone.
