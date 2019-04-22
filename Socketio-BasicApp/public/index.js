$(document).ready(() => {

    let socket = io()
    let input = $('#input')
    let send = $('#send')
    let list = $('#list')

    send.click(() => {
        let text = input.val();
        socket.emit('send text', {
            message: text
        })
    })

    socket.on('send text', (data) => {
        let m = data.message
        list.append('<li> '+m+' </li>')

    })
})