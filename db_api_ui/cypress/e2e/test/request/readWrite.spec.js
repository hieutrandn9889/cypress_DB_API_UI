const endPoint = "http://localhost:3000/todos";
describe("Write Fixture Demo", () => {
  it("Write static-schema response in a Json File", () => {
    cy.request("GET", `${endPoint}`).then((response) => {
      cy.writeFile(
        "cypress/fixtures/read-write/read-write.json",
        response.body
      );
    });
  });

  it("Write more objects in the array", () => {
    const fileName = "cypress/fixtures/read-write/read-write.json";

    cy.request("GET", `${endPoint}`)
      .its("body")
      .each(($object) => {
        cy.readFile(fileName).then((list) => {
          list.push($object);
          // write the merged array
          cy.writeFile(fileName, list);
        });
      });
  });
});
