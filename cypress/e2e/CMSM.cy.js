describe("SplashCMS", () => {
    it("Validar página de inicio", () => {
        cy.visit("https://cms-qa.cgtscorp.com/")// Add test implementation here
        cy.get("#kc-header-wrapper").should("be.visible")
    });
});

describe("Iniciar Sesión", () => {
    it("Debería iniciar sesión como ADMIN correctamente", () => {
        // Visitar la página de inicio de sesión
        cy.visit("https://cms-qa.cgtscorp.com/");

        // Ingresar las credenciales de administrador
        cy.get("#username").type("ktovar");
        cy.get("#password").type("Abcd123+");

        // Hacer clic en el botón de inicio de sesión
        cy.get("#kc-login").click();

        // Verificar que el inicio de sesión fue exitoso
        // Por ejemplo, verificar que un elemento específico de la página de destino sea visible
        cy.url().should("include", "/dashboard"); // Cambia "/dashboard" según la URL esperada
        cy.get("#control-10").should("be.visible"); // Cambia "#dashboard-header" según el elemento esperado
    });

    it("Debería iniciar sesión como COMISSION correctamente", () => {
        // Visitar la página de inicio de sesión
        cy.visit("https://cms-qa.cgtscorp.com/");

        // Ingresar las credenciales de administrador
        cy.get("#username").type("ktovarcom");
        cy.get("#password").type("Abcd13+23");

        // Hacer clic en el botón de inicio de sesión
        cy.get("#kc-login").click();

        // Verificar que el inicio de sesión fue exitoso
        // Por ejemplo, verificar que un elemento específico de la página de destino sea visible
        cy.url().should("include", "/dashboard"); // Cambia "/dashboard" según la URL esperada
        cy.get("#control-10").should("be.visible"); // Cambia "#dashboard-header" según el elemento esperado
    });

    it("Debería iniciar sesión como COMPLIANCE correctamente", () => {
        // Visitar la página de inicio de sesión
        cy.visit("https://cms-qa.cgtscorp.com/");

        // Ingresar las credenciales de administrador
        cy.get("#username").type("ktovarcomp");
        cy.get("#password").type("Abcd13+2");

        // Hacer clic en el botón de inicio de sesión
        cy.get("#kc-login").click();

        // Verificar que el inicio de sesión fue exitoso
        // Por ejemplo, verificar que un elemento específico de la página de destino sea visible
        cy.url().should("include", "/dashboard"); // Cambia "/dashboard" según la URL esperada
        cy.get("#control-10").should("be.visible"); // Cambia "#dashboard-header" según el elemento esperado
    });
});
