(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
	});

});

},{"../src/item.js":2}],2:[function(require,module,exports){
function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

module.exports = Item;
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcGVjL2dpbGRlZF9yb3NlLnNwZWMuanMiLCJzcmMvaXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZGVzY3JpYmUoXCJHaWxkZWQgUm9zZVwiLCBmdW5jdGlvbigpIHtcblx0Lypcblx0ICAtIEFsbCBpdGVtcyBoYXZlIGEgKnNlbGxfaW4qIHZhbHVlIHdoaWNoIGRlbm90ZXMgdGhlIG51bWJlciBvZiBkYXlzIHdlIGhhdmUgdG9cbiAgICBzZWxsIHRoZSBpdGVtXG5cblx0ICAtIEFsbCBpdGVtcyBoYXZlIGEgKnF1YWxpdHkqIHZhbHVlIHdoaWNoIGRlbm90ZXMgaG93IHZhbHVhYmxlIHRoZSBpdGVtIGlzXG5cblx0ICAtIEF0IHRoZSBlbmQgb2YgZWFjaCBkYXkgb3VyIHN5c3RlbSBsb3dlcnMgYm90aCB2YWx1ZXMgZm9yIGV2ZXJ5IGl0ZW1cblx0Ki9cblxuXHRkZXNjcmliZSggJ2NsYXNzIEl0ZW0nLCBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIEl0ZW0gPSByZXF1aXJlKCAnLi4vc3JjL2l0ZW0uanMnICk7XG5cdFx0XG5cdFx0aXQoXCJzaG91bGQgY3JlYXRlIGFuIGl0ZW0gaW5zdGFuY2Ugd2l0aCBhIHNlbGxfaW4gcHJvcGVydHlcIiwgZnVuY3Rpb24oKSB7XG5cdCAgICB2YXIgaXRlbSA9IG5ldyBJdGVtKCdBZ2VkIEJyaWUnLCAyLCAwKTtcblx0ICAgIGV4cGVjdCggaXRlbS5zZWxsX2luICkudG9FcXVhbCggMiApO1xuXHQgIH0pO1xuXHR9KTtcblxufSk7XG4iLCJmdW5jdGlvbiBJdGVtKG5hbWUsIHNlbGxfaW4sIHF1YWxpdHkpIHtcbiAgdGhpcy5uYW1lID0gbmFtZTtcbiAgdGhpcy5zZWxsX2luID0gc2VsbF9pbjtcbiAgdGhpcy5xdWFsaXR5ID0gcXVhbGl0eTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJdGVtOyJdfQ==
