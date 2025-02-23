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
}