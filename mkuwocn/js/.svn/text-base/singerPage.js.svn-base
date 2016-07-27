var html = document.getElementsByTagName('html')[0];
if(html){
    var w = window.innerWidth;
    //var fontSize = (w>640?640:w)/640*100;
    var fontSize = (w>750?750:w)/750*100;
    html.style.fontSize = fontSize + 'px';
    /*已经适配来当前的设备*/
}
/*响应*/
window.onload = function(){
    window.onresize = function(){
        var w = window.innerWidth;
        var fontSize = (w>750?750:w)/750*100;
        html.style.fontSize = fontSize + 'px';
    }
};

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
function $S(s) {
    return document.getElementById(s);
}