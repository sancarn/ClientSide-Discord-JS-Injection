function deleteMessages(count){
    var i=0;
    var interval = setInterval(function(){
        if(i++==count){
            clearInterval(interval);
        } else {
            deleteLatest();
        }
    },100)
}


function deleteLatest(){
    var messages = document.getElementsByClassName('message');
    message = messages[messages.length-1 - i]
    if(message.getElementsByClassName("btn-option").length){
        message.getElementsByClassName("btn-option")[0].click()
        $('.option-popout.small-popout-box').lastChild.click()
        $('.contents-4L4hQM').click()
        document.documentElement.click()
    }
}
