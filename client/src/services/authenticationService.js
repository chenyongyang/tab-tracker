import Api from '@/services/api.js' // 是一个函数

export default {
    register(credentials) {
        return Api().post('register', credentials)
    },
    login(credentials) {
        return Api().post('login', credentials)
    }
}

// authenticationServices.register({
//     username: 'xxx',
//     password: 'xxx'
// })