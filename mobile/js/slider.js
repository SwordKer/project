window.onload = function() {
	var wrap = document.querySelector('.carousel');
	var box = document.querySelector('.box');
	var pangition = document.querySelectorAll('.carousel-item span');

	box.innerHTML += box.innerHTML;
	var box_li = document.querySelectorAll('.box li');
	//set height
	wrap.style.height = box_li[0].offsetHeight + 'px';
	box.style.width = box_li.length * 100 +'%';

	for(var n=0;n<box_li.length;n++) {
		box_li[n].style.width = 1/box_li.length*100+'%';
	}

	var startX = 0;
	var newX = 0;
	var now = 0;
	var liHeight = 0;
	var liWidth = box_li[0].offsetWidth;
	var liNum = box_li.length;
	var l_back = -(liNum/2)*liWidth;
	var r_back = -(liNum/2-1)*liWidth;
	var timer = 0;
	var state = 0;

	wrap.addEventListener('touchstart',function(e){
		clearInterval(timer);
		startX = e.changedTouches[0].pageX;	
		box.style.WebkitTransition = box.style.transition="none";
		if(now==0) {
			cmdTransform(l_back);
			now = liNum/2;
		} else if(now==5) {
			cmdTransform(r_back);
			now = 2;
		}
		//console.log(getTransform());
	},false);
	wrap.addEventListener('touchmove',function(c){
		var moveX = c.changedTouches[0].pageX;
		newX = moveX - startX;
		cmdTransform(newX+(-now*liWidth));
	},false);
	wrap.addEventListener('touchend',function(d){
		if(newX > 0) {
			state = Math.round(getTransform()/liWidth+0.33333);
		} else {
			state = Math.round(getTransform()/liWidth-0.333333);
		}	
		console.log(getTransform()/liWidth+0.222222);
		cmdTransform(state*liWidth);
		now = Math.abs(state);
		tagChange();
		auto();
	},false);
	
	auto();
	function auto() {
		timer = setInterval(function(){
			now > 4 ? now=3 : now++;
				//console.log(now);
			cmdTransform(-now*liWidth);
			tagChange();	
		},2000);
	}
	function tagChange() {
		box.style.WebkitTransition = box.style.transition = '.5s' ;

		for(var i =0;i<pangition.length;i++){
			pangition[i].className = '';
		}
	
		var middleNum = liNum/2
			//console.log(now%middleNum);
		if(now < middleNum) {
			pangition[now].className = 'active-panel';
		} else {
			pangition[now%middleNum].className = 'active-panel';
		}
	}
	function cmdTransform(val) {
		box.style.WebkitTransform = box.style.transform = 'translateX('+val+'px)'
	}
	function getTransform() {
		var str = box.style.transform || box.style.WebkitTransform ;
		var reg = /translateX\((.*)px\)/;
		nstr = str.match(reg);
		return parseInt(nstr[1]);
	}
}