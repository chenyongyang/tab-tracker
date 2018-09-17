const Joi = require('joi') // 后端验证前端表单信息

module.exports = {
    register(req, res, next) {
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        }

        const { error, value } = Joi.validate(req.body, schema)
        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: '邮件地址格式不正确'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: '密码格式不正确'
                    })
                    break
                default:
                    res.status(400).send({
                        error: '注册信息不正确'
                    })
            }
        } else {
            next()
        }
    }
}