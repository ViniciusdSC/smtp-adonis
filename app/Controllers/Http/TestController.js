'use strict'
const Mail = use('Mail')

class TestController {
    async index({ response }) {
        const res = await Mail.send('emails.forget-password', { username: 'test' }, (message) => {
            message
                .to('cardoso_cpv@hotmail.com')
                .from('contato@demeter.io')
                .subject('Forget Password')
        })

        return response.send({
            status: true,
            res
        })
    }
}

module.exports = TestController
