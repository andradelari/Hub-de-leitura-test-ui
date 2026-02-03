/// <reference types="cypress"/>

describe('Funcionalidade: Catálgo de livros ', () => {

    beforeEach(() => {
        cy.visit('catalog.htmml')
    });

    it('Deve clicar no botão Adicionar à cesta', () => {
        cy.get(':nth-child(1) > .card > .card-body > .mt-auto > .d-grid > .btn-primary').click()
        cy.get ('#card-count').should('contain', 1)
        
    });
    it('Deve clicar em todos os botão Adicionar à cesta', () => {
        cy.get('.btn-primary').click({ multiple:true })
        
    });
    
});