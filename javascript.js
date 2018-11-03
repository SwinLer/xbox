window.onload=function(){
        move('p');

}

        function move(IMG){
    var imgs=document.getElementsByTagName(IMG);


function fmove(index){
    for(var i=0;i<imgs.length;i++){
    imgs[i].style.opacity='0';
}
imgs[index].style.opacity = '1';
}

fmove(0);

var count=1;
function smove(){
    if(count == (imgs.length-2)){
    count = 0;
}
fmove(count);
count++;
}

var scollMove = setInterval(smove,5000);


var left=document.getElementById("arrow-l");
var right=document.getElementById("arrow-r");
left.onclick=function(){
	clearInterval(scollMove);
	if(count==0){
		count=(imgs.length-2);
	}
	count--;
	fmove(count);
	scollMove = setInterval(smove,5000);
};
right.onclick=function(){
	clearInterval(scollMove);
	smove();
    scollMove = setInterval(smove,5000);
}


function first(){
	alert("zzz");
	clearInterval(scollMove);
	count=0;
	fmove(count);
	scollMove = setInterval(smove,5000);
}

function sec(){
	clearInterval(scollMove);
	count=1;
	fmove(count);
	scollMove = setInterval(smove,5000);
}

function thi(){
	clearInterval(scollMove);
	count=2;
	fmove(count);
	scollMove = setInterval(smove,5000);
}

}

function showList(o){
	hideList("drop-content"+o.id);
	document.getElementById("drop-"+o.id).classList.toggle("show");
}

function hideList(option){
	var dropdowns = document.getElementsByClassName("drop-content");

	for(var i=0;i<dropdowns.length;i++){
		var openDropdown = dropdowns[i];
		if (openDropdown.id != option) {
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
	}
}
}

window.onclick=function(e){
	if (!e.target.matches('.drop')) {
        hideList("");
    }
}