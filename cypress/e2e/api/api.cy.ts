describe('cat fact API check', () => {
	it('gets random fact about cat', () => {
		cy.request({
			method:'GET',
			url:'https://catfact.ninja/fact',
		}).then(response => {
			expect(response.status).to.equal(200);
			expect(response.body).to.have.property('fact')
				.and.not.to.be.empty;
			expect(response.body).to.have.property('length')
				.and.not.to.be.null;
			cy.log(response.body["fact"]);
			cy.log(response.body["length"]);
		})
	});
});
