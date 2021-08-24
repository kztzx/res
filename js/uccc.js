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
            	'https://cdn.jsdelivr.net/gh/nanjingoss/apppic/731/1-1.gif',
                'https://cdn.jsdelivr.net/gh/nanjingoss/apppic/731/1-2.gif',
                'https://cdn.jsdelivr.net/gh/nanjingoss/apppic/731/2-1.gif',
                'https://cdn.jsdelivr.net/gh/nanjingoss/apppic/731/2-2.gif',
                'https://cdn.jsdelivr.net/gh/nanjingoss/apppic/731/2-3.gif',
                'https://cdn.jsdelivr.net/gh/nanjingoss/apppic/731/3-1.gif',
                'https://cdn.jsdelivr.net/gh/nanjingoss/apppic/731/3-2.gif',
                'https://cdn.jsdelivr.net/gh/nanjingoss/apppic/731/3-3.gif'
            );

            var img_arr1 = new Array(
                'https://cdn.jsdelivr.net/gh/nanjingoss/apppic/817zb/zb-640-200-8.gif',
                'https://cdn.jsdelivr.net/gh/nanjingoss/apppic/817zb/zb-640-200-11.gif',
                'https://cdn.jsdelivr.net/gh/nanjingoss/apppic/817zb/zb-640-200-19.gif',
                'https://cdn.jsdelivr.net/gh/nanjingoss/apppic/817zb/zb-640-200-26.gif',
                'https://cdn.jsdelivr.net/gh/nanjingoss/apppic/817zb/zb-640-200-27.gif'
            );
            
            var url_arr = new Array(
                'https://xm.zluex.com/188.html',
                'http://chuxia35.com/?channelCode=11133920'
            );

            var urlv = Math.floor((Math.random()*url_arr.length)); 
            var urla = url_arr[urlv];
            
            if(urla=='https://xm.zluex.com/188.html'){
                var imgv = Math.floor((Math.random()*img_arr.length)); 
                var imga = img_arr[imgv];
            }else{
                var imgv = Math.floor((Math.random()*img_arr1.length)); 
                var imga = img_arr1[imgv];
            }

            var diid = 'd' + parseInt(Math.random() * 1000);
            document.writeln('<div id="'+diid+'"><a href="'+urla+'" target="_blank"><img src="'+imga+'" width="100%" height="100%"></a></div>');
        }
    })();
}
