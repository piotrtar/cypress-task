import usersData from '../../fixtures/usersData.json';
import { loginFormTest, loginTest } from '../login/login';
import { orderTest } from '../order/order';
const USERS = usersData.users;
const password = Cypress.env('password');
const USERNAME = "standard_user";


const sizes = [[576, 960], [820, 1180], [1920, 1080]];

describe('resolutions', () => {

	beforeEach(function () {
		cy.visit('/');
	});
	
	sizes.forEach((size:number[]) => {
		it(`validates empty login form on resolution ${size}`, () => {
			cy.viewport(size[0], size[1]);
			loginFormTest();
		});
	})

	sizes.forEach((size:number[]) => {
		USERS.forEach(username => {
			it(`logins successfully as ${username} on resolution ${size}`, () => {
				cy.viewport(size[0], size[1]);
				loginTest(username, password);
			});
		});
	})
	
	sizes.forEach((size:number[]) => {
		it(`successfullt orders Sauce Labs Backpack on resolution ${size}`, () => {
			cy.viewport(size[0], size[1]);
			orderTest(USERNAME, password);
		});
	})
})
