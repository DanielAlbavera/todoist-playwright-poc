import { test, expect } from '@playwright/test'
import LandingPage from '../../pages/landing.page'
import LoginPage from '../../pages/login.page'
import TodayPage from '../../pages/today.page'
import Header from '../../pages/common.components/header.component'
import SignupPage from '../../pages/signup.page'
import { CREDENTIALS } from '../../data/constants.js'

test.describe('Valid Login Validations', () => {
    
    let landingPage : LandingPage
    let loginPage : LoginPage
    let todayPage : TodayPage
    let header : Header
    let signupPage : SignupPage

    test.beforeEach( async ({page}) => {
        landingPage = new LandingPage(page)
        loginPage = new LoginPage(page)
        todayPage = new TodayPage(page)
        header = new Header(page)
        signupPage = new SignupPage(page)

        await page.goto('/')
    })

    test.afterEach( async () => {
        await header.logOut()
    })

    test('should login with valid credentials by "Login" Button', async () => {
        await landingPage.loginButton.click()
        await loginAndValidate()
    })

    test('should login with valid credentials by "Header sign up" Button', async () => {
        await landingPage.headerSignUpButton.click()
        await signupPage.loginLink.click()
        await loginAndValidate()
    })

    test('should login with valid credentials by "Top sign up" Button', async () => {
        await landingPage.topSignUpButton.click()
        await signupPage.loginLink.click()
        await loginAndValidate()
    })

    test('should login with valid credentials by "Bottom sign up" Button', async () => {
        await landingPage.bottomSignUpButton.click()
        await signupPage.loginLink.click()
        await loginAndValidate()
    })

    async function loginAndValidate() {
        await loginPage.login(CREDENTIALS.STANDARD_USER.EMAIL!, CREDENTIALS.STANDARD_USER.PASSWORD!)
        await todayPage.todayLabel.waitFor({ state : 'visible' })
        await expect(todayPage.todayLabel).toBeVisible()
    }

})


