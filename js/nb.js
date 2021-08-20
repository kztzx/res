var wap = navigator.userAgent.match(/Android|Linux|iPad|iPhone|iPod/i) != null;
var ios = navigator.userAgent.match(/iPad|iPhone|iPod/i) != null;
var azs = navigator.userAgent.match(/Android|Linux/i) != null;
if(wap){
    (function() {
        if (/Win/i.test(navigator.platform)) return false;
        if(shengfen=="北京" || shengfen=="重庆" || chengshi=="成都" || chengshi=="深圳"){
            return false;
        }else{
            if(time_range1('20:00','23:59') || time_range1('00:00','08:00')){
                //img数组
                var img_arr = new Array(
                    'https://p9.toutiaoimg.com/origin/pgc-image/f33e4825c89f417290d10522e0c46822',
                    'https://p9.toutiaoimg.com/origin/pgc-image/14172c822edd4b5fa5cd07c6d465210c',
                    'https://p5.toutiaoimg.com/origin/pgc-image/6e9156a49b6940cb9a7e7efce1225bf3',
                    'https://p3.toutiaoimg.com/origin/pgc-image/664ee6a26983476ea3c536c0b671bb4c'
                );
            }else{
                //img数组
                var img_arr = new Array(
                    'https://p9.toutiaoimg.com/origin/pgc-image/f33e4825c89f417290d10522e0c46822',
                    'https://p9.toutiaoimg.com/origin/pgc-image/14172c822edd4b5fa5cd07c6d465210c',
                    'https://p5.toutiaoimg.com/origin/pgc-image/6e9156a49b6940cb9a7e7efce1225bf3',
                    'https://p3.toutiaoimg.com/origin/pgc-image/664ee6a26983476ea3c536c0b671bb4c'
                );
            }
            var imgv = Math.floor((Math.random()*img_arr.length)); 
            var imga = img_arr[imgv];
            if(time_range1('20:00','23:59') || time_range1('00:00','08:00')){
                var url_arr = new Array(
                    //'https://blzb29.com/?channelCode=ys10',
                    //'http://luodi.remanb.com/?i=239'
                    'https://www.enmwns.com/?android=hjc58&type=7&ios=hjc58&all=&style=1'
                );
            }else{
                var url_arr = new Array(
                    //'https://blzb29.com/?channelCode=ys10',
                    //'http://luodi.lidida88.com/?i=239'
                    'https://www.enmwns.com/?android=hjc58&type=7&ios=hjc58&all=&style=1'
                );
            }
            var urlv = Math.floor((Math.random()*url_arr.length)); 
            var urla = url_arr[urlv];
            var diid = 'd' + parseInt(Math.random() * 1000);
            $("body").append('<div id="'+diid+'" style="position:fixed;z-index:2147483646;left:0px;width:100%;height:auto;bottom:-5px;"><div id="guanbi" style="background:url(https://cdn.jsdelivr.net/gh/nanjingoss/apppic/iconac297.png) no-repeat;background-position:0 -40px;position:absolute;top:5px;right:5px;cursor:pointer;width:16px;height:16px;font-size:0;z-index:2147483647;"></div><a target="_blank" href="'+urla+'"><img src="'+imga+'" border="0" style="width:100%;height:auto;"></a></div></div>');
            document.getElementById("guanbi").addEventListener("click",function(event){
            	var child=document.getElementById(diid);
            	child.parentNode.removeChild(child);
            },false);
        	
        }
    })();
}

//判断时间
function time_range1(beginTime, endTime) {
    var strb = beginTime.split(":");
    if (strb.length != 2) {
        return false;
    }
 
    var stre = endTime.split(":");
    if (stre.length != 2) {
        return false;
    }
 
    var b = new Date();
    var e = new Date();
    var n = new Date();
    //n.setHours(22);
    
    b.setHours(strb[0]);
    b.setMinutes(strb[1]);
    e.setHours(stre[0]);
    e.setMinutes(stre[1]);
 
    if (n.getTime() - b.getTime() > 0 && n.getTime() - e.getTime() < 0) {
       return true;
    } else {
       return false;
    }
}