//TODO:This needs to be replaced for an API url
const concepts = {
  id: 1,
  name: 'List of Borrowers',
  columns: [
    { Header: "First Name", id: "name", accessor: "name" }, 
    { Header: "Debt", id: "debt", accessor: "debt" }, 
    { Header: "Last Activity Date", id: "lastActivityDate", accessor: "lastActivityDate" }],
  data: [
  { id: 1, name: "Steve Smith", debt: 200000, lastActivityDate: "6th June 2017" },
  { id: 2, name: "Damian Triviera", debt: 550000, lastActivityDate: "9th June 2017" },
  { id: 3, name: "Anna Johanson", debt: 130000, lastActivityDate: "16th June 2017" },
  { id: 4, name: "Olvia Taseski", debt: 200000, lastActivityDate: "26th June 2017" },
  { id: 5, name: "Luke Purvey", debt: 55000, lastActivityDate: "6th June 2017" },
  { id: 6, name: "Karla Ramirez", debt: 330000, lastActivityDate: "6th June 2017" },
  { id: 7, name: "Nic Robinson", debt: 20000, lastActivityDate: "6th June 2017" },
  { id: 8, name: "Adam Rackis", debt: 550200, lastActivityDate: "9th June 2017" },
  { id: 9, name: "Luke Wroblewski", debt: 130500, lastActivityDate: "16th June 2017" },
  { id: 10, name: "Dam Abramavov", debt: 120000, lastActivityDate: "26th June 2017" },
  { id: 11, name: "Catherine Gasson", debt: 75000, lastActivityDate: "6th June 2017" },
  { id: 12, name: "Meghan Miller", debt: 13000, lastActivityDate: "6th June 2017" }]
};

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
