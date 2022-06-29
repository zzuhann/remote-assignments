// Assignment 1: Callback Function

function delayedResult(n1, n2, delayTime, callback) {
    setTimeout(() => {
        callback(n1 + n2)
    }, delayTime)
}
