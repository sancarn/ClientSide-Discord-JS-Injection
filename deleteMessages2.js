//This version is specifically designed for deleting messages in bulk.
//This script does require an oAuthToken which you can get from Developer Tools > Application Tab > "token" key


function deleteMessages2(count,oAuthToken){
    function reqListener(){
        (JSON.parse(this.responseText)).forEach(deleteMsg.bind(oAuthToken))
    }
    function deleteMsg(message){
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
