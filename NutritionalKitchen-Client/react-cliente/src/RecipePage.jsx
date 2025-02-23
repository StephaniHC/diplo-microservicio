import { useEffect } from "react";
import { useState } from "react";
import { NutritionalKitchenService } from "./services/NutritionalKitchenService";

const RecipePage = () => {
    const [recipeList, setRecipeList] = useState([]);
    useEffect(() => {
        new NutritionalKitchenService().getRecipes().then((response) => {
            setRecipeList(response);
        });
    }, [])

    const getRecipeList = () => {
        getRecipes().then((response) => {
            console.log(response);
            setRecipeList(response);
        }).catch((error) => {
            console.log(error);
        });
    }
    return (<div>
        <h1>Recipe List</h1>
        <table>
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Preparation</th>
            </tr>
            </thead>
            <tbody>
            {recipeList.map((recipe) => {
                return (<tr key={recipe.id}>
                    <td>{recipe.id}</td>
                    <td>{recipe.name}</td>
                    <td>{recipe.preparationTime}</td>
                </tr>);
            })}
            </tbody>
        </table>
    </div>);
}

export default RecipePage;