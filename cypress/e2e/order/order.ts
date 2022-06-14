
export const orderTest = (username: string, password: string) => {
	//login
	cy.get('[data-test="username"]').type(username);
	cy.get('[data-test="password"]').type(password, {log: false});
	cy.get('[data-test="login-button"]').click();

	//add item to cart
	cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
	cy.get('[data-test="remove-sauce-labs-backpack"]').should('have.text', 'Remove');
	cy.get('.shopping_cart_badge').should('have.text', 1);
	cy.get('.shopping_cart_link').click();
	cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Backpack');
	cy.get('.inventory_item_price').should('have.text', "$29.99");

	//checkout
	cy.get('[data-test="checkout"]').click();
	cy.location("pathname").should('contain', '/checkout-step-one.html');
	cy.get('[data-test="firstName"]').type('first');
	cy.get('[data-test="lastName"]').type('last');
	cy.get('[data-test="postalCode"]').type('000');
	cy.get('[data-test="continue"]').click();
	cy.location("pathname").should('contain', '/checkout-step-two.html');
	cy.get('[data-test="finish"]').click();
	cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER');
}
