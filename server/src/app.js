const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combine')) // 记录日志
app.use(bodyParser.json()) // 解析json
app.use(cors()) // 跨域

app.post('/register', (req, res) => {
    console.log(req.body)
    res.send({
        message: `hello, ${req.body.email},your user is registered`
    })
})

app.listen(process.env.PORT || 8081)