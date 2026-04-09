
import { Page,Locator} from '@playwright/test';

export class LoginPage{

    readonly page:Page

constructor(page:Page){
this.page=page;
}

 async performLogin(url:string){
  await this.page.goto(url);
  await this.page.getByPlaceholder('Enter your username').fill('admin');
  await this.page.getByPlaceholder('Enter your password').fill('admin123');
  await this.page.getByTestId('login-button').click();
}

}

//playwright recommend extracting locators
export class LoginPageUsingLocators{

    readonly page:Page
    readonly usernameField: Locator
    readonly passwordField: Locator
    readonly loginButton: Locator

constructor(page:Page){
   this.page=page;
   this.usernameField = page.getByPlaceholder('Enter your username');
   this.passwordField = page.getByPlaceholder('Enter your password');
   this.loginButton = page.getByTestId('login-button');
} 

 async performLoginUsinLocatorSub(url:string){
  await this.page.goto(url);
  await this.usernameField.fill('admin');
  await this.passwordField.fill('admin123');
  await this.loginButton.click();
}

}