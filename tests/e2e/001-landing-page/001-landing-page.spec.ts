import { test, expect } from '@playwright/test';
import { TestStepHelper } from '../helpers/test-step-helper';

test('Landing page renders correctly', async ({ page }, testInfo) => {
	const tester = new TestStepHelper(page, testInfo);
	tester.setMetadata(
		'Landing Page Rendering',
		'As a visitor, I want to see the company contact information.'
	);

	await page.goto('/');

	await tester.step('initial-load', {
		description: 'Landing Page Content',
		verifications: [
			{
				spec: 'Company name is visible',
				check: async () => await expect(page.locator('h1')).toHaveText('SPNSS EOOD.')
			},
			{
				spec: 'Address is visible',
				check: async () =>
					await expect(page.locator('address')).toContainText('4 Hristo Belchev St.')
			},
			{
				spec: 'City and country are visible',
				check: async () => await expect(page.locator('address')).toContainText('Sofia 1000')
			},
			{
				spec: 'Bulgaria is visible',
				check: async () => await expect(page.locator('address')).toContainText('Bulgaria')
			}
		]
	});

	tester.generateDocs();
});
