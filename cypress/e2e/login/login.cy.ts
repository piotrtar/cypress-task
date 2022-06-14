import usersData from '../../fixtures/usersData.json';
const USERS = usersData.users;
const password = Cypress.env('password');

import { loginFormTest } from './login';
import { loginTest } from './login';

export default describe('login', () => {

	beforeEach(function () {
		cy.visit('/');
	});

	it('validates empty login form', () => {
		loginFormTest();
	});

	USERS.forEach((username:string) => {
		it('logins successfully as ' + username, () => {
			loginTest(username, password);
		});
	});
});
