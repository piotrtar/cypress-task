const password = Cypress.env('password');

import { orderTest } from './order';

describe('order', () => {
	it('successfullt orders Sauce Labs Backpack', () => {
		cy.visit('/');
		const USERNAME = "standard_user";
		orderTest(USERNAME, password);
	});
});
