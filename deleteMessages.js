function deleteMessages(count){
    var messages = document.getElementsByClassName('message');
    console.log("hello")
    for(var i=0; i<count;i++){
        message = messages[messages.length-1 - i]
        console.log(message)
        if(message.getElementsByClassName("btn-option").length){
            message.getElementsByClassName("btn-option")[0].click()
            document.querySelector("#app-mount > div > div:nth-child(7) > div > div").lastChild.click()
            document.querySelector('#app-mount > div > div:nth-child(8) > div.modal-2LIEKY > div > form > div.flex-lFgbSz.flex-3B1Tl4.horizontalReverse-2LanvO.horizontalReverse-k5PqxT.flex-3B1Tl4.directionRowReverse-2eZTxP.justifyStart-2yIZo0.alignStretch-1hwxMa.noWrap-v6g9vO.footer-1PYmcw > button.buttonRedFilledDefault-1TrZ9q.buttonFilledDefault-AELjWf.buttonDefault-2OLW-v.button-2t3of8.buttonFilled-29g7b5.buttonRedFilled-1NjJNj.mediumGrow-uovsMu').click()
            document.documentElement.click()
        }
    }
}
