$(function(){
    $('#inputText').keypress(function(e){
        if(e.which == 13) {
            const size = $('span').length;
            if(size > 30){
                $('span').last().remove();
                $('br').last().remove();
                //インプットの固定
            }
            event.preventDefault();
            const inputText = $('#form1').serialize();
            $.ajax("/formSubmit", {
                type: 'post',
                data: inputText,
                dataType: 'json'
                }).done(function(data){
                    $('#main_terminal').prepend('<span class="log_text">' + data + '</span><br>');
                }).fail(function(data){
                    console.log("失敗");
                });
        };
    });
});
