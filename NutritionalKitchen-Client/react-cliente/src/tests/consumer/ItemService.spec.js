import { MatchersV3, PactV3 } from "@pact-foundation/pact";
import { after, describe, it } from "mocha";
import { IngredientService } from "../../services/IngredientService.js";
import { expect } from "chai";
import { crearIngredientRequestBody, crearIngredientResponse, responseIngredientList } from "../PactResponses.js";
const { like } = MatchersV3;

describe('El API de Ingredients', () => {

    let ingredientService;
    const provider = new PactV3({
        consumer: 'react-client',
        provider: 'ingredients-service'
    });

    describe('obtener lista de ingredients', () => {
        it('retorna una lista de ingredients', () => {
            //Arrange
            provider.given('realizar una consulta de ingredients')
                .uponReceiving('Un body vacío')
                .withRequest({
                    method: 'GET',
                    path: '/api/Ingredients'
                }).willRespondWith({
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: like(responseIngredientList)
                });
            return provider.executeTest(async mockServer => {
                // Act
                ingredientService = new IngredientService(mockServer.url);
                return ingredientService.getIngredients().then((response) => {
                    // Assert

                    expect(response).to.be.not.null;
                    expect(response).to.be.a.string;
                    expect(response).to.deep.equal(responseIngredientList);
                    expect(response).to.be.an('array');
                    expect(response).to.have.lengthOf(2);
                    const values = response.map((ingredient) => ingredient.name);
                    expect(values).to.include('ingredient2');
                });
            });
        });
    });
    describe('Agregar un ingredients', () => {
        it('retorna un id de ingredients ya creado', () => {
            //Arrange
            provider.given('crear ingredients')
                .uponReceiving('datos para crear un ingredients')
                .withRequest({
                    method: 'POST',
                    path: '/api/Ingredients',
                    headers: {
                        'Accept': 'application/json'
                    },
                    body: crearIngredientRequestBody
                }).willRespondWith({
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: like(crearIngredientResponse)
                });
            return provider.executeTest(async mockServer => {
                // Act
                ingredientService = new IngredientService(mockServer.url);
                return ingredientService.addIngredient(crearIngredientRequestBody.id, crearIngredientRequestBody.name).then((response) => {
                    //Assert
                    expect(response).to.be.not.null;
                    expect(response).to.be.a.string;
                    expect(response).equal(crearIngredientResponse);
                });
            });

        })
    });
});


