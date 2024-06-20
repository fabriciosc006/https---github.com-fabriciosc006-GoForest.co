
const url = 'https://goforest.co.in/public/v2/todos';


function atribuirCampos(data)
{
const resposta = response.json();
let json = JSON.parse(resposta);
const id = json.id;
const user_id = json.user_id;
const title = json.title;
const due_on = json.due_on;
const status = json.status;

id.value = data.id;
user_id.value = data.user_id;
title.value = data.title;
due_on.value = data.due_on;
status.value = data.status;

}
exports.getData = function () {
    return atribuirCampos(data);
};