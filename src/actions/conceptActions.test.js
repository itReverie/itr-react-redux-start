import * as conceptActions from './conceptActions';
import * as types from "./actionTypes";


  describe("loadConceptsSuccess", () => {
    it("should load LOAD_CONCEPTS_SUCCESS action", () => {
      //arrange
      const concepts = { id: "clean-code", title: "Clean Code" };
      const expectedAction = { type: types.LOAD_CONCEPTS_SUCCESS, concepts: concepts };

      //act
      const action = conceptActions.loadConceptsSuccess(concepts);

      //assert
      expect(action).toEqual(expectedAction);
    });
  });