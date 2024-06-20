 <reference types="cypress"/>
 const getData = require ('../data/getData');

function getTodos(){
    let response 
    //cy.request - cliente http
    return cy
    .request({
        method: 'GET',
        url: 'v2/todos',
        failOnStatusCode: false,
    })
    .then(({ data }) =>{
         response = data
         getData.atribuirCampos(data);
    })
};  

export { getTodos };