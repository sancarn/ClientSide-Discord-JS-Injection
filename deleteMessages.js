//Potentially unstable

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


/*
better solution would be to use:
HTTPGet("https://discordapp.com/api/v6/channels/{channel-id}/messages?limit=50")
and then from there use
HTTPDelete("https://discordapp.com/api/v6/channels/{channel-id}/messages/{message-id}")

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
MORE INFO ON THIS TOPIC:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function reqListener () {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET","https://discordapp.com/api/v6/channels/" + /channels\/(\d+)\/(\d+)/.exec(window.location.pathname)[2] + "/messages?limit=50")
oReq.setRequestHeader("authorization",oAuthToken)
oReq.send()

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Note oAuthToken is required to use this method. The authorization token can be found in Developer Tools > Application Tab > Token key. You can double click the icon and copy the path

*/

function deleteMessages2(count,oAuthToken){
    function reqListener(){
        JSON.parse(this.responseText).forEach(delete.bind(oAuthToken))
    }
    function delete(message){
        var url = `https://discordapp.com/api/v6/channels/${message.channel_id}/messages/${message.id}`
        var oReq = new XMLHttpRequest();
        oReq.open("DELETE",url)
        oReq.setRequestHeader("authorization",oAuthToken)
        oReq.send()
    }
    var oReq = new XMLHttpRequest();
    var url = `https://discordapp.com/api/v6/channels/${/channels\/(\d+)\/(\d+)/.exec(window.location.pathname)[2]}/messages?limit=${count}`
    oReq.addEventListener("load",reqListener);
    oReq.open("GET",url)
    oReq.setRequestHeader("authorization",oAuthToken)
    oReq.send()
}




