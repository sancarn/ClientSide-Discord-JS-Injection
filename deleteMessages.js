function deleteMessages(count){
    var i=0;
    var interval = setInterval(function($){
        try {
            if(i==count){
                clearInterval(interval);
            } else {
                deleteLatest($);
            }
            i++;
        } catch (e) {
        }   
    }.bind(window,$),500)
}


function deleteLatest($){
    var message = Array.from(document.getElementsByClassName('message')).pop()
    if(message.getElementsByClassName("btn-option").length){
        message.getElementsByClassName("btn-option")[0].click()
        $('.option-popout.small-popout-box').lastChild.click()
        $('.contents-4L4hQM').click()
        document.documentElement.click()
    }
}
