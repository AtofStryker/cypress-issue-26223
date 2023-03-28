describe("template spec", () => {
  it("jjsLogin", () => {
    cy.visit("https://videoportaluat.azurewebsites.net/home");
    cy.wait(2000);

    cy.get(".btn").click(); //Sign In button
    cy.wait(1000);

    cy.get("#i0116").invoke("val", "myusername").trigger("input");

    cy.wait(2000);
    cy.get("#idSIButton9").click(); //Next button

    cy.get("#i0118").invoke("val", "mypassword").trigger("input");

    cy.wait(3000);
    cy.get("#idSIButton9").click(); // Sign In button ---- it stops here and shows 'Your tests are loading' for infinite amount of time
  });
});
