import { test, expect } from '@playwright/test';
import { TestStepHelper } from '../helpers/test-step-helper';

test('Landing page renders correctly', async ({ page }, testInfo) => {
	const tester = new TestStepHelper(page, testInfo);
	tester.setMetadata(
		'Landing Page Rendering',
		'As a visitor or Apple reviewer, I want to view SPNSS EOOD company information, business services, Apple developer credentials, and stationery e-commerce links.'
	);

	await page.goto('/');

	await tester.step('initial-load', {
		description: 'Landing Page Content and Corporate Identity',
		verifications: [
			{
				spec: 'Company name is visible',
				check: async () => await expect(page.locator('h1.hero-title')).toContainText('SPNSS EOOD')
			},
			{
				spec: 'Address is visible',
				check: async () =>
					await expect(page.locator('.legal-address').first()).toContainText('4 Hristo Belchev St.')
			},
			{
				spec: 'City and country are visible',
				check: async () =>
					await expect(page.locator('.legal-address').first()).toContainText('Sofia 1000')
			},
			{
				spec: 'Bulgaria is visible',
				check: async () =>
					await expect(page.locator('.legal-address').first()).toContainText('Bulgaria')
			},
			{
				spec: 'Consulting and Translation services are visible',
				check: async () =>
					await expect(page.locator('h3:has-text("Consulting, Translation & ESL")')).toBeVisible()
			},
			{
				spec: 'Mobile Application Engineering is visible',
				check: async () =>
					await expect(page.locator('h3:has-text("Mobile Application Engineering")')).toBeVisible()
			},
			{
				spec: 'Dobutsu Stationery section and link are visible',
				check: async () =>
					await expect(page.locator('a[href*="dobutsustationery.com"]').first()).toBeVisible()
			},
			{
				spec: 'Apple Developer compliance section is visible',
				check: async () =>
					await expect(page.locator('text=Apple Developer Account Verification')).toBeVisible()
			}
		]
	});

	await page.goto('/app-support');

	await tester.step('app-support-page', {
		description: 'iOS Mobile App Support Portal for Apple Developer Compliance',
		verifications: [
			{
				spec: 'App Support Hub title is visible',
				check: async () =>
					await expect(page.locator('h1')).toContainText('iOS Mobile Application Support Hub')
			},
			{
				spec: 'Data deletion instructions are present',
				check: async () =>
					await expect(page.locator('text=User Account & Data Deletion Requests')).toBeVisible()
			}
		]
	});

	tester.generateDocs();
});
