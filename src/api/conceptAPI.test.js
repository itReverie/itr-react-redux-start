import conceptAPI from "./conceptAPI";


describe("loadConceptsAPI", () => {
  it("should load an object representing a concept", () => {
    //arrange
    const expectedObject = { table: "List of Borrowers" };

    //act
    let concept = null;
    conceptAPI.getAllConcepts().then(result=>{
        //assert
        expect(concept.table).toEqual(expectedObject.table);
    });
  });
});
