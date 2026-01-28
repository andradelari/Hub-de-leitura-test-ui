///<reference types="cypress"/>


describe('Funcionalidade: Cadastro no Hub de leitura ', () => {

    beforeEach(() => {
        cy.visit('register.html')
    });

    it('Deve fazer cadastro com sucesso', () => {
        let email = `teste${Date.now()}@teste.com`
        cy.get('#name').type ('Larissa Torres')
        cy.get('#email').type(email)
        cy.get('#phone').type('21996589636')
        cy.get('#password').type('Senha123')
        cy.get('#confirm-password').type('Senha123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        //Resultado esperado
        cy.url().should('include' , 'dashboard')

        });
        
});