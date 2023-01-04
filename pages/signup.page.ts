import { Page, Locator } from "@playwright/test"

export default class SignupPage {

    readonly loginLink : Locator

    constructor(page : Page) {
        this.loginLink = page.locator('a[href="/auth/login"]')
    }

}
