import { createOutputSpy } from 'cypress/angular';
import { TestCmp } from './test.cmp';

describe('component tests', () => {
  it('mounts', () => {
    cy.mount(TestCmp);
  });

  it('reflects input value', () => {
    const inputValue = 'input';
    // Setup component
    cy.mount(TestCmp, {
      componentProperties: {
        input: inputValue,
      },
    });

    // Verify result
    cy.get('span').contains(inputValue);
  });

  it('reflects input value to output', () => {
    const inputValue = 'input';
    // Setup component
    cy.mount(TestCmp, {
      componentProperties: {
        input: inputValue,
        output: createOutputSpy('outputSpy'),
      },
    });

    // Trigger event
    cy.get('button').click();

    // Verify result
    cy.get('@outputSpy').should('have.been.calledWith', inputValue);
  });

  it('should have specific number of child directives', () => {
    const inputValue = 'input';
    // Setup component
    cy.mount(TestCmp, {
      componentProperties: {
        input: inputValue,
      },
    });

    // Verify result
    cy.get('div[test-dir-inner]').should('have.length', inputValue.length);
  });

  it('mounts', () => {
    const inputValue = 'input';
    cy.mount(TestCmp, {
      componentProperties: {
        input: inputValue,
      },
    }).then(({ component }) => {
      cy.spy(component, 'test').as('testFn');
    });

    // Trigger event
    cy.get('button').click();

    // Verify result
    cy.get('@testFn').should('have.been.called');
  });
});
