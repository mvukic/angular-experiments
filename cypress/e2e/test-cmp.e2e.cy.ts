describe('component tests', () => {
  it('visits test cmp', () => {
    const inputValue = 'input-value';
    cy.visit(`/#/test-cmp/${inputValue}`);

    // Verify result
    cy.get('span').contains(inputValue);
  });

  it('visits test cmp', () => {
    const inputValue = 'input-value';
    cy.visit(`/#/test-cmp/${inputValue}`);

    // Verify result
    cy.get('input').type(inputValue);

    // Verify result
    cy.get('div').contains(inputValue);
  });
});
