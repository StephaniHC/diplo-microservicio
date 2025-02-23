import { MatchersV3, PactV3 } from "@pact-foundation/pact";
import {  describe, it } from "mocha";
import { NutritionalKitchenService } from "../../services/NutritionalKitchenService.js";
import { expect } from "chai";
import {
    crearIngredientRequestBody,
    crearIngredientResponse,
    responseIngredientList,
    responseKitchenManagerList
} from "../PactResponses.js";
const { like } = MatchersV3;

describe('El API de los services de Nutritional Kitchen', () => {

    let nutritionalKitchenService;
    const provider = new PactV3({
        consumer: 'react-client',
        provider: 'nutritional-kitchen-service'
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
                nutritionalKitchenService = new NutritionalKitchenService(mockServer.url);
                return nutritionalKitchenService.getIngredients().then((response) => {
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
                nutritionalKitchenService = new NutritionalKitchenService(mockServer.url);
                return nutritionalKitchenService.addIngredient(crearIngredientRequestBody.id, crearIngredientRequestBody.name).then((response) => {
                    //Assert
                    expect(response).to.be.not.null;
                    expect(response).to.be.a.string;
                    expect(response).equal(crearIngredientResponse);
                });
            });

        })

        describe('obtener lista de kitchen manager', () => {
            it('retorna una lista de kitchen manager', () => {
                //Arrange
                provider.given('realizar una consulta de kitchen manager')
                    .uponReceiving('Un body vacío')
                    .withRequest({
                        method: 'GET',
                        path: '/api/KitchenManager'
                    }).willRespondWith({
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: like(responseKitchenManagerList)
                });
                return provider.executeTest(async mockServer => {
                    // Act
                    nutritionalKitchenService = new NutritionalKitchenService(mockServer.url);
                    return nutritionalKitchenService.getKitchenManagers().then((response) => {
                        // Assert

                        expect(response).to.be.not.null;
                        expect(response).to.be.a.string;
                        expect(response).to.deep.equal(responseKitchenManagerList);
                        expect(response).to.be.an('array');
                        expect(response).to.have.lengthOf(2);
                        const values = response.map((kitchenManager) => kitchenManager.name);
                        expect(values).to.include('test2');
                    });
                });
            });
        });
    });
});


