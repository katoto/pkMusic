var html = document.getElementsByTagName('html')[0];
count = 0;
if(html){
    var w = window.innerWidth;
      var fontSize = (w>640?640:w)/640*100;
//  var fontSize = (w>750?750:w)/750*100;
    html.style.fontSize = fontSize + 'px';
}
/*响应*/
window.onload = function(){
    window.onresize = function(){
        var w = window.innerWidth;
        var fontSize = (w>640?640:w)/640*100;
        html.style.fontSize = fontSize + 'px';
    }
    
//  ajax 请求
//	pkVoteList();
var url= 'http://www.kuwo.cn/kudou/getUserInfo?uid=0&sid=0&jpcallback=JSONP_CALLBACK'
	pkjsonpFn(url , function(data){
		console.log(data);
	});

};


//跨越js
function pkjsonpFn(url, callback){
	var scriptElem = document.createElement('script');
	var callbackName = '_pkcallback'+count++;
	window[callbackName] = function (data){
		data.data = {
			"list":[
				{
					"userName":"turob",
					"userPic":"img/1.png",
					'voteNumber':100,
				},
				{
					"userName":"two",
					"userPic":"img/02.png",
					'voteNumber':100,
				},
				{
					"userName":"wang",
					"userPic":"img/1.png",
					'voteNumber':100,
				},
				{
					"userName":"fafd",
					"userPic":"img/02.png",
					'voteNumber':100,
				},
				{
					"userName":"six",
					"userPic":"img/1.pngage",
					'voteNumber':100,
				}				
			],
			"pn":0,
			"nextPn":1,
			"totalNumber":1000
		}
		
		
		callback(data);
		document.body.removeChild(scriptElem);
	}
	scriptElem.src = url.replace('JSONP_CALLBACK',callbackName);
	document.body.appendChild(scriptElem);
}

//function pkVoteList(){
//	console.log(1);
//	var url = 'http://www.kuwo.cn/kudou/getUserInfo?uid=0&sid=0&jpcallback=JSONP_CALLBACK'
//	var pkxhr = new XMLHttpRequest;
//	pkxhr.open('get',url);
//	pkxhr.send(null);
//	pkxhr.onreadystatechange = function(){
//		if(pkxhr.readyState ==4 && pkxhr.status ==200 ){
//			console.log(pkxhr.responseText);
//			console.log(11);
//		}
//	}
//}
