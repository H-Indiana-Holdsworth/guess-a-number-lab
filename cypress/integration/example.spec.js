
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('contains reset button', ()=>{
            cy.get('#reset-button').should('be.visible');
        });
    });
});