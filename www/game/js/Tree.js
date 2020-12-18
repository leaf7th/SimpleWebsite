/**
 * Game Tree
 */
function Tree() {
	this.upTree = null;
	this.downTree = null;
	this.downHeight = object.randomNum(browserHeight*0.1,browserHeight*0.5);
	this.gapHeight = object.randomNum(browserHeight*0.5,browserHeight*0.5+10);
	this.upHeight = browserHeight - this.downHeight - this.gapHeight;
	
	/**
	 * Help method to create the div
	 */
	this.createFrame = function(url, height, positionType, left, top) {
		var frame = document.createElement("div");
		frame.style.width = "60px";
		frame.style.height = height;
		frame.style.position = positionType;
		frame.style.left = left;
		frame.style.top = top;
		frame.style.backgroundImage = url;  
		return frame;
	};
	
	/**
	 * Create the up tree and down tree then add them to the parent div
	 */
	this.createTree = function() {
		var upTreeTrunk = this.createFrame("url(img/up_trunk.png)", this.upHeight + "px");
		var upTreeCrown = this.createFrame("url(img/up_crown.png)", "60px");
		this.upTree = this.createFrame(null, null, "absolute", "100%");
		this.upTree.appendChild(upTreeTrunk);
		this.upTree.appendChild(upTreeCrown);
		
		var downTreeCrown = this.createFrame("url(img/down_crown.png)", "59px");
		var downTreeTrunk = this.createFrame("url(img/down_trunk.png)", this.downHeight +"px");
		this.downTree = this.createFrame(null, null, "absolute", "100%", browserHeight*0.85 - this.downHeight + "px");
		this.downTree.appendChild(downTreeCrown);
		this.downTree.appendChild(downTreeTrunk); 
		
		jsGameFrame.appendChild(this.upTree);
		jsGameFrame.appendChild(this.downTree);
	};
	
	/**
	 * Move the tree
	 */
	this.moveTree = function() { 
		this.upTree.style.left = this.upTree.offsetLeft - 3 + "px";
		this.downTree.style.left = this.downTree.offsetLeft - 3 + "px";
	};	
}
