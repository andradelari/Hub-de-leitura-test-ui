///<reference types="cypress"/>
import { faker } from '@faker-js/faker';
import CadastroPage from '../support/pages/cadastro-pages'

describe('Funcionalidade: Cadastro no Hub de leitura ', () => {

    beforeEach(() => {
        CadastroPage.visitarPaginaCadastro()
    });

    it('Deve fazer cadastro com sucesso, usando função JS', () => {
        let email = faker.internet.email()
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
        
        it('Deve fazer cadastro com sucesso, usando Faker ', () => {
        let nome = faker.person.fullName()
        let email = faker.internet.email()
        cy.get('#name').type (nome)
        cy.get('#email').type(email)
        cy.get('#phone').type('21996589636')
        cy.get('#password').type('Senha123')
        cy.get('#confirm-password').type('Senha123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        //Resultado esperado
        cy.url().should('include' , 'dashboard')
        cy.get('#user-name').should('contain' , nome)

        });

        it('Deve preencher cadastro com sucesso - Usando comando customizado', () => {
            let email = faker.internet.email()
            cy.preencherCadastro(
                'Larissa',
                email,
                '11365236986',
                'Teste@123',
                'Teste@123'

            )
            cy.url().should('include', 'dashboard')

        });


        it('Deve fazer cadastro com sucesso - Usando Page Objects', () => {
           let email = faker.internet.email()
            CadastroPage.preencherCadastro('Larissa Andrade', email, '1165893625', 'senha123', 'senha123')
            cy.url().should('include' , 'dashboard')
        });

        it('Deve validar mensagem ao tentar cadastrar sem preencher nome', () => {
            CadastroPage.preencherCadastro('', 'teste@teste.com', '11256325865', 'senha123', 'senha123')
            cy.get(':nth-child(1) > .invalid-feedback').should('contain', 'Nome deve ter pelo menos 2 caracteres')
            
        });
});