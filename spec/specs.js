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

	    it("should create an item instance with a quality property", function() {
	    	var item = new Item('Aged Brie', 2, 0);
	    	expect( item.sell_in ).toEqual( 2 );
	    });
	});

});

},{"../src/item.js":3}],2:[function(require,module,exports){
// describe( 'function update-quality', function () {
// 	var Item = require( '../src/item.js' );
// 	var updateQuality = require( '../src/update-quality.js' );
//   var item1 = new Item('Aged Brie', 2, 0);

// 	it("should create an item instance with a sell_in property", function() {
//     expect( item.sell_in ).toEqual( 2 );
//   });
// });
},{}],3:[function(require,module,exports){
function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

module.exports = Item;
},{}]},{},[1,2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcGVjL2dpbGRlZF9yb3NlLnNwZWMuanMiLCJzcGVjL3VwZGF0ZS1xdWFsaXR5LnNwZWMuanMiLCJzcmMvaXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJkZXNjcmliZShcIkdpbGRlZCBSb3NlXCIsIGZ1bmN0aW9uKCkge1xuXHQvKlxuXHQgIC0gQWxsIGl0ZW1zIGhhdmUgYSAqc2VsbF9pbiogdmFsdWUgd2hpY2ggZGVub3RlcyB0aGUgbnVtYmVyIG9mIGRheXMgd2UgaGF2ZSB0b1xuICAgIHNlbGwgdGhlIGl0ZW1cblxuXHQgIC0gQWxsIGl0ZW1zIGhhdmUgYSAqcXVhbGl0eSogdmFsdWUgd2hpY2ggZGVub3RlcyBob3cgdmFsdWFibGUgdGhlIGl0ZW0gaXNcblxuXHQgIC0gQXQgdGhlIGVuZCBvZiBlYWNoIGRheSBvdXIgc3lzdGVtIGxvd2VycyBib3RoIHZhbHVlcyBmb3IgZXZlcnkgaXRlbVxuXHQqL1xuXG5cdGRlc2NyaWJlKCAnY2xhc3MgSXRlbScsIGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgSXRlbSA9IHJlcXVpcmUoICcuLi9zcmMvaXRlbS5qcycgKTtcblx0XHRcblx0XHRpdChcInNob3VsZCBjcmVhdGUgYW4gaXRlbSBpbnN0YW5jZSB3aXRoIGEgc2VsbF9pbiBwcm9wZXJ0eVwiLCBmdW5jdGlvbigpIHtcblx0ICAgIFx0dmFyIGl0ZW0gPSBuZXcgSXRlbSgnQWdlZCBCcmllJywgMiwgMCk7XG5cdCAgICBcdGV4cGVjdCggaXRlbS5zZWxsX2luICkudG9FcXVhbCggMiApO1xuXHQgICAgfSk7XG5cblx0ICAgIGl0KFwic2hvdWxkIGNyZWF0ZSBhbiBpdGVtIGluc3RhbmNlIHdpdGggYSBxdWFsaXR5IHByb3BlcnR5XCIsIGZ1bmN0aW9uKCkge1xuXHQgICAgXHR2YXIgaXRlbSA9IG5ldyBJdGVtKCdBZ2VkIEJyaWUnLCAyLCAwKTtcblx0ICAgIFx0ZXhwZWN0KCBpdGVtLnNlbGxfaW4gKS50b0VxdWFsKCAyICk7XG5cdCAgICB9KTtcblx0fSk7XG5cbn0pO1xuIiwiLy8gZGVzY3JpYmUoICdmdW5jdGlvbiB1cGRhdGUtcXVhbGl0eScsIGZ1bmN0aW9uICgpIHtcbi8vIFx0dmFyIEl0ZW0gPSByZXF1aXJlKCAnLi4vc3JjL2l0ZW0uanMnICk7XG4vLyBcdHZhciB1cGRhdGVRdWFsaXR5ID0gcmVxdWlyZSggJy4uL3NyYy91cGRhdGUtcXVhbGl0eS5qcycgKTtcbi8vICAgdmFyIGl0ZW0xID0gbmV3IEl0ZW0oJ0FnZWQgQnJpZScsIDIsIDApO1xuXG4vLyBcdGl0KFwic2hvdWxkIGNyZWF0ZSBhbiBpdGVtIGluc3RhbmNlIHdpdGggYSBzZWxsX2luIHByb3BlcnR5XCIsIGZ1bmN0aW9uKCkge1xuLy8gICAgIGV4cGVjdCggaXRlbS5zZWxsX2luICkudG9FcXVhbCggMiApO1xuLy8gICB9KTtcbi8vIH0pOyIsImZ1bmN0aW9uIEl0ZW0obmFtZSwgc2VsbF9pbiwgcXVhbGl0eSkge1xuICB0aGlzLm5hbWUgPSBuYW1lO1xuICB0aGlzLnNlbGxfaW4gPSBzZWxsX2luO1xuICB0aGlzLnF1YWxpdHkgPSBxdWFsaXR5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEl0ZW07Il19
