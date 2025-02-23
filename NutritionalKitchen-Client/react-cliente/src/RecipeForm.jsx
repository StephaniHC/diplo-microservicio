import { useState } from "react";
import { NutritionalKitchenService } from "./services/NutritionalKitchenService.js";

const RecipeForm = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [preparationTime, setPreparationTime] = useState('');
    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log(id, name, preparationTime);
        new NutritionalKitchenService().addRecipe(id, name, preparationTime)
            .then((response) => {
                console.log(response);
            });
    }
    return (<div>
        <form onSubmit={onFormSubmit}>
            <div>
                <label>Id</label>
                <input type="text" value={id} onChange={(e) => {
                    setId(e.target.value);
                }} />
            </div>
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => {
                    setName(e.target.value);
                }} />
            </div>
            <div>
                <label>Preparation</label>
                <input type="text" value={preparationTime} onChange={(e) => {
                    setPreparationTime(e.target.value);
                }} />
            </div>
            <div>
                <button type="submit">Add Recipe</button>
            </div>
        </form>
    </div>);
}

export default RecipeForm;