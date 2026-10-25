# Shapes Mini Project

A beginner-friendly HTML and CSS mini project that creates basic shapes and adds hover effects.

## Project Structure

```text
Shapes-Project/
├── README.md
├── index.html
└── style.css
```

## What This Project Does

- Creates a simple webpage containing different CSS shapes.
- Uses HTML to provide the structure.
- Uses CSS to control each shape's size, colour, border, and position.
- Adds hover effects so a shape changes when the mouse pointer is over it.

## Concepts Used

| Concept | Definition | Use in this project |
|---|---|---|
| HTML | HyperText Markup Language; defines webpage structure. | Holds the heading and shape elements. |
| CSS | Cascading Style Sheets; controls how HTML elements look. | Styles the shapes and page layout. |
| Class (`class`) | A reusable name assigned to one or more HTML elements. | Lets CSS style multiple shapes using `.shape`. |
| ID (`id`) | A unique identifier for an HTML element. | Can identify a particular shape, such as `#circle`. |
| `width` and `height` | Set an element's width and height. | Control the size of each shape. |
| `background-color` | Sets the background colour of an element. | Gives each shape its colour. |
| `border` | Draws a line around an element. | Outlines the shapes. |
| `border-radius` | Rounds an element's corners. | Makes a circle when the element is square and the radius is `50%`. |
| `:hover` | A CSS pseudo-class that applies styles while the pointer is over an element. | Changes a shape's appearance on hover. |
| `transform` | Visually moves, rotates, scales, or skews an element. | Enlarges a shape when hovered. |
| `transition` | Makes changes in supported CSS properties happen gradually. | Smooths the hover effect. |
| `display: flex` | Enables Flexbox layout for a container. | Arranges shapes neatly in a row and allows wrapping. |
| `gap` | Sets space between items in a layout. | Keeps consistent spacing between shapes. |
| `box-sizing: border-box` | Includes padding and border in an element's declared width and height. | Makes shape dimensions easier to control. |

## Shape Basics

### Rectangle

A rectangle can be created by giving an element a width and a different height.

```css
.rectangle {
  width: 180px;
  height: 100px;
}
```

### Square

A square uses the same width and height.

```css
.square {
  width: 110px;
  height: 110px;
}
```

### Circle

A circle uses equal width and height with `border-radius: 50%`.

```css
.circle {
  width: 110px;
  height: 110px;
  border-radius: 50%;
}
```

### Oval

An oval uses a wider width than height and a large border radius.

```css
.oval {
  width: 160px;
  height: 90px;
  border-radius: 50%;
}
```

## Understanding the Hover Effect

```css
.shape {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.shape:hover {
  transform: scale(1.08);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.18);
}
```

- `.shape` selects every element with the `shape` class.
- `:hover` applies the rule while the pointer is over that shape.
- `transform: scale(1.08)` enlarges the shape to 108% of its original visual size.
- `box-shadow` adds a shadow around the shape.
- `transition` makes the change smoother.

The hover effect does not change the shape's original layout space; `transform` changes how it is visually rendered.

## How to Run

1. Keep `index.html`, `style.css`, and `README.md` in the same folder.
2. Open `index.html` in a browser, or use the Live Server extension in VS Code.
3. Move your pointer over the shapes to see the hover effect.
4. Edit the CSS colours, dimensions, and hover values to experiment.

## What I Learned

- How HTML and CSS work together.
- How classes connect HTML elements to CSS rules.
- How width, height, colour, and border create basic shapes.
- How `border-radius` creates rounded corners and circles.
- How `:hover`, `transform`, and `transition` create interactive visual effects.

## Future Improvements

- Add a triangle using CSS borders.
- Add different hover colours and rotations.
- Make the layout responsive for smaller screens.
- Add buttons to switch shape colours.
