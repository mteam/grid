# mteam/grid

Simple component for working with grids, for example in spritesheets.

## API

### new Grid(cols, rows, width, height)

The `width` and `height` arguments are the width and height of a grid cell.

### .iterate(fn(x, y))

Calls `fn` on every grid cell with distances from top left corner of the grid.

### .clone([cols, rows])

Create a new grid with the same cell width and height and optionally different number of columns and rows.
