import { test, expect } from '@playwright/test'
import LoginPage  from '../../pages/login.page'
import LandingPage from '../../pages/landing.page'
import { CREDENTIALS } from '../../data/constants'

test.describe('Invalid Login Validations', () => {
    
    let loginPage : LoginPage
    let landingPage : LandingPage

    test.beforeEach( async ({ page, context }) => {
        loginPage = new LoginPage(page)
        landingPage = new LandingPage(page)
        await page.goto('/')
        await landingPage.loginButton.click()
    })

    test('should not login without email', async () => {
        const expected_text = 'Please enter a valid email address.'
        await loginPage.submitButton.click()
        await expect(loginPage.missingCredentialsMessage).toBeVisible()
        await expect(loginPage.missingCredentialsMessage).toHaveText(expected_text)
    })

    test('should not login without password', async () => {
        const expected_text = 'Passwords must be at least 8 characters long.'
        await loginPage.inputEmail.fill(CREDENTIALS.INVALID_USER.EMAIL!)
        await loginPage.submitButton.click()
        await expect(loginPage.missingCredentialsMessage).toBeVisible()
        await expect(loginPage.missingCredentialsMessage).toHaveText(expected_text)
    })

    test('should not login with invalid credentials', async () => {
        const expected_text = 'Wrong email or password.'
        await loginPage.login(CREDENTIALS.INVALID_USER.EMAIL!, CREDENTIALS.INVALID_USER.PASSWORD!)
        await expect(loginPage.errorMessage).toBeVisible()
        await expect( loginPage.errorMessage).toHaveText(expected_text)
    })

})

