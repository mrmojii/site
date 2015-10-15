function setBackground(){
	var background_count = 3;
	var background_number = Math.floor((Math.random() * background_count) + 1);
	var bg = "body_class"+background_number;
	document.getElementById("body_").className=bg;
}