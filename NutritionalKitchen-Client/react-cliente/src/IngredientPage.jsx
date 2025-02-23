import { useEffect } from "react";
import { useState } from "react";
import { NutritionalKitchenService } from "./services/NutritionalKitchenService.js";

const IngredientPage = () => {
    const [ingredientList, setIngredientList] = useState([]);
    useEffect(() => {
        new NutritionalKitchenService().getIngredients().then((response) => {
            setIngredientList(response);
        });
    }, [])

    const getIngredientList = () => {
        getIngredients().then((response) => {
            console.log(response);
            setIngredientList(response);
        }).catch((error) => {
            console.log(error);
        });
    }
    return (<div>
        <h1>Ingredients List</h1>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {ingredientList.map((ingredient) => {
                    return (<tr key={ingredient.id}>
                        <td>{ingredient.id}</td>
                        <td>{ingredient.name}</td>
                    </tr>);
                })}
            </tbody>
        </table>
    </div>);
}

export default IngredientPage;