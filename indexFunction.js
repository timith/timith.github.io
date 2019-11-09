function password(){
	var pword = prompt("enter the webcode:");
	var pdfpass = 3.1415;
	var gamepass = 2.7182;
	var musicpass = "music";
	if (pword==pdfpass) {
		document.getElementById("link1").innerHTML = "PDFS";
	}
	if(pword == gamepass){
		document.getElementById("link2").innerHTML = "Games";
	}
	if(pword == musicpass){
		document.getElementById("link3").innerHTML = "Music";
	}
}
