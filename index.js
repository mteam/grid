module.exports = Grid;

function Grid(cols, rows, width, height) {
  this.cols = cols;
  this.rows = rows;

  this.cell = {
    width: width,
    height: height
  };

  this.total = {
    width: cols * width,
    height: rows * height
  };
}

Grid.prototype = {

  iterate: function(fn) {
    for (var row = 0; row < this.rows; row++) {
      for (var col = 0; col < this.cols; col++) {
        var x = col * this.cell.width,
            y = row * this.cell.height;

        fn(x, y);
      }
    }
  },

  clone: function(cols, rows) {
    return new Grid(
      cols || this.cols, rows || this.rows,
      this.cell.width, this.cell.height
    );
  }

};
