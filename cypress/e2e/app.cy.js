

describe('App', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3001")
    })

    it('Should display the title', () => {
        cy.get("h1").contains("My React App")   
    })
    

})