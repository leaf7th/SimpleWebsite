$(document).ready(function(){
    var originalSize = $(".layouttext").css("font-size"); 
    $(".reset").click(function () { 
    $(".layouttext").css("font-size", originalSize); 
    return false; 
    }); 
    // when click the Reset button, reset the font size to originalSize.

    $(".increase").click(function () { 
    var currentSize = $(".layouttext").css("font-size"); 
    var currentSizeNumber = parseFloat(currentSize); 
    var newSize = currentSizeNumber * 1.1; 
    $(".layouttext").css("font-size", newSize); 
    return false; 
    }); 
    // when click the Increase button, increase the font size.

    $(".decrease").click(function () { 
    var currentSize = $(".layouttext").css("font-size"); 
    var currentSizeNumber = parseFloat(currentSize); 
    var newSize = currentSizeNumber * 0.9; 
    $(".layouttext").css("font-size", newSize); 
    return false; 
    }); 
    // when click the Decrease button, decrease the font size.
 });