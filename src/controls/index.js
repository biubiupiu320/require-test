import Vue from 'vue'

const controls = [
    'VButton'
]

controls.forEach(key => {
    Vue.component(key, function (resolve) {
        require([`@/controls/design/${key}`], resolve)
    })
})