/*
* @Author: 82325
* @Date:   2018-12-14 15:29:51
* @Last Modified by:   82325
* @Last Modified time: 2019-01-01 22:48:03
*/
window.onload=function(){
  	var cover=document.getElementById("header");
  	console.log(cover);
  	window.onscroll=function(){
  		var st=document.documentElement.scrollTop||document.body.scrollTop;
  		if(st>180){
  			cover.style.position='fixed';}
  		else{
  			cover.style.position='static';
  		}
  	}
}


