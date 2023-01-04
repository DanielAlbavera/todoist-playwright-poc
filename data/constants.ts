import dotenv from 'dotenv'
dotenv.config()

export const URLS = {
    BASE : process.env.BASE_URL,
    API : process.env.API_BASE_URL
}

export const CREDENTIALS = {
    STANDARD_USER : {
        EMAIL : process.env.EMAIL,
        PASSWORD : process.env.PASSWORD
    },

    INVALID_USER : {
        EMAIL : process.env.INVALID_EMAIL,
        PASSWORD : process.env.INVALID_PASSWORD
    }
}