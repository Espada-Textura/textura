export function getCookie(name) {
    let cookie = {}
    document.cookie.split(';').forEach(function (el) {
        let [k, v] = el.split('=')
        cookie[k.trim()] = v
    })
    if (cookie[name]) return JSON.parse(cookie[name])
    return null
}
