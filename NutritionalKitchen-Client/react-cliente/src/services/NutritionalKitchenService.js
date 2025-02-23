import axios from "axios"
export class NutritionalKitchenService {
    constructor(baseUrl) {
        this.endpoint = baseUrl;
        if (!this.endpoint) {
            this.endpoint = 'http://localhost:5075';
        }
    }
    getIngredients = () => {
        return new Promise((resolve, reject) => {
            axios.get(this.endpoint + "/api/Ingredients")
                .then((response) => {
                    resolve(response.data);
                }).catch((error) => {
                    reject(error);
                });
        });
    }
    addIngredient(id, name) {
        console.log('ingredients params', {
            id, name
        });
        return new Promise((resolve, reject) => {
            axios.post(this.endpoint + "/api/Ingredients", {
                id: id,
                name: name
            }, {
                headers: {
                    'Accept': 'application/json'
                }
            }).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    getKitchenManagers = () => {
        return new Promise((resolve, reject) => {
            axios.get(this.endpoint + "/api/KitchenManager")
                .then((response) => {
                    resolve(response.data);
                }).catch((error) => {
                reject(error);
            });
        });
    }
    addKitchenManager(id, name, shift) {
        console.log('kitchen manager params', {
            id, name, shift
        });
        return new Promise((resolve, reject) => {
            axios.post(this.endpoint + "/api/KitchenManager", {
                id: id,
                name: name,
                shift: shift
            }, {
                headers: {
                    'Accept': 'application/json'
                }
            }).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    getRecipes = () => {
        return new Promise((resolve, reject) => {
            axios.get(this.endpoint + "/api/Recipe")
                .then((response) => {
                    resolve(response.data);
                }).catch((error) => {
                reject(error);
            });
        });
    }
    addRecipe(id, name, preparationTime) {
        console.log('recipe params', {
            id, name, preparationTime
        });
        return new Promise((resolve, reject) => {
            axios.post(this.endpoint + "/api/Recipe", {
                id: id,
                name: name,
                preparationTime: preparationTime
            }, {
                headers: {
                    'Accept': 'application/json'
                }
            }).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    getPackages = () => {
        return new Promise((resolve, reject) => {
            axios.get(this.endpoint + "/api/Package")
                .then((response) => {
                    resolve(response.data);
                }).catch((error) => {
                reject(error);
            });
        });
    }
    addPackage(id, status, preparedRecipeId, batchCode) {
        console.log('package params', {
            id, status, preparedRecipeId, batchCode
        });
        return new Promise((resolve, reject) => {
            axios.post(this.endpoint + "/api/Package", {
                id: id,
                status: status,
                preparedRecipeId: preparedRecipeId,
                batchCode: batchCode
            }, {
                headers: {
                    'Accept': 'application/json'
                }
            }).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    getLabels = () => {
        return new Promise((resolve, reject) => {
            axios.get(this.endpoint + "/api/Label")
                .then((response) => {
                    resolve(response.data);
                }).catch((error) => {
                reject(error);
            });
        });
    }

}