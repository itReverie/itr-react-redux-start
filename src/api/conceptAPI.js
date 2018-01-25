//TODO:This needs to be replaced for an API url
const concepts = [{id: 1, concept:"XCP"},
                    {id: 2, concept:"PRO"},
                    {id: 3, concept:"NXTI"},
                    {id: 4, concept:"NIRO"},
                    {id: 5, concept:"VCOIN"},
                    {id: 6, concept:"ADN"}];

class conceptAPI {

  static getAllConcepts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], concepts));
      });
    });
  }
}

export default conceptAPI;
