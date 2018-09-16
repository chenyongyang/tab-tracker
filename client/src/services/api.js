import aixos from 'axios'

// 返回一个箭头函数
export default () => {
    return aixos.create({
        baseURL: 'http://localhost:8081/'
    })
}