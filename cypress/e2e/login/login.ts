
export const loginFormTest = () => {
	cy.get('[data-test="login-button"]').click();
	cy.get('[data-test="error"]').should('have.text', "Epic sadface: Username is required");
	cy.get('[data-test="username"]').should('have.class', "error");
	cy.get('[data-test="password"]').should('have.class', "error");
}

export const loginTest = (username: string, password: string) => {
	cy.get('[data-test="username"]').type(username);
	cy.get('[data-test="username"]').should('have.value', username);
	cy.get('[data-test="password"]').type(password, {log: false});
	cy.get('[data-test="password"]').should('have.value', password);
	cy.get('[data-test="login-button"]').then($btn => {
		expect($btn).to.be.enabled;
	}).click();

	cy.location("pathname").should('contain', '/inventory.html');
	cy.percySnapshot();

	cy.getCookies().then((cookies) => {
		expect(cookies[0]).to.have.property('name', 'session-username');
		expect(cookies[0]).to.have.property('value', username);
	});
}
