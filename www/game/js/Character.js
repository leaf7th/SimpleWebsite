/**
 * Game character
 */
var character = {
	flyTimer:null,
	animationTimer:null,
	characterPause:false,
	div:document.createElement("div"),
	
	/**
	 * Show the game character
	 * @param {div} parentObj Parent Div
	 */
	displayCharacter:function(parentObj) {
		this.div.style.width = "40px";
		this.div.style.height = "40px";
		this.div.style.backgroundImage = "url(img/"+playerCharacter+"0.png)";
		this.div.style.backgroundRepeat = "no-repeat";
		this.div.style.position = "absolute";
		this.div.style.left = browserWidth * 0.45 + "px";
		this.div.style.top = "200px";
		this.div.style.zIndex = "1";
		parentObj.appendChild(this.div);  
	},
	
	fallSpeed: 0, 
	/**
	 * Game character fly status. It will have a 2px fall speed and when it hits
	 * the ground or game pauses, it will stop flying.
	 */
	flyCharacter: function(){ 
		character.characterPause = false;
		character.flyTimer = setInterval(fly,40);
		function fly() {
			character.div.style.top = character.div.offsetTop + character.fallSpeed++ + "px";
			if (character.div.offsetTop < 0) {  
				character.fallSpeed = 2; 
			}
			if (character.div.offsetTop >= browserHeight*0.88 || character.characterPause == true) {
				character.fallSpeed = 0;
				clearInterval(character.flyTimer); 
				clearInterval(character.animationTimer); 
			}
			if (character.fallSpeed > 15) {
				character.fallSpeed = 15;  
			}
		}
	},
	
	/**
	 * Show the animation when the character flying
	 */
	animation: function() { 
		var up = ["url(img/up_"+playerCharacter+"0.png)", "url(img/up_"+playerCharacter+"1.png)"];
		var down = ["url(img/down_"+playerCharacter+"0.png)", "url(img/down_"+playerCharacter+"1.png)"];
		var i = 0, j = 0;
		character.animationTimer = setInterval(picChange,120);
		function picChange() {
			if (character.fallSpeed > 0) {
				character.div.style.backgroundImage = down[i++];
				if (i==2) {i = 0}
			}if (character.fallSpeed < 0) {
				character.div.style.backgroundImage = up[j++];
				if (j==2) {j = 0}
			}
		}
	}
};
