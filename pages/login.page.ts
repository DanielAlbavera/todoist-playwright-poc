import { Page, Locator } from "@playwright/test"

export default class LoginPage {

    readonly inputEmail : Locator
    readonly inputPassword : Locator
    readonly submitButton : Locator
    readonly missingCredentialsMessage : Locator
    readonly errorMessage : Locator

    constructor(page : Page) {
        this.inputEmail = page.locator('input[type="email"]')
        this.inputPassword = page.locator('input[type="password"]')
        this.submitButton = page.locator('button[type="submit"]')
        this.missingCredentialsMessage = page.locator('form p')
        this.errorMessage = page.locator('form div').first()
    }

    async login(email : string, password : string) {
        await this.inputEmail.fill(email)
        await this.inputPassword.fill(password)
        await this.submitButton.click()
    }

}