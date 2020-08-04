import homePage from '../support/pages/homePage.js';

const homepage = new homePage();
const invalidValues = ['$$$$$', '-0', '-1', 'text', 'string'];
const validInteger = ['0', '1', '2', '3', '4', '5'];
const viewPorts = ['macbook-13', 'iphone-6', 'ipad-2'];

context('Factorial Home Page', () => {
  viewPorts.forEach((viewPorts) => {
    beforeEach(() => {
      cy.viewport(viewPorts)
      cy.visit('/')
    })

    it(`should check fatorial home page information - ${viewPorts}`, () => {
        homepage.assertPageInformation()
    })
    
    validInteger.forEach((validInteger) => {
    it(`should check fatorial result text for a valid integer  ${validInteger} - ${viewPorts}`, () => {
        homepage.insertANewValue(validInteger)
        homepage.clickToCalculate()
        homepage.assertFactorialResultMessage('valid')
      })
    })

    invalidValues.forEach((invalidValues) => {
    it(`should check an error message due to an invalid value ${invalidValues} - ${viewPorts}`, () => {
        homepage.insertANewValue('test')
        homepage.clickToCalculate()
        homepage.assertFactorialResultMessage('invalid')
      })
    })
  
    it(`should check terms and conditions link content - ${viewPorts}`, () => {
        homepage.checkLinksAndContent('Terms and Conditions')
    })

    it(`should check privacy link content - ${viewPorts}`, () => {
        homepage.checkLinksAndContent('Privacy')
    })

    it(`should check copyright information - ${viewPorts}`, () => {
        homepage.assertCopyRightMessage()
    })
  })
})
