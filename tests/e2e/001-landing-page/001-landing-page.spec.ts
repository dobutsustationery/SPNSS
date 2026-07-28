import { test, expect } from '@playwright/test';
import { TestStepHelper } from '../helpers/test-step-helper';

test('Landing page renders correctly', async ({ page }, testInfo) => {
	const tester = new TestStepHelper(page, testInfo);
	tester.setMetadata(
		'Landing Page Rendering',
		'As a visitor, I want to view SPNSS EOOD company information and business services.'
	);

	await page.goto('/');

	await tester.step('initial-load', {
		description: 'Landing Page Content and Corporate Identity',
		verifications: [
			{
				spec: 'Company name is visible',
				check: async () => await expect(page.locator('header .brand-mark')).toContainText('SPNSS')
			},
			{
				spec: 'Address is visible',
				check: async () =>
					await expect(page.locator('footer address').first()).toContainText('4 Hristo Belchev St.')
			},
			{
				spec: 'City and country are visible',
				check: async () =>
					await expect(page.locator('footer address').first()).toContainText('Sofia 1000')
			},
			{
				spec: 'Bulgaria is visible',
				check: async () =>
					await expect(page.locator('footer address').first()).toContainText('Bulgaria')
			},
			{
				spec: 'Consulting and Translation services are visible',
				check: async () =>
					await expect(page.locator('h3:has-text("Consulting & Translation")')).toBeVisible()
			},
			{
				spec: 'Mobile Application Engineering is visible',
				check: async () =>
					await expect(page.locator('h3:has-text("Mobile Applications")')).toBeVisible()
			},
			{
				spec: 'Dobutsu Stationery section and link are visible',
				check: async () =>
					await expect(page.locator('a[href*="dobutsustationery.com"]').first()).toBeVisible()
			}
		]
	});

	await page.goto('/contact');

	await tester.step('contact-page', {
		description: 'Company contact information',
		verifications: [
			{
				spec: 'Company email is visible',
				check: async () => await expect(page.locator('text=elpis@spnss.com')).toBeVisible()
			},
			{
				spec: 'Registered address is visible',
				check: async () => await expect(page.locator('address').first()).toContainText('Sofia 1000')
			}
		]
	});

	tester.generateDocs();
});
