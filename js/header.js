window.onload = function() {
var nav = document.getElementById('nav-header');
var more = document.getElementById('more');
var top = document.getElementById('top');
var flag = true;
var scroll_h;
//导航顶部固定
window.onscroll = function() {
	scroll_h = document.body.scrollTop || document.documentElement.scrollTop;
	//console.log(scroll_h);
	if(scroll_h > 41) {
		nav.style.position = 'fixed';
	}else{
		nav.style.position = 'static';
	}
	//Top元素显示和隐藏
	if(scroll_h >666) {
		top.style.display='block';
	} else {
		top.style.display='none';
	}
}
//线路行程多余部分展开
if(more_item = document.getElementById('more-item')) {
	more.onclick = function() {
	if(flag) {
		more_item.style.display = 'block';
		flag = false;
	} else {
		more_item.style.display = 'none';
		flag = true;
	}
}
}
//轮播器
var i = 1;
var timer;
moves();
function moves() {
	timer = setInterval(function(){
		collase(i);
	},4000);
}
$('.tabo li').mouseover(function(){
	collase($(this).index());
	$(this).stop(true,true).animate({'width':39},100);
	$(this).css({'background-color':'#FFFFFF'});
	clearInterval(timer);
}).mouseout(function(){
	$(this).stop(true,true).animate({'width':30},90);
	$(this).css({'background-color':'#ccc'});
	moves();
});

function collase(a) {
	$('.slide_wrap li').eq(a).stop(true,true).fadeIn().siblings().fadeOut();
	i=a+1;
	if(i>4) {
		i=0;
	}
}
//回到顶部
top.onclick = function() {
	//pageScroll();
	window.scrollTo(0,0);
}
// function pageScroll(){
// 	if(scroll_h==0) {
// 		clearTimeout(scrolldelay);
// 		return;
// 	}
// 	//console.log(scroll_h);
// 	window.scrollBy(0,-10); 
// 	scrolldelay = setTimeout(function(){
// 		pageScroll();
// 	},5); 
// }
}