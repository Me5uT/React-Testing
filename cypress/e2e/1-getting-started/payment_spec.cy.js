describe("payment", () => {
  it("user can make payment", () => {
    // login
    cy.visit("localhost:3000/");
    cy.findByRole("textbox", { name: /username/i }).type("Tavares_Barrows");
    cy.findByLabelText(/password/i).type("s3cret");
    cy.findByRole("checkbox", { name: /remember me/i }).check();
    cy.findByRole("button", { name: /sign in/i }).click();

    // https://www.youtube.com/watch?v=OVNjsIto9xM&t=2260s min 40:06

    // check balance
    let oldBalance = 0;
    cy.get('[data-test="sidenav-user-balance"]').should((a) => console.log("a", a));
    // click on pay button
    // search for user
    // add amount and note and click pay button
    // return to transactions
    // go to personal payments
    // clcik on payment
    // verify if payment was made
    // verify if payment amount was deducted
  });
});
