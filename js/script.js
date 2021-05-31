
var speed = 1000; // フェードイン・フェードアウトの処理時間（1000で1秒）
var times = 5000; // 画像切り替えの間隔（1000で1秒）
var bgimages = [
'/images/lemoncake.jpg',
'/images/chococake.jpg',
'/images/cheese.jpg' // 最後に,をつけない
];
var dir=-1;
var duration = 700;
$(function(){
    // 現在の背景画像番号格納する変数
    var thisnum = 0;
    // 定期的に実行
    setInterval(function(){
    // 背景をフェードアウト
    $(".bg").fadeOut(speed,function(){
    // 背景画像番号変更
    thisnum = thisnum === bgimages.length - 1 ? 0 : thisnum + 1;
    // 背景画像を変更しフェードイン
    $(this).css("background-image","url("+bgimages[thisnum]+")").fadeIn(speed);
    });
    }, times);
    
    /*fadein*/ 
    $(window).on('load scroll',function (){
		$('.hidden').each(function(){
			//ターゲットの位置を取得
			var target = $(this).offset().top;
			//スクロール量を取得
			var scroll = $(window).scrollTop();
			//ウィンドウの高さを取得
			var height = $(window).height();
			//ターゲットまでスクロールするとフェードインする
			if (scroll > target - height){
				//クラスを付与
				$(this).addClass('fadein');
			}
		});
    });
    
    /*menue*/
    $("#slide ul").prepend($("#slide li:last-child"));
    $("#slide ul").css("left", -1000);

    function slide(){
        // スクロール方向の判断
        if(dir == -1){
          // 画像1枚分左へスクロール
          $("#slide ul").animate({"left" : "-=1000px"}, duration, function(){
            // リストの順番を変更
            $(this).append($("#slide li:first-child"));
    
            // リストの位置を変更
            $(this).css("left", -1000);
          });
        }else{
          // 画像1枚分右へスクロール
          $("#slide ul").animate({"left" : "+=1000px"}, duration, function(){
            // リストの順番を変更
            $(this).prepend($("#slide li:last-child"));
    
            // リストの位置を変更
            $(this).css("left", -1000);
    
            // 左方向へリセット
            dir = -1;
          });
        }
      }

      $("#prevBtn").click(function(){
        // スクロール方向の切り替え（右）
        dir = 1;
        slide();
    });

    $("#nextBtn").click(function(){
        // スクロール方向の切り替え（左）
        dir = -1;
        slide();
      
});

    });