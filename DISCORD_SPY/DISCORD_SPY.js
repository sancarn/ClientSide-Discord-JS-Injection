//DISCORD_SPY.disconnect()

DISCORD_SPY = new MutationObserver(
  function (mutations) {
    for (var mutation of mutations) {
      //Node added tests...
      if (mutation.addedNodes.length > 0) {
        for (var node of mutation.addedNodes) {
          if (node.classList != undefined){
            if (node.classList.contains("message") || node.classList.contains("message-group")) { //&& added
              if(node.classList!=undefined){
                if(node.parentNode){
                  var isSending = node.parentNode.getElementsByClassName("message-sending").length > 0
                  if (!isSending) DISCORD_SPY_HANDLE_ADDED(mutation)
                }
              }
            }
          } 
        }
      }

      //Node removal tests...
      if (mutation.removedNodes.length > 0) {
        for (var node of mutation.removedNodes) {
          if (node.classList != undefined) {
            if ((node.classList.contains("message") || node.classList.contains("message-group"))) { //&& removed
              var isSending = node.getElementsByClassName("message-sending").length > 0 || node.classList.contains("message-sending")
              if (!isSending) DISCORD_SPY_HANDLE_DELETED(mutation)
            }
          }
        }
      }

      if(mutation.type=="characterData"){
        DISCORD_SPY_HANDLE_EDIT(mutation)
      }
    }
  }
);
DISCORD_SPY.observe($(".messages.scroller"), { attributes: false, childList: true, subtree: true, characterData:true, characterDataOldValue: true })

/* 
   Notes:
   * Deleting doesn't really work that well... When a message scrolls out of range it is deleted from the document.
   Probably should add a position check to the 'node removal' test. Something along the lines of: 
   
       if(Array.from(node.parentNode.children).indexOf(node) != 0) DISCORD_SPY_HANDLE_DELETED(mutation)
   
   However this won't work because parentNode doesn't exist because the node was just deleted...
   
   Better method:
   Instantiate some class on all message nodes. Also whenever a node is added, instantiate the same class.
   Observer can look through said classes to find exactly which node was removed.
   observedNodes.forEach(function(el){
      if(el=node && el.index != 0) DISCORD_SPY_HANDLE_DELETED(node)
   })
   
   Alternatively (somehow) get message's ID and ask server whether that message still exists.
   
   Changes:
   * Removed msgTime as it was pretty much meaningless --> "Today at ...", where as atTime is always accurate to the ticket!
 
 */

function DISCORD_SPY_HANDLE_ADDED(mutation) {
  var author = mutation.target.querySelector("span.username-wrapper").innerText
  var time   = mutation.target.querySelector("span.timestamp").innerText
  var msgs = mutation.target.querySelectorAll("div.markup")
  var msg    = msgs[msgs.length-1].innerText  //Added the final message here
  console.log({ type: "Added", author: author, msgText: msg, atTime: new Date() })
}
function DISCORD_SPY_HANDLE_EDIT(mutation) {
  var target = mutation.target.parentNode.closest("div.message")
  var author = target.parentNode.querySelector("span.username-wrapper").innerText
  var time = target.parentNode.querySelector("span.timestamp").innerText
  console.log({ type: "Edited", author: author, msgFrom: mutation.oldValue, msgTo:mutation.target.data, atTime: new Date() })
}
function DISCORD_SPY_HANDLE_DELETED(mutation) {
  var author = mutation.target.querySelector("span.username-wrapper").innerText
  var time   = mutation.target.querySelector("span.timestamp").innerText
  var msg    = mutation.target.querySelector("div.markup").innerText
  console.log({type:"Deleted",author:author,msgText:msg,atTime:new Date()})
}
console.clear()
