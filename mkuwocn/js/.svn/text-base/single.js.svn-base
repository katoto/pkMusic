
var mySwiper = new Swiper ('.tabbox .swiper-container', {
    mode: 'horizontal',
    loop:true,
    pagination: '.swiper-pagination'
 })

var MediaPlayer={mediaId:'mediaPlayId'};
try{
	MediaPlayer.canPlayM4a = !!(document.createElement('audio').canPlayType("audio/mpeg"));
	MediaPlayer.canPlayAac = !!document.createElement("audio").canPlayType && document.createElement("audio").canPlayType('audio/mp4; codecs="mp4a.40.2"')=='probably';
}catch(e){}

function getMedia(){
	MediaPlayer.obj = $S(MediaPlayer.mediaId);
	return MediaPlayer.obj; 
}

function getStyle(obj,sName){
	if(obj.currentStyle){
		return obj.currentStyle[sName];
	}else{
		return getComputedStyle(obj,false)[sName];
	}
	return (obj.currentStyle||getComputedStyle(obj,false))[sName];
}

//获取歌词信息
var lrcdata=[
	{'timeId':'0','text':'破影而出 - 大鹏&南征北战'},
	{'timeId':'0','text':'(电影《忍者神龟2·破影而出》中国主题曲) '},
	{'timeId':'0','text':'忍者 忍者'},
	{'timeId':'11','text':'基因变异黑白颠倒'},
	{'timeId':'14','text':'肩披绿甲面戴眼罩'},
	{'timeId':'16','text':'身手不凡勇敢无畏'},
	{'timeId':'18','text':'捍卫正义的乌龟'},
	{'timeId':'21','text':'领袖必备的责任感'},
	{'timeId':'23','text':'科研发明我最能干'},
	{'timeId':'25','text':'天生幽默就是乐观'},
	{'timeId':'27','text':'谁惹毛了我就干'},
	{'timeId':'30','text':'斯普林特是只老鼠'},
	{'timeId':'32','text':'他是神龟们的老师'},
	{'timeId':'34','text':'下水道里修炼忍术'},
	{'timeId':'37','text':'T m n t let‘s go'},
	{'timeId':'39','text':'恶棍从天而降'},
	{'timeId':'41','text':'我们逆流而上'},
	{'timeId':'44','text':'冲破黑暗的忍者 忍者'},
	{'timeId':'48','text':'兄弟并肩作战'},
	{'timeId':'50','text':'罪恶烟消云散'},
	{'timeId':'53','text':'顶天立地的'},
	{'timeId':'55','text':'英雄破影而出 忍者龟'},
	{'timeId':'60','text':'龟壳自带防弹功能'},
	{'timeId':'61','text':'身手敏捷 百战百胜'},
	{'timeId':'62','text':'嫉恶如仇 行侠仗义'},
	{'timeId':'63','text':'困在 Underground 太闷'},
	{'timeId':'65','text':'装备和战车那么帅'},
	{'timeId':'66','text':'反派都太笨'},
	{'timeId':'67','text':'肾上腺素狂飙'},
	{'timeId':'68','text':'别怪我下手太狠'},
	{'timeId':'69','text':'最爱吃 Pizza'},
	{'timeId':'70','text':'还能耍刀叉棍棒'},
	{'timeId':'71','text':'使命意气把弟兄们紧紧捆绑'},
	{'timeId':'74','text':'只要同心协力'},
	{'timeId':'75','text':'牛头猪面休想得逞'},
	{'timeId':'76','text':'施莱德和苍蝇博士'},
	{'timeId':'77','text':'我早已忍无可忍'},
	{'timeId':'79','text':'基因变异黑白颠倒'},
	{'timeId':'81','text':'肩披绿甲面戴眼罩'},
	{'timeId':'83','text':'身手不凡勇敢无畏'},
	{'timeId':'86','text':'捍卫正义的乌龟'},
	{'timeId':'88','text':'领袖必备的责任感 李奥纳多'},
	{'timeId':'90','text':'科研发明我最能干 多纳泰罗'},
	{'timeId':'93','text':'天生幽默就是乐观 米开朗琪罗'},
	{'timeId':'95','text':'谁惹毛了我就干 拉斐尔'},
	{'timeId':'97','text':'斯普林特是只老鼠'},
	{'timeId':'99','text':'他是神龟们的老师'},
	{'timeId':'102','text':'下水道里修炼忍术'},
	{'timeId':'104','text':'T m n t let‘s go'},
	{'timeId':'107','text':'恶棍从天而降'},
	{'timeId':'109','text':'我们逆流而上'},
	{'timeId':'111','text':'冲破黑暗的忍者 忍者'},
	{'timeId':'116','text':'兄弟并肩作战'},
	{'timeId':'118','text':'罪恶烟消云散'},
	{'timeId':'120','text':'顶天立地的'},
	{'timeId':'123','text':'英雄破影而出'},
	{'timeId':'124','text':'忍者龟'},
	{'timeId':'144','text':'忍者 忍者'},
	{'timeId':'146','text':'忍者 忍者'},
	{'timeId':'148','text':'忍者 忍者'},
	{'timeId':'151','text':'忍者 忍者'},
	{'timeId':'153','text':'忍者 忍者'},
	{'timeId':'155','text':'忍者 忍者'},
	{'timeId':'158','text':'忍者 忍者'},
	{'timeId':'159','text':'忍者神龟'},
	{'timeId':'162','text':'恶棍从天而降'},
	{'timeId':'164','text':'我们逆流而上'},
	{'timeId':'167','text':'冲破黑暗的忍者 忍者'},
	{'timeId':'172','text':'兄弟并肩作战'},
	{'timeId':'174','text':'罪恶烟消云散'},
	{'timeId':'176','text':'顶天立地的'},
	{'timeId':'179','text':'英雄破影而出'},
	{'timeId':'180','text':'忍者龟'},
	{'timeId':'181','text':'恶棍从天而降'},
	{'timeId':'183','text':'我们逆流而上'},
	{'timeId':'186','text':'忍者 忍者'},
	{'timeId':'188','text':'忍者 忍者'},
	{'timeId':'190','text':'兄弟并肩作战'},
	{'timeId':'193','text':'罪恶烟消云散'},
	{'timeId':'195','text':'忍者 忍者'},
	{'timeId':'197','text':'英雄破影而出'},
	{'timeId':'199','text':'忍者龟'}
]

lrcinfo(lrcdata);
var lrcList=lrcdata;
var lrcObj=null;
function lrcinfo(data){
	lrcList=data;
	if(!lrcList || lrcList.length==0){
		$html("lyrtextId","听音乐　用酷我");
	}else{			
		var htm=[];
		var count = 0;
		htm[count++]='<div id="llrcId" style="overflow-x: hidden;overflow-y: hidden;">';
		for(var i=0;i<lrcList.length;i++){
			if(i==0){
				htm[count++]='<p id="lId'+i+'" class="lyric_now">';
			}else{
				htm[count++]='<p id="lId'+i+'">';	
			}
			htm[count++]=lrcList[i].text;
			htm[count++]='</p>';
		}
		htm[count++]='</div>';
		$html("lyrtextId",htm.join(''));
	}
	lrcObj=$S("llrcId");
}

var lastLine = 0;
function moveLrc(){
	//if(!lrcList || lrcList.length==0)return;
	var msec = getMedia().currentTime + 1;
	var found = false;
	var mv = 0;
	var sIndex = 0;
	
	for (var i=0;i<lrcList.length;i++) {
		
		if (found == false && msec >= lrcList[i].timeId && (i == lrcList.length-1 || lrcList[i+1].timeId > msec)) {
			mv = i*28;
			sIndex = i;
			found = true;
		}
	}
	if (mv != 0) {
		if(lastLine){
			try{$S("lId"+lastLine).className='';}catch(e){}
		}
		try{$S("lId"+sIndex).className='lyric_now';}catch(e){}
		lastLine=sIndex;
		try{$S('llrcId').style.webkitTransition="-webkit-transform 500ms ease-out";}catch(e){}
		try{$S('llrcId').style.transition="transform 500ms ease-out";}catch(e){}
		try{$S('llrcId').style.webkitTransform="translate(0px,"+-mv+"px) scale(1) translateZ(0px)";}catch(e){}
		try{$S('llrcId').style.transform="translate(0px,"+-mv+"px) scale(1) translateZ(0px)";}catch(e){}
	}
}

function getTimeM(totalTime){
	var totalTimeStr='00:00';
	if(!isNaN(totalTime)){
		var totalTimeStr=totalTime/60>=10?parseInt(totalTime/60):'0'+parseInt(totalTime/60);
		totalTimeSec=(totalTime%60>=10?parseInt(totalTime%60):'0'+parseInt(totalTime%60));
		if(totalTimeStr>99){
			totalTimeStr='00';
		}
		totalTimeStr=totalTimeStr+':'+totalTimeSec;
	}
	return totalTimeStr;
	
}

var ltime=0;
function updateMethod(){
	try{
		jsctrl();
		$html('currtime',getTimeM(getMedia().currentTime));
		$html('totaltime',getTimeM(curr_total));
		if(ltime>3){
			moveLrc();
			ltime=0;
		}
		ltime++;
	}catch(e){e.message}
}

//点击播放条 歌曲在指定位置播放
var curr_total = 204;
var playlineObj = document.querySelector('.playline');
//alert(playlineObj.parentNode.parentNode.offsetLeft);90
playlineObj.addEventListener('touchstart', function(event) {
	event.preventDefault();// 阻止浏览器默认事件
	var touch = event.targetTouches[0];
	var totalw = playlineObj.clientWidth;
	var p_left = playlineObj.parentNode.parentNode.offsetLeft;
	var playm = (touch.pageX-p_left)/totalw*curr_total;
	console.log(playm);
	getMedia().currentTime = playm;
	jsctrl();
}, false);

function jsctrl(){
	var totalw2 = playlineObj.clientWidth;
	var jd = totalw2*getMedia().currentTime/parseFloat(curr_total);
	if(jd > totalw2){
		jd = totalw2;
	}
	$S('playline_clone').style.width = jd + 'px';
}

var isplay = 1;
function playsong(){
	if(isplay){
		getMedia().play();
		jsctrl();
		isplay = 0;
	}else{
		getMedia().pause();
		jsctrl();
		isplay = 1;
	}
	
}

$S('single_list').onclick = function(){
	$S('single_queue').style.webkitTransition = 'all linear 0.3s';
	$S('single_queue').style.webkitTransform = 'translateY(0px)';
	$display('downside','none');
};

$S('queue_close').onclick = function(){
	$S('single_queue').style.webkitTransition = 'all linear 0.3s';
	$S('single_queue').style.webkitTransform = 'translateY('+queueh4+'px)';
	$display('downside','block');
};

//播放队列
var queueh1 = parseFloat(getStyle($S('queue_title'),'height').replace('px',''));
var queueh2 = parseFloat(getStyle($S('queue_close'),'height').replace('px',''));
var queueh3 = parseFloat(getStyle($S('single_playlist').children[0],'height').replace('px',''));
var queuelen = $S('single_playlist').children.length;

if(queuelen>4){
	queuelen=4;
}
$S('queue_content').style.height = queueh3*queuelen+queuelen+50+'px';
$S('single_playlist').style.height = queueh3*queuelen+queuelen+'px';
var queueh4 = queueh3*queuelen+queueh1+queueh2+queuelen;

$S('single_queue').style.height = queueh4+'px';
$S('single_queue').style.webkitTransform = 'translateY('+queueh4+'px)';

//分享弹框
$S('sharebtn').onclick = function(){
	$display('sharebox','block');
};
$S('close').onclick = function(){
	$display('sharebox','none');
};