var assert = require('assert'),
    sham = require('sham'),
    Grid = require('./index.js');

describe('Grid', function() {

  it('has correct total size', function() {
    var grid = new Grid(3, 4, 10, 20);

    assert.equal(grid.total.width, 3 * 10);
    assert.equal(grid.total.height, 4 * 20);
  });
  
  it('can be iterated over', function() {
    var grid = new Grid(3, 3, 10, 10);

    var fn = sham.spy()
      .called(9)
      .args(0, 0).args(10, 0).args(20, 0)
      .args(0, 10).args(10, 10).args(20, 10)
      .args(0, 20).args(10, 20).args(20, 20);

    grid.iterate(fn);

    fn.check();
  });

  it('can be cloned', function() {
    var grid = new Grid(3, 4, 10, 20),
        clone1 = grid.clone(5, 6),
        clone2 = grid.clone();

    assert.equal(clone1.cols, 5);
    assert.equal(clone1.rows, 6);
    assert.equal(clone1.cell.width, 10);
    assert.equal(clone1.cell.height, 20);
    assert.equal(clone2.cols, 3);
    assert.equal(clone2.rows, 4);
  });

});
