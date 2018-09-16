import Api from '@/services/api.js' // 是一个函数

export default {
    register(credentials) {
        return Api().post('register', credentials)
    }
}

// authenticationServices.register({
//     username: 'xxx',
//     password: 'xxx'
// })