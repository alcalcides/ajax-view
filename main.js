exports.myDateTime = function () {
    return Date()
}

exports.helloAjax = function () {
    return "<script> \
        var x = new XMLHttpRequest(); \
        x.open('GET', 'https://viacep.com.br/ws/50791251/json/'); \
        x.send() \
    </script>"
}