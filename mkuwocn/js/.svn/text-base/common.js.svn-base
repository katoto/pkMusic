

function $S(s) {
	return document.getElementById(s);
}
function $html(s, html) {
	$S(s).innerHTML = html;
}
function $display(s, f) {
	$S(s).style.display = f;
}
function $isvisible(s){
	try{if($S(s).style.display=='none')return false;}catch(e){return false;}
	return true;
}

function errorimg(obj,defimg){
	obj.src=defimg;
}

function checkSpecialChar(s,usetype){
	if (!s) return '';
    s = ''+s;
    if(usetype=="titlename"){
        return s.replace(/\&apos;/g,"'").replace(/\\'/g,"\'").replace(/\"/g,"&quot;").replace(/\&amp;apos;/g,"'");
    }else if(usetype=="name"){
        return s.replace(/\"/g,"&quot;").replace(/\'/g,"\\\'").replace(/\&apos;/g,"\\\'").replace(/\&#039;/g,"\\\'").replace(/\\/g,"").replace(/'/g,"");
    }else if(usetype=="disname"){
        return s.replace(/\&quot;/g,"\"").replace(/\&apos;/g,"\'").replace(/\\'/g,"\'").replace(/\&nbsp;/g," ").replace(/&amp;/g,"&").replace(/\%26apos\%3B/g,"'").replace(/\%26quot\%3B/g,"\"").replace(/\%26amp\%3B/g,"&");
    }
    return s.replace(/\&/g,"&amp;").replace(/\"/g,"&quot;").replace(/\'/g,"\\\'").replace(/\&amp;apos;/g,"&#039;");
}


//nav切换
var navbox = $S('nav');
if(navbox){
	var navitem = navbox.getElementsByTagName('span');
	for(var i=0;i<navitem.length;i++){
		navitem[i].onclick=function(){
			var $this = this;
			for(var j=0;j<navitem.length;j++){
				navitem[j].className = 'navitem';
			}
			$this.className = 'navitem on';
			//跳转到其他频道页
		}
	}
}

document.addEventListener('DOMContentLoaded',function(){
	window.onresize = function(){
		document.documentElement.style.fontSize=document.documentElement.clientWidth / 7.5 + 'px';
	}
	document.documentElement.style.fontSize=document.documentElement.clientWidth / 7.5 + 'px';
	
},false)

//图片延时加载
lazyLoad();
window.onscroll = function(){
	lazyLoad();
};
function lazyLoad(){
	var aImg = document.getElementsByTagName('img');
	var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
	var clientH = document.documentElement.clientHeight;
	var scrollB = scrollT + clientH;
	for(var i=0;i<aImg.length;i++){
		var src = aImg[i].getAttribute('data-src');
		if(aImg[i].offsetTop < scrollB){
			aImg[i].setAttribute('src',src);
		}
	}
}

function toDouble(num){
	return num < 10 ? '0' + num : num;
}

/*toast提示*/
var toastTime = null;
var displayTime = null;
function setToast(html){
	if(toastTime != null){
		clearTimeout(toastTime);
		clearTimeout(displayTime);
	}
	//$S('toast').css('display','block');
	$display('toast', 'block');
	$S('toast').style.opacity = '1';
	$S('toast').innerHTML = html;
	toastTime = setTimeout(function(){
		$S('toast').style.opacity = '0';
		displayTime = setTimeout(function(){
			$display('toast', 'none');
		},1000);
	},1000);
}
function showtoast(){
	setToast('<div class="toasttxt">请输入歌曲名和歌手名</div>');
}
function showtoast2(){
	setToast('<div style="color:#fff;background: rgba(0, 0, 0, 0.6);border-radius: 10px;text-align: center;width:65%;height:40px;line-height:40px;margin: 0 auto;">每日最多投票10次</div>');
}


//cookie
function addCookie(sName,sValue,iDay){
	if(iDay){
		var oDate = new Date();
		oDate.setDate(oDate.getDate()+iDay);
		document.cookie=sName+'='+sValue+'; PATH=/; EXPIRES='+oDate.toGMTString();
	}else{
		document.cookie=sName+'='+sValue+'; PATH=/';
	}
}

function getCookie(sName){
	var arr = document.cookie.split('; ');
	for(var i=0;i<arr.length;i++){
		var arr2 = arr[i].split('=');
		if(arr2[0]==sName){
			return arr2[1];
		}
	}
}

function removeCookie(sName){
	addCookie(sName,1,-1);
}

