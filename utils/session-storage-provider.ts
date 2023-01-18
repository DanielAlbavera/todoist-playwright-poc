import { Page } from '@playwright/test'

export class SessionStorageProvider {
    
    page : Page

    constructor(page : Page) {
        this.page = page
    }

    async getItembyName(name : string) {
        const data = await this.page.evaluate( () => {
            const data = window.sessionStorage.getItem(name)
            return JSON.parse(data!)
        })
        return data;
    }

}