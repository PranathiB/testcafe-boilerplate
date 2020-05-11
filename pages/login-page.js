import { Selector, t } from 'testcafe';

class LoginPage{
    constructor(){
        this.email = Selector("#email");
        this.password = Selector ("#password");
        this.submit = Selector("#signInButton");
        this.errorMessage = Selector("#errors1");
    }

    async enterLoginDetails(email, password){
        await t
            .typeText(this.email, email)
            .typeText(this.password, password)
            .click(this.submit);
    }
    async errorMessageVisibility(){
        return this.errorMessage
    }

}

export default new LoginPage();
