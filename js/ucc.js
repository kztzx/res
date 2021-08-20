var wap = navigator.userAgent.match(/Android|Linux|iPad|iPhone|iPod/i) != null;
var ios = navigator.userAgent.match(/iPad|iPhone|iPod/i) != null;
var azs = navigator.userAgent.match(/Android|Linux/i) != null;
if(wap){
    (function() {
        if (/Win/i.test(navigator.platform)) return false;
        if(shengfen=="北京" || shengfen=="重庆" || chengshi=="成都" || chengshi=="深圳"){
            return false;
        }else{
            //img数组
            var img_arr = new Array(
            	'https://cdn.jsdelivr.net/gh/nanjingoss/apppic/817zb/zb-640-200-19.gif',
            	'https://cdn.jsdelivr.net/gh/nanjingoss/apppic/817zb/zb-640-200-26.gif'
            );
            //var luodiye = 'https://blzb29.com/?channelCode=ys10';
            var luodiye = 'https://xa77.cc/1.html?channelCode=xm7_7';
            var urlv = Math.floor((Math.random()*img_arr.length)); 
            var urla = img_arr[urlv];
            document.writeln('<a href="'+luodiye+'" target="_blank"><img src="'+urla+'" width="100%" height="100%"></a>');
        }
    })();
}