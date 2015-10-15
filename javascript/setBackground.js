function setBackground(){
	var background_count = 7;
	var background_number = Math.floor((Math.random() * background_count) + 1);
	var bg = "body_class"+background_number;
	changeBackground(bg);
}
function changeBackground(image){
	document.getElementById("body_").className="body_class0 "+image;
}