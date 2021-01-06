console.log('-------------hello-----------------------\n')
let updateMe = 0
let handler = function (parm) {
    if(parm !== 0)
    new Notification(notiConfig)
}
let notiConfig = {
    title: '有一个新消息～'
}
let synccheck = {}
console.log(window)
window.onload = function () {
    new Notification(notiConfig.title)
    let mainInner = document.getElementsByClassName('main_inner')[0]
    // console.log(mainInner)
    mainInner.style.width = '100%'
    mainInner.style.height = '100%'
    Object.defineProperty(synccheck, 'updateMe', {
        get: function () {
            return updateMe
        },
        set: function (para) {
            handler(para)
            updateMe = para
        }
    })
}