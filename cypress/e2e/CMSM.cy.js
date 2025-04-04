// describe("SplashCMS", () => {
//     it("Validar página de inicio", () => {
//         cy.visit("https://cms-qa.cgtscorp.com/")// Add test implementation here
//         cy.get("#kc-header-wrapper").should("be.visible")
//     });
// });

// describe("Iniciar Sesión", () => {
//     it("Debería iniciar sesión como ADMIN correctamente", () => {
//         // Visitar la página de inicio de sesión
//         cy.visit("https://cms-qa.cgtscorp.com/");

//         // Ingresar las credenciales de administrador
//         cy.get("#username").type("ktovar");
//         cy.get("#password").type("Abcd123+");

//         // Hacer clic en el botón de inicio de sesión
//         cy.get("#kc-login").click();

//         // Verificar que el inicio de sesión fue exitoso
//         // Por ejemplo, verificar que un elemento específico de la página de destino sea visible
//         cy.url().should("include", "/dashboard"); // Cambia "/dashboard" según la URL esperada
//         cy.get("#control-10").should("be.visible"); // Cambia "#dashboard-header" según el elemento esperado
//     });

//     it("Debería iniciar sesión como COMISSION correctamente", () => {
//         // Visitar la página de inicio de sesión
//         cy.visit("https://cms-qa.cgtscorp.com/");

//         // Ingresar las credenciales de administrador
//         cy.get("#username").type("ktovarcom");
//         cy.get("#password").type("Abcd13+23");

//         // Hacer clic en el botón de inicio de sesión
//         cy.get("#kc-login").click();

//         // Verificar que el inicio de sesión fue exitoso
//         // Por ejemplo, verificar que un elemento específico de la página de destino sea visible
//         cy.url().should("include", "/dashboard"); // Cambia "/dashboard" según la URL esperada
//         cy.get("#control-10").should("be.visible"); // Cambia "#dashboard-header" según el elemento esperado
//     });

//     it("Debería iniciar sesión como COMPLIANCE correctamente", () => {
//         // Visitar la página de inicio de sesión
//         cy.visit("https://cms-qa.cgtscorp.com/");

//         // Ingresar las credenciales de administrador
//         cy.get("#username").type("ktovarcomp");
//         cy.get("#password").type("Abcd13+2");

//         // Hacer clic en el botón de inicio de sesión
//         cy.get("#kc-login").click();

//         // Verificar que el inicio de sesión fue exitoso
//         // Por ejemplo, verificar que un elemento específico de la página de destino sea visible
//         cy.url().should("include", "/dashboard"); // Cambia "/dashboard" según la URL esperada
//         cy.get("#control-10").should("be.visible"); // Cambia "#dashboard-header" según el elemento esperado
//     });
// });

describe("Creación masiva de eventos", () => {
    beforeEach(() => {
        cy.visit("https://cms-qa.cgtscorp.com/");
        cy.get("#username").type("ktovar");
        cy.get("#password").type("Abcd123+");
        cy.get("#kc-login").click();
        cy.url().should("include", "/dashboard");
    });

    it("Debería crear eventos con la fecha y hora actuales", () => {
        const eventos = [
            { nombre: "Evento 1", descripcion: "Descripción del Evento 1" },
            { nombre: "Evento 2", descripcion: "Descripción del Evento 2" },
            // Agrega más eventos aquí
        ];

        // Navegar a la vista de eventos
        cy.get(':nth-child(3) > .card > .footer > a').click(); // Cambia "#menu-events" por el selector correcto del menú de eventos
        cy.url().should("include", "/nomination-event"); // Verificar que la URL cambió a la vista de eventos

        //Ir a agregar evento
        cy.get('.flex > .se-button').click(); // Cambia "#add-event-button" por el selector correcto del botón para agregar eventos
        cy.url().should("include", "/create-event"); // Verificar que la URL cambió a la vista de creación de eventos
    

        eventos.forEach((evento) => {
            // Obtener la fecha y hora actuales
            const now = new Date();
            const fechaActual = now.toLocaleDateString("es-ES", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
            }); // Formato dd/mm/yyyy
            const horaActual = now.toLocaleTimeString("es-ES", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false, // Formato 24 horas
            });

            cy.get("#create-event-button").click();
            cy.get("#event-name").type(evento.nombre);
            cy.get("#event-date").type(fechaActual); // Campo para la fecha actual
            cy.get("#event-time").type(horaActual); // Campo para la hora actual
            cy.get("#event-description").type(evento.descripcion);
            cy.get("#submit-event-button").click();
            cy.get(".event-list").should("contain", evento.nombre);
        });
    });
});
