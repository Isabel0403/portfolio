'use strict';

//햄버거버튼
const btn = document.getElementsByClassName("menuBtn");
const menu = document.getElementsById("menuWarp");

function btn(){

	btn.onclick =  function() {
        menu.style.display = "block";
        //console.log(num);
    };

	/* const menu = document.getElementsById("menuWarp");
	if(menu.style.display ='none'){
		menu.style.display = 'block';
	}
	else{
		menu.style.display = 'none';
	} */
}