$(function(){
    $('#inputText').keypress(function(e){
        if(e.keyCode == 13) {
            const size = $('span').length;
            if(size > 30){
                $('span').last().remove();
                $('br').last().remove();
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
            clearInputInfo();
        };
    });

    //システム起動処理
    $('#startText').keypress(function(e){
            if(e.keyCode == 13) {
                event.preventDefault();
                const startText = $('.form1').serialize();
                $.ajax("/systemStart", {
                    type: 'post',
                    data: startText,
                    dataType: 'json'
                    }).done(function(data){
                        const firstLogType = Object.keys(data).shift();
                        switch (firstLogType){
                            case 'startDownload':
                                fileDownload(data);
                                break;
                        }
                    }).fail(function(data){
                        console.log("失敗");
                    });
                clearInputInfo();
        };
    });

    const clearInputInfo = function(){
        $('input').val('');
    }

    const fileDownload =　function(data) {
        let delayCnt = createDelay(300, 800);
        Object.keys(data).forEach(function(key, index){
            const logType = key
            setTimeout(() => {
                if(logType != "progress"){
                    $('#log_space').append('<span class="log_text">' + data[key] + '</span><br>');
                }else{
                    addProgress();
                }
            }, delayCnt * index);
        });
    }

    const createDelay = function(min, max){
        let delayCnt =  Math.floor( Math.random() * (max + 1 - min) ) + min ;
        return delayCnt;
    }

    const addProgress = function(){
        let progresBar = 'ー'.repeat(20);
        $('#log_space').append('<span class="log_text" id = progress1>' + '[' + progresBar + ']' + '</span><br>')
        $('#progress1').text.replace("ー", "＃");
//        for(let i = 0; i = 3; i++){
//            for(let i = 0; i = 4; i++){
//                const logText = $('#progress1').text();
//                const logText_ = logText.replace("ー", "＃");
//                $('#progress1').text($('#progress1').text.replace("ー", "＃"));
//            }
//        }
    }
});
