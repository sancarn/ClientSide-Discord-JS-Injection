//Still not stable as of yet
function deleteMessages(count){
    var i=0;
    var interval = setInterval(function($){
            if(i++==count){
                clearInterval(interval);
            } else {
                deleteLatest($);
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
