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
            subject: "Surfrage - Confirm authentication",
            html: `
            <div style="margin: 0 auto;">
                <h1 style="color: #f64; font-size: 34px; font-weight: 600;">Welcome to Surfrage</h1>
                <p style="font-size: 24px;">Start to take part and create surveys</p>
                <img src="https://res.cloudinary.com/projects-emanuek/image/upload/v1709490095/portfolio/icon_qfb1dl.png" alt="surfrage_icon">
                <a href="http://localhost:5173/status" style="text-decoration: none;">
                    <button style="margin-top: 20px; width: 245px; border-radius: 8px; background-color: #f64; outline: none; padding: 7px; border: none; font-size: 24px; color: #fff; cursor: pointer;">
                        Confirm account
                    </button>
                </a>
            </div>
            `
        })

    } catch (error) {
        throw (error)
    }

}

