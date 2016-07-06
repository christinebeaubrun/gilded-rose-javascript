describe( 'function update-quality', function () {
	var Item = require( '../src/item.js' );
	var updateQuality = require( '../src/update-quality.js' );
  var item1 = new Item('Aged Brie', 2, 0);

	it("should create an item instance with a sell_in property", function() {
    expect( item.sell_in ).toEqual( 2 );
  });
});