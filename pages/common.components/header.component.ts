import { Page, Locator } from "@playwright/test"

export default class Header {

    readonly profileButton : Locator
    readonly logOutButton : Locator

    constructor(page : Page) {
        this.profileButton = page.locator('button.settings_btn')
        this.logOutButton = page.locator('button[role="menuitem"]').nth(1)
    }

    async logOut() {
        await this.profileButton.click()
        await this.logOutButton.click()
    }

}