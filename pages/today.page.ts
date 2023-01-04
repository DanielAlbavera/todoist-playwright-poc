import { Page, Locator } from "@playwright/test"

export default class TodayPage {

    readonly todayLabel : Locator

    constructor(page : Page) {
        this.todayLabel = page.locator('span.simple_content')
    }

}