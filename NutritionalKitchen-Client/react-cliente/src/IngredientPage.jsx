import { useEffect } from "react";
import { useState } from "react";
import { IngredientService } from "./services/IngredientService";

const IngredientPage = () => {
    const [ingredientList, setIngredientList] = useState([]);
    useEffect(() => {
        new IngredientService().getIngredients().then((response) => {
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
        <h1>Ingredients List Page</h1>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Ingredient Name</th>
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