import { useState } from "react";
import { NutritionalKitchenService } from "./services/NutritionalKitchenService.js";

const KitchenManagerForm = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [shift, setShift] = useState('');
    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log(id, name, shift);
        new NutritionalKitchenService().addKitchenManager(id, name, shift)
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
                <label>Shift</label>
                <input type="text" value={shift} onChange={(e) => {
                    setShift(e.target.value);
                }} />
            </div>
            <div>
                <button type="submit">Add Kitchen Manager</button>
            </div>
        </form>
    </div>);
}

export default KitchenManagerForm;