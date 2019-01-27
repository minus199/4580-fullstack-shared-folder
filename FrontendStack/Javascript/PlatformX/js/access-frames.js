/** The contentWindow property returns the Window object of an <iframe> element. 
You can use this Window object to access the iframe's document and its internal DOM. 
This attribute is read-only, but its properties can be manipulated like the global Window object.
*/

var contentFramesContainer = document.querySelector("#main-frames");
var contentFrames = contentFramesContainer.querySelectorAll("frame");
for (var frameIndex = 0; frameIndex < contentFrames.length; frameIndex++){
	var currentFrame = contentFrames[frameIndex]
	var currentFrameContentDoc = currentFrame.contentDocument
	
	var currentFrameBody = currentFrameContentDoc.querySelector("body");
	var parentWindow = currentFrame.window.parent.contentFrames
	
	console.log(parentWindow);
}


