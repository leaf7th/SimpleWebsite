/**
 * Game bonus apple
 */
function Bonus() {
    this.bonusFrame = null;
    this.top = object.randomNum(30,370);
	
	/**
	 * Create frame(div) function
	 */
	this.createBonusFrame = function(url, positionType, left, top) {
		var frame = document.createElement("div");
		frame.style.width = "20px";
		frame.style.height = "20px";
		frame.style.position = positionType;
		frame.style.left = left;
		frame.style.top = top;
		frame.style.backgroundImage = url;  
		return frame;
	};
	
	/**
	 * Craete bonus apple
	 */
	this.createBonus = function() {
        var bonus = this.createBonusFrame("url(img/bonus.png)");
        this.bonusFrame = this.createBonusFrame(null, "absolute", "100%", this.top + "px");
        this.bonusFrame.appendChild(bonus);
		jsGameFrame.appendChild(this.bonusFrame);
	};
	
	/**
	 * Move bonus apple
	 */
	this.moveBonus = function() { 
		this.bonusFrame.style.left = this.bonusFrame.offsetLeft - 3 + "px";
    };
}