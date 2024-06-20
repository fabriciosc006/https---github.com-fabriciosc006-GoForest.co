import { text } from 'body-parser';
import * as GETtodos from '../requests/GETtodos.request';

describe('GET Todos', () => {
    it('Listar Todos', () => {
      GETtodos.getTodos().should((response) => {
        cy.log(response.status);
        cy.log(response.statusText);
        expect(response.status).to.eq(200);
        expect(response.body).to.be.not.null;
      })    
    });
    //TC to validate JSON SCHEMA
    it('Validate JSON Schema', () => {
      const schema = todosSchema.json
      const expectedValue = [
        {
          "id": 54629,
          "user_id": 6972328,
          "title": "Universe tepidus vel carus adhaero.",
          "due_on": "2024-06-23T00:00:00.000+05:30",
          "status": "pending"
      },
      {
          "id": 54628,
          "user_id": 6972327,
          "title": "Armo aspicio vir colligo inflammatio atque quibusdam arto traho.",
          "due_on": "2024-06-29T00:00:00.000+05:30",
          "status": "pending"
      },
      {
          "id": 54627,
          "user_id": 6972325,
          "title": "Ars adhuc vallum compono substantia vinculum aliquam nostrum desidero.",
          "due_on": "2024-06-29T00:00:00.000+05:30",
          "status": "completed"
      },
      {
          "id": 54625,
          "user_id": 6972321,
          "title": "Deduco comburo tyrannus ea alienus concedo tempora vilitas.",
          "due_on": "2024-07-02T00:00:00.000+05:30",
          "status": "pending"
      },
      {
          "id": 54624,
          "user_id": 6972319,
          "title": "Vomica spargo tero audentia celo vir certo.",
          "due_on": "2024-06-25T00:00:00.000+05:30",
          "status": "completed"
      },
      {
          "id": 54623,
          "user_id": 6972318,
          "title": "Autem tenax cursus terebro tum ciminatio.",
          "due_on": "2024-07-08T00:00:00.000+05:30",
          "status": "pending"
      },
      {
          "id": 54622,
          "user_id": 6972317,
          "title": "Benevolentia aperio spiculum cubicularis casso enim vestrum temperantia.",
          "due_on": "2024-07-09T00:00:00.000+05:30",
          "status": "pending"
      },
      {
          "id": 54621,
          "user_id": 6972316,
          "title": "Adiuvo tempore ullam angulus vito amicitia annus.",
          "due_on": "2024-07-04T00:00:00.000+05:30",
          "status": "pending"
      },
      {
          "id": 54620,
          "user_id": 6972315,
          "title": "Vado thymbra terminatio trucido pauper.",
          "due_on": "2024-06-21T00:00:00.000+05:30",
          "status": "pending"
      },
      {
          "id": 54619,
          "user_id": 6972311,
          "title": "Cattus apostolus urbanus vivo et altus apud clarus tonsor.",
          "due_on": "2024-07-15T00:00:00.000+05:30",
          "status": "pending"
      }
      ];
      expect(expectedValue[0]).to.be.jsonSchema(schema);
    });
    
    it('TC for Status Completed', () => {
      // Chamar a function que tem os dados parseados do JSON
      let status = []
      status = getData.atribuirCampos(status);
      cy.get(status)
        .invoke('text')
        .then((text) => {
         expect(text).to.contain('completed')
       })

    });

    it('TC for duo_on parameter', () => {
      // Test case parsear o json e encontrar um parametro
      GETtodos.getTodos().should((response) => {
        cy.log(response.due_on);
        expect(response.due_on[0]).to.eq("2024-06-23T00:00:00.000+05:30");
    });

  });
})