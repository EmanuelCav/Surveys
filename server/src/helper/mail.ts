import nodemailer from 'nodemailer'

import { my_host, my_mail, my_pass } from '../config/config'

const transport = nodemailer.createTransport({
    host: my_host,
    port: 587,
    secure: false,
    auth: {
        user: my_mail,
        pass: my_pass
    },
    tls: {
        rejectUnauthorized: false
    }
})

export const infoEmail = async (email: string) => {

    try {

        await transport.sendMail({
            from: `'EMAILS' ${my_mail}`,
            to: email,
            subject: "Surveys - Confirm authentication",
            html: "<b>Confirm email</b>"
        })
        
    } catch (error) {
        throw (error)
    }

}

