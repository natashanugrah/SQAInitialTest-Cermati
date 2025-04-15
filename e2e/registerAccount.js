import {test, expect} from '@playwright/test';
import { time } from 'console';


export const registerNewAccount  = async (page) => {
    await page.goto('https://www.cermati.com/app/gabung', {timeout: 10000});
    await page.fill('#mobilePhone', '0895333878031');
    await page.fill('#email', 'natushaanugrah@gmail.com');
    await page.fill('#firstName', 'Natasha');
    await page.fill('#lastName', 'Anugrah');
    await page.waitForTimeout(5000);
    await page.click('#__next > main > div > div.superapp-container.content > div > button');
    // await expect(page.locator('<h1 class="header_2xOrt AppHeader_card__header-title__dkKfh mx-auto text-color-gray-dark">Verifikasi No. Handphone</h1>', {timeout: 8000})).toHaveAttribute('Verifikasi No. Handphone');
};


export const registerWithoutFilledAllForm  = async (page) => {
    await page.goto('https://www.cermati.com/app/gabung', {timeout: 10000});
    await page.fill('#mobilePhone', '0895333878031');
    // await page.fill('#email', 'natushaanugrah@gmail.com'); -- skip this part
    await page.fill('#firstName', 'Natasha');
    await page.fill('#lastName', 'Anugrah');
    await page.waitForTimeout(5000);
    await page.click('#__next > main > div > div.superapp-container.content > div > button');
    await expect(page.locator('#__next > main > div > div.superapp-container.content > div > div:nth-child(3) > div')).toHaveText('Input wajib diisi');
};


