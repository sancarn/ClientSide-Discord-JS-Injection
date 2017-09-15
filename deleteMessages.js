function deleteMessages(count){
    var messages = document.getElementsByClassName('message');
    console.log("hello")
    for(var i=0; i<count;i++){
        message = messages[messages.length-1 - i]
        if(message.getElementsByClassName("btn-option").length){
            message.getElementsByClassName("btn-option")[0].click()
            $('.option-popout.small-popout-box').lastChild.click()
            $('.contents-4L4hQM')[0].click()
            document.documentElement.click()
        }
    }
}
