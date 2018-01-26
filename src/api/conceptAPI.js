//TODO:This needs to be replaced for an API url
const concepts = [  { id:1, name: 'Steve', debt: 200000},
{ id:2, name: 'Damian', debt: 550000},
{ id:3, name: 'Anna', debt: 130000},
{ id:4, name: 'Olvia', debt: 200000},
{ id:5, name: 'Luke', debt: 550000},
{ id:6, name: 'Karla', debt: 130000}];

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
