describe("Gilded Rose", function() {
	/*
	  - All items have a *sell_in* value which denotes the number of days we have to
    sell the item

	  - All items have a *quality* value which denotes how valuable the item is

	  - At the end of each day our system lowers both values for every item
	*/

	describe( 'class Item', function () {
		var Item = require( '../src/item.js' );
		
		it("should create an item instance with a sell_in property", function() {
	    	var item = new Item('Aged Brie', 2, 0);
	    	expect( item.sell_in ).toEqual( 2 );
	    });

	    it("should create an item instance with a quality property", function() {
	    	var item = new Item('Aged Brie', 2, 0);
	    	expect( item.sell_in ).toEqual( 2 );
	    });
	});

});
