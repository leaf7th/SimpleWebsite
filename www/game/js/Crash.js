/**
 * Basic object function
 */
var object = {
	/**
	 * Get a random number between min and max
	 * @param {int} min min number
	 * @param {int} max max number
	 */
	randomNum: function(min, max) {
		return parseInt(Math.random() * (max - min + 1) + min);
	},

	
	/**
	 * Detecting whether object1 collides with the object2. True if collision, otherwise false.
	 * @param {div} object1 Object1
	 * @param {div} object2 Object2
	 */
	collisionDetection: function (object1, object2) {
			var object1Left = object1.offsetLeft;
			var object1Width = object1.offsetLeft + object1.offsetWidth;
			var object1Top = object1.offsetTop;
			var object1Height = object1.offsetTop + object1.offsetHeight;

			var object2Left = object2.offsetLeft;
			var object2Width = object2.offsetLeft + object2.offsetWidth;
			var object2Top = object2.offsetTop;
			var object2Height = object2.offsetTop + object2.offsetHeight;

			if (!(object1Left > object2Width || object1Width < object2Left || object1Top > object2Height || object1Height < object2Top)) {
				return true;
			}
			return false;
	}
};
