import { Page, Locator } from "@playwright/test"

export default class LandingPage { 

    readonly loginButton : Locator 
    readonly headerSignUpButton : Locator
    readonly topSignUpButton : Locator
    readonly bottomSignUpButton : Locator

    constructor(page : Page) {
        this.loginButton = page.locator('a[href="/auth/login"]')
        this.headerSignUpButton = page.locator('a[href="/auth/signup"]').first()
        this.topSignUpButton = page.locator('a[href="/auth/signup"]').nth(1)
        this.bottomSignUpButton = page.locator('a[href="/auth/signup"]').last()
    }

}