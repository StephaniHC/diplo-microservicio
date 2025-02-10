import axios from "axios"
export class IngredientService {
    constructor(baseUrl) {
        this.endpoint = baseUrl;
        if (!this.endpoint) {
            this.endpoint = 'https://localhost:7203';
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
}