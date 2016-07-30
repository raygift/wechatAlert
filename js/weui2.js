
 

 $(document).on("click", "#showToast", function() {
        $.toast("操作成功");
      }); 

  $(document).on("click", "#show-toast-cancel", function() {
        $.toast("取消操作", "cancel");
      });
  $(document).on("click", "#show-toast-3", function() {
        $.toast("禁止操作", "forbidden");
      });
$(document).on("click", "#showLoading", function() {
        $.showLoading();

        setTimeout(function() {
          $.hideLoading();
        }, 3000)
      });     

$(document).on("click", "#sd1", function() {
        $.alert("弹出对话框就是好", "标题");
      });
      $(document).on("click", "#sd2", function() {
        $.confirm("您确定要删除吗?", "确认删除?", function() {
          $.toast("删除成功!");
        }, function() {
          //取消操作
        });
      });
      $(document).on("click", "#sd3", function() {
        $.prompt("输入昵称看看", "你的昵称", function(text) {
          $.alert("您的昵称是:"+text, "哦");
        }, function() {
          //取消操作
        });
      });
      $(document).on("tap", "#sd4", function() {
        $.modal({
          title: "支付方式",
          text: "选择你的支付方式",
          buttons: [
            { text: "支付宝", onClick: function(){ $.alert("你选择了支付宝"); } },
            { text: "微信支付", onClick: function(){ $.alert("你选择了微信支付"); } },
            { text: "取消", className: "default"},
          ]
        });
      });      
  
   //进度条
 $(function(){
 $("#btnStartProgress").click(function(){
                    if ($(this).hasClass('weui_btn_disabled')) {
                        return;
                    }

                    $(this).addClass('weui_btn_disabled');

                    var progress = 0;
                    var $progress = $('.js_progress');

                    function next() {
                        $progress.css({width: progress + '%'});
                        progress = ++progress % 100;
                        setTimeout(next, 30);
                    }

                    next();                   
});
 
 })

//操作表
$("#sa").click(function(){
                    var mask = $('#mask');
                    var weuiActionsheet = $('#weui_actionsheet');
                    weuiActionsheet.addClass('weui_actionsheet_toggle');
                    mask.show().addClass('weui_fade_toggle').one('click', function () {
                        hideActionSheet(weuiActionsheet, mask);
                    });
                    $('#actionsheet_cancel').one('click', function () {
                        hideActionSheet(weuiActionsheet, mask);
                    });
                    weuiActionsheet.unbind('transitionend').unbind('webkitTransitionEnd');

                    function hideActionSheet(weuiActionsheet, mask) {
                        weuiActionsheet.removeClass('weui_actionsheet_toggle');
                        mask.removeClass('weui_fade_toggle');
                        weuiActionsheet.on('transitionend', function () {
                            mask.hide();
                        }).on('webkitTransitionEnd', function () {
                            mask.hide();
                        })
                    }
});



   
  