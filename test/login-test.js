import LoginPage from '../pages/login-page';

fixture('Failing Login Test')
    .page("https://www.cleartrip.com/signin")

test('Use details to login', async t => {
    await LoginPage.enterLoginDetails("invalid.user@gmail.com", "invalid-password");
    await t.expect(await LoginPage.errorMessageVisibility(), {visibilityCheck: true}).ok();
});

