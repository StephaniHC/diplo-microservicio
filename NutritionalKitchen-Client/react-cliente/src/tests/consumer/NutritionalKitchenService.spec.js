import { MatchersV3, PactV3 } from "@pact-foundation/pact";
import {  describe, it } from "mocha";
import { NutritionalKitchenService } from "../../services/NutritionalKitchenService.js";
import { expect } from "chai";
import {
    crearIngredientRequestBody,
    crearIngredientResponse,
    responseIngredientList,
    responseKitchenManagerList,
    crearKitchenManagerRequestBody,
    crearKitchenManagerResponse,
    responseRecipeList,
    crearRecipesRequestBody,
    crearRecipeResponse,
    responseLabelList,
    responsePackageList,
    crearPackageRequestBody,
    crearPackageResponse

}
    from "../PactResponses.js";
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
        });
    });


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

    describe('Agregar un kitchen manager', () => {
        it('retorna un id de kitchen manager ya creado', () => {
            //Arrange
            provider.given('crear kitchen manager')
                .uponReceiving('datos para crear un kitchen manager')
                .withRequest({
                    method: 'POST',
                    path: '/api/KitchenManager',
                    headers: {
                        'Accept': 'application/json'
                    },
                    body: crearKitchenManagerRequestBody
                }).willRespondWith({
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: like(crearKitchenManagerResponse)
            });
            return provider.executeTest(async mockServer => {
                // Act
                nutritionalKitchenService = new NutritionalKitchenService(mockServer.url);
                return nutritionalKitchenService.addKitchenManager(crearKitchenManagerRequestBody.id, crearKitchenManagerRequestBody.name, crearKitchenManagerRequestBody.shift).then((response) => {
                    //Assert
                    expect(response).to.be.not.null;
                    expect(response).to.be.a.string;
                    expect(response).equal(crearKitchenManagerResponse);
                });
            });
        });
    });


    describe('obtener lista de Recipe', () => {
        it('retorna una lista de Recipe', () => {
            //Arrange
            provider.given('realizar una consulta de recipe')
                .uponReceiving('Un body vacío')
                .withRequest({
                    method: 'GET',
                    path: '/api/Recipe'
                }).willRespondWith({
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: like(responseRecipeList)
            });
            return provider.executeTest(async mockServer => {
                // Act
                nutritionalKitchenService = new NutritionalKitchenService(mockServer.url);
                return nutritionalKitchenService.getRecipes().then((response) => {
                    // Assert

                    expect(response).to.be.not.null;
                    expect(response).to.be.a.string;
                    expect(response).to.deep.equal(responseRecipeList);
                    expect(response).to.be.an('array');
                    expect(response).to.have.lengthOf(2);
                    const values = response.map((recipe) => recipe.name);
                    expect(values).to.include('test2');
                });
            });
        });
    });

    describe('Agregar un Recipe', () => {
        it('retorna un id de Recipe ya creado', () => {
            //Arrange
            provider.given('crear Recipe')
                .uponReceiving('datos para crear un Recipe')
                .withRequest({
                    method: 'POST',
                    path: '/api/Recipe',
                    headers: {
                        'Accept': 'application/json'
                    },
                    body: crearRecipesRequestBody
                }).willRespondWith({
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: like(crearRecipeResponse)
            });
            return provider.executeTest(async mockServer => {
                // Act
                nutritionalKitchenService = new NutritionalKitchenService(mockServer.url);
                return nutritionalKitchenService.addRecipe(crearRecipesRequestBody.id, crearRecipesRequestBody.name, crearRecipesRequestBody.preparationTime).then((response) => {
                    //Assert
                    expect(response).to.be.not.null;
                    expect(response).to.be.a.string;
                    expect(response).equal(crearRecipeResponse);
                });
            });
        });
    });


    describe('obtener lista de Label', () => {
        it('retorna una lista de Label', () => {
            //Arrange
            provider.given('realizar una consulta de Label')
                .uponReceiving('Un body vacío')
                .withRequest({
                    method: 'GET',
                    path: '/api/Label'
                }).willRespondWith({
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: like(responseLabelList)
            });
            return provider.executeTest(async mockServer => {
                // Act
                nutritionalKitchenService = new NutritionalKitchenService(mockServer.url);
                return nutritionalKitchenService.getLabels().then((response) => {
                    // Assert

                    expect(response).to.be.not.null;
                    expect(response).to.be.a.string;
                    expect(response).to.deep.equal(responseLabelList);
                    expect(response).to.be.an('array');
                    expect(response).to.have.lengthOf(2);
                    const values = response.map((label) => label.address);
                    expect(values).to.include('test2');
                });
            });
        });
    });

    describe('obtener lista de Package', () => {
        it('retorna una lista de Package', () => {
            //Arrange
            provider.given('realizar una consulta de Package')
                .uponReceiving('Un body vacío')
                .withRequest({
                    method: 'GET',
                    path: '/api/Package'
                }).willRespondWith({
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: like(responsePackageList)
            });
            return provider.executeTest(async mockServer => {
                // Act
                nutritionalKitchenService = new NutritionalKitchenService(mockServer.url);
                return nutritionalKitchenService.getPackages().then((response) => {
                    // Assert

                    expect(response).to.be.not.null;
                    expect(response).to.be.a.string;
                    expect(response).to.deep.equal(responsePackageList);
                    expect(response).to.be.an('array');
                    expect(response).to.have.lengthOf(2);
                    const values = response.map((response1) => response1.batchCode);
                    expect(values).to.include('0012');
                });
            });
        });
    });
    describe('Agregar un Package', () => {
        it('retorna un id de Package ya creado', () => {
            //Arrange
            provider.given('crear Package')
                .uponReceiving('datos para crear un Package')
                .withRequest({
                    method: 'POST',
                    path: '/api/Package',
                    headers: {
                        'Accept': 'application/json'
                    },
                    body: crearPackageRequestBody
                }).willRespondWith({
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: like(crearPackageResponse)
            });
            return provider.executeTest(async mockServer => {
                // Act
                nutritionalKitchenService = new NutritionalKitchenService(mockServer.url);
                return nutritionalKitchenService.addPackage(crearPackageRequestBody.id, crearPackageRequestBody.status, crearPackageRequestBody.batchCode, crearPackageRequestBody.preparedRecipeId).then((response) => {
                    //Assert
                    expect(response).to.be.not.null;
                    expect(response).to.be.a.string;
                    expect(response).equal(crearPackageResponse);
                });
            });
        });
    });



});