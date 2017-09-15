//Still not stable as of yet

function getPropertyByRegex(o,r) {
  for (var key in o) {
    if (key.match(r)) {
      return o[key];
    }
  }
  return undefined;
};


function deleteMessages(count){
    var i=0;
    var interval = setInterval(function($){
            if(i==count){
                clearInterval(interval);
            } else {
                var msgID = getLatestMsgID() 
                deleteLatest($);
                if(msgID!=getLatestMsgID()) i++;
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

function getLatestMsgID(){
    var msg = Array.from(document.getElementsByClassName('message')).pop()
    return msg.getPropertyByRegex(/__reactInternalInstance.+/)._domID
}
