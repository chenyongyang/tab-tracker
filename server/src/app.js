const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combine')) // 记录日志
app.use(bodyParser.json()) // 解析json
app.use(cors()) // 跨域

app.get('/status', (req, res) => {
    res.send({
        message: 'hello world'
    })
})

app.listen(process.env.PORT || 8081)