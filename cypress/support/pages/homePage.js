const selectors = {
    copyRightField: '.row-fluid > :nth-child(2)',
    factorialCalculateButton: '#getFactorial',
    factorialResultValue: '#resultDiv',
    linkPagesBody: 'body',
    newValueField: '#number',
    pageTitle: '.margin-base-vertical',
}

class homePage {
    assertCopyRightMessage() {
        cy.get(selectors.copyRightField)
            .should('contain', '© Qxf2 Services')
            //TODO - Validate the complete string from copy right.
    }

    assertFactorialResultMessage(message) {
        cy.get(selectors.factorialResultValue)
        switch (message) {
        case 'valid':
                cy.should('contain', `The factorial of`)
                //TODO - Validate the final result from valid factorial numbers.
            break;
        case 'invalid':
                cy.should('have.text', 'Please enter an integer')
            break;
        } 
    }

    assertPageInformation() {
        cy.title()
            .should('eq', 'Factoriall')
            //TODO - Validate the correct string this one is only to validate the wrong title
        cy.url()
            .should('include', '/test.getgrex.com/');
        cy.get(selectors.pageTitle)
            .eq(0)
            .should('have.text', 'The greatest factorial calculator!')
    }

    clickToCalculate() {
        cy.get(selectors.factorialCalculateButton)
            .click()
    }

    insertANewValue(value) {
        cy.get(selectors.newValueField).type(value)
    }

    checkLinksAndContent(link) {
        cy.contains(link).click();
        switch (link) {
        case 'Terms and Conditions':
            cy.url().should('include', '/terms');
            cy.get(selectors.linkPagesBody).should('have.text', 'This is the terms and conditions document. We are not yet ready with it. Stay tuned!')
            break;
        case 'Privacy':
            cy.url().should('include', '/privacy');
            cy.get(selectors.linkPagesBody).should('have.text', 'This is the privacy document. We are not yet ready with it. Stay tuned!')
            break;
        }
    }
}

export default homePage;