function AuthAnimetion(input, lable) {
    setTimeout(() => {
        const inputs = document.getElementsByClassName(input)
        const labels = document.getElementsByClassName(lable)
        Array.prototype.forEach.call(inputs, (elem, index) => {
            if (elem.value.length > 0) {
                labels[index].classList.add('active')
            }
            elem.addEventListener('focus', () => {
                labels[index].classList.add('active')
            })
            elem.addEventListener('focusout', () => {
                if (!elem.value) {
                    labels[index].classList.remove('active')
                }
            })
        })
    }, 500)
}

export default AuthAnimetion
