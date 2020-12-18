var jsGameFrame = document.getElementById("gameFrame");
var jsHeadTitle = document.getElementById("headTitle");
var jsHeadCharacter = document.getElementById("headCharacter"); 
var jsVoiceButton = document.getElementById("voice");
var treeArr = [];  
var bonusArr = [];
var usedtreeArr = [];  
var treeDistance = 300;
var browserWidth =document.body.clientWidth;
var browserHeight = document.body.clientHeight;
var voiceBool = false;

var jsScore = document.getElementById("score");
var jsNum1 = document.getElementById("num1");
var jsNum2 = document.getElementById("num2");
var jsNum3 = document.getElementById("num3");
var score = 0;

var jsBottomLand1 = document.getElementById("bottomLand1"); 
var jsBottomLand2 = document.getElementById("bottomLand2"); 

var jsTips = document.getElementById("tips");
var jsTipsContent = document.getElementById("tipText");
var jsClose = document.getElementById("close");
var jsMore = document.getElementById("more");
var jsGameOver = document.getElementById("gameOver");
var jsReplay = document.getElementById("replay");
var jsThisScore = document.getElementById("thisScore")
var jsHistoryScore = document.getElementById("historyScore")

var playerCharacter = $('input:radio:checked').val();

var Y = 3;
var index = 0;
var imgArr = ["img/"+playerCharacter+"0.png","img/"+playerCharacter+"1.png"] 

var voiceIndex = 0;
var voiceArr = ["img/close.png","img/open.png"]


var loop= new Audio("radio/Loop.wav");
var loopPlay;
var skill= new Audio("radio/Skill.mp3");
var over= new Audio("radio/GameOver.wav");
var bonusRadio = new Audio("radio/Bonus.mp3");

/**
 * Set the head character animation
 */
var headWaveTimer = setInterval(headWave,200); 
function headWave() {
    Y *= -1;
    jsHeadTitle.style.top = jsHeadTitle.offsetTop + Y + "px";
    jsHeadCharacter.src = imgArr[index++];
    if (index == 2) {
        index = 0;
    }
}

/**
 * Main funtion of the game
 */
var mainTimer = setInterval(mainRun,30); 
function mainRun() {
    if (jsBottomLand1.offsetLeft <= -2100) {
        jsBottomLand1.style.left = "2100px";
    }
    if (jsBottomLand2.offsetLeft <= -2100) {
        jsBottomLand2.style.left = "2100px";
    }
    // Move the land
    jsBottomLand1.style.left = jsBottomLand1.offsetLeft - 3 + "px";
    jsBottomLand2.style.left = jsBottomLand2.offsetLeft - 3 + "px";

    if (treeArr.length) {
        for (var i = 0; i < treeArr.length; i++) {
            // Move tree
            treeArr[i].moveTree();

            // Detect if the game is over
            var x =object.collisionDetection(treeArr[i].downTree, character.div);
            var y = object.collisionDetection(treeArr[i].upTree, character.div);
            var z = character.div.offsetTop >= browserHeight*0.88 || character.div.offsetTop <= 0;
            if (x || y || z) {
                // End the game
                window.clearInterval(mainTimer);
                window.clearInterval(loopPlay);
                loop.pause();
                character.fallSpeed = 0; 
                jsGameFrame.onclick = null; 
                document.onkeydown = null;
                if (voiceIndex != 1) {
                    over.play();
                }
                jsScore.style.display = "none"; 

                // Show the Game Over div
                jsGameOver.style.display = "block"; 
                var historyscore = localStorage.getItem('maxScore');
                if(historyscore == null || historyscore < score) {
                    localStorage.setItem('maxScore', score);
                    historyscore = score;
                    $.post("../userscore.php", {type:"postscore", score: score}, function(score) {
                        // alert("Data: " + score);
                    });
                }
	            jsHistoryScore.innerHTML = historyscore;
                jsThisScore.innerHTML = score;
            };
        };
        
        // Create a new tree
        if (treeArr[treeArr.length - 1].downTree.offsetLeft < (browserWidth - treeDistance)) {
                var newTree = new Tree();
                newTree.createTree();
                treeArr.push(newTree);
        };

        // Display the score
        if (treeArr[0].downTree.offsetLeft == Math.ceil(browserWidth * 0.45) - 62
        ||treeArr[0].downTree.offsetLeft == Math.ceil(browserWidth * 0.45) - 61
        ||treeArr[0].downTree.offsetLeft == Math.ceil(browserWidth * 0.45) - 63) {
                score++;
                if (score < 10) {
                    jsNum1.style.backgroundImage = "url(img/" + score + ".png)";
                } else if (score < 100) {
                    jsNum2.style.display = "block";
                    jsNum1.style.backgroundImage = "url(img/" + parseInt(score/10) + ".png)";
                    jsNum2.style.backgroundImage = "url(img/" + score%10 + ".png)";
                } else if (score < 1000) {
                    jsNum3.style.display = "block";
                    jsNum1.style.backgroundImage = "url(img/" + parseInt(score/100) + ".png)";
                    jsNum2.style.backgroundImage = "url(img/" + parseInt(score/10)%10 + ".png)";
                    jsNum3.style.backgroundImage = "url(img/" + score%10 + ".png)";
                };
                console.log(score);
        };
        
        // Delete the tree that the character crossed
        if (treeArr[0].downTree.offsetLeft < Math.ceil(browserWidth * 0.45) - 62) {
                jsGameFrame.removeChild(treeArr[0].downTree);
                jsGameFrame.removeChild(treeArr[0].upTree);
                treeArr.shift(treeArr[0]);
        };
    };
    
    if (bonusArr.length) {
        for (var i = 0; i < bonusArr.length; i++) {
            // Move bonus apple
            bonusArr[i].moveBonus();

            // Detect if the character eats bonus apple
            var x =object.collisionDetection(bonusArr[i].bonusFrame, character.div);
            if (x) {
                console.log("Eat bonus");
                bonusRadio.play();
                score++;
                if (score < 10) {
                    jsNum1.style.backgroundImage = "url(img/" + score + ".png)";
                } else if (score < 100) {
                    jsNum2.style.display = "block";
                    jsNum1.style.backgroundImage = "url(img/" + parseInt(score/10) + ".png)";
                    jsNum2.style.backgroundImage = "url(img/" + score%10 + ".png)";
                } else if (score < 1000) {
                    jsNum3.style.display = "block";
                    jsNum1.style.backgroundImage = "url(img/" + parseInt(score/100) + ".png)";
                    jsNum2.style.backgroundImage = "url(img/" + parseInt(score/10)%10 + ".png)";
                    jsNum3.style.backgroundImage = "url(img/" + score%10 + ".png)";
                };
                console.log(score);
                jsGameFrame.removeChild(bonusArr[0].bonusFrame);
                bonusArr.shift(bonusArr[0]);
            };
        };

        // Create new bonus apple
        if (bonusArr[bonusArr.length - 1].bonusFrame.offsetLeft < (browserWidth - treeDistance)) {
            var newBonus = new Bonus();
            newBonus.createBonus();
            bonusArr.push(newBonus);
        }
        
        // Delete bonus apple that the character crossed
        if (bonusArr[0].bonusFrame.offsetLeft < Math.ceil(browserWidth * 0.45) - 62) {
            jsGameFrame.removeChild(bonusArr[0].bonusFrame);
            bonusArr.shift(bonusArr[0]);
        }
    }
}

/**
 * Create the first bonus apple
 */
function createBonusDIV() {
    var bonus = new Bonus();
    bonus.createBonus();
    bonusArr.push(bonus);
}
var jsStartBtn = document.getElementById("startBtn");
/**
 * Start the game
 */
jsStartBtn.onclick = function() { 
    jsHeadTitle.style.display = "none"; 
    clearInterval(headWaveTimer); 
    jsStartBtn.style.display = "none"; 
    character.displayCharacter(jsGameFrame); 
    character.flyCharacter(); 
    character.animation(); 
    // When click the frame, the character flies
    jsGameFrame.onclick = function(){
        character.fallSpeed = -8;
        if (voiceIndex != 1) {
            skill.play();
        }
    };
    
    var pausFlag = false;
    document.onkeydown = function(event){
        // When the space is pressed, the character flies
        if(event.keyCode == 32){
            character.fallSpeed = -8;
            if (voiceIndex != 1) {
                skill.play();
            }
        };
        // When the "P" is pressed, the game paused
        if(event.keyCode == 80 && !pausFlag) {
            window.clearInterval(mainTimer);
            character.characterPause = true; 
            pausFlag = true;
        } else if (event.keyCode == 80 && pausFlag) {
            jsTips.style.display = "none";
            mainTimer = setInterval(mainRun,30);
            character.flyCharacter(); 
            character.animation(); 
            pausFlag = false;
        };
    }; 
    var tree = new Tree();
    tree.createTree();		
    treeArr.push(tree);
    jsNum1.style.display = "block";
    setTimeout("createBonusDIV()", 2000);
}

/**
 * Replay the game
 */
jsReplay.onclick = function() {
    window.location.href = "game.html"; 
}

/**
 * Close and open music
 */
jsVoiceButton.onclick = function() {
    jsVoiceButton.src = voiceArr[voiceIndex++];
    if(voiceIndex == 1) {
        loop.pause();
        window.clearInterval(loopPlay);
        voiceBool = true;
    } else if (voiceBool & voiceIndex == 2){
        loopPlay = setInterval(loop.play(),84000);
    }
    if (voiceIndex == 2) {
        voiceIndex = 0;
    }
}

/**
 * Select the game character
 */
$("#selectorSubmit").click(function() {
    $("#selector").css("display","none");
    loopPlay = setInterval(loop.play(),84000);
    playerCharacter = $('input:radio:checked').val();
    console.log(playerCharacter);
});

/**
 * Determine whether user can unlock the game character by bestScore
 */
$(document).ready(function(){
    var bestScore = localStorage.getItem("maxScore");
    console.log("Best Score: " + bestScore);
    if(bestScore > 26) {
        $("#animal3").next().html("koala");
        $("#animal3").css("visibility","visible");
        $("#animal2").next().html("kangaroo");
        $("#animal2").css("visibility","visible");
    } else if(bestScore > 6) {
        $("#animal2").next().html("kangaroo");
        $("#animal2").css("visibility","visible");
    }
});
