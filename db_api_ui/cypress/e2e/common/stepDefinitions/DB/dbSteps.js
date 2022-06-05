Given("I execute select all query on pokemon DB", () => {
  cy.task("DATABASE", {
    dbConfig: Cypress.env("DB"),
    sql: `
      select * from pokemon    
      `,
  }).then((result) => {
    console.log(result.rows);
  });
});

When(
  "I execute selet query on pokemon DB, where name equals {string}",
  (pokemonName) => {
    cy.task("DATABASE", {
      dbConfig: Cypress.env("DB"),
      sql: `
      select * from pokemon where hieutran = '${pokemonName}'   
      `,
    }).then((result) => {
      console.log(result.rows[0]);
      expect(result.rows[0].hieutran).to.have.string(`${pokemonName}`);
    });
  }
);
