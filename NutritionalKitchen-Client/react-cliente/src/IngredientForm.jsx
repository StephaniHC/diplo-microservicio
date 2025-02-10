import { useState } from "react";
import { IngredientService } from "./services/IngredientService";

const IngredientForm = () => {
    const [id, setId] = useState('');
    const [name, setIngredientName] = useState('');
    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log(id, name);
        new IngredientService().addIngredient(id, name)
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
                <label>Ingredient Name</label>
                <input type="text" value={name} onChange={(e) => {
                    setIngredientName(e.target.value);
                }} />
            </div>
            <div>
                <button type="submit">Agregar Ingredient</button>
            </div>
        </form>
    </div>);
}

export default IngredientForm;