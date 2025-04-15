// How to run: npx playwright test e2e/registerAccount.spec.js --headed --project=webkit 


import {test, expect} from '@playwright/test';
import {registerNewAccount, registerWithoutFilledAllForm } from './registerAccount.js';

test('Register Your Account - Filled All The Form', async({page})=> {
    await registerNewAccount(page);
});

test('Register Your Account - Without Filled All The Form', async({page})=> {
    await registerWithoutFilledAllForm(page);
});