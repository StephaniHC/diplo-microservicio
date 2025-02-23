import { useState } from "react";
import { NutritionalKitchenService } from "./services/NutritionalKitchenService.js";

const PackageForm = () => {
    const [id, setId] = useState('');
    const [status, setStatus] = useState('');
    const [batchCode, setBatchCode] = useState('');
    const [preparedRecipeId, setPreparedRecipeId] = useState('');
    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log(id, status, batchCode, preparedRecipeId);
        new NutritionalKitchenService().addPackage(id, status, batchCode, preparedRecipeId)
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
                <label>Status</label>
                <input type="text" value={status} onChange={(e) => {
                    setStatus(e.target.value);
                }} />
            </div>
            <div>
                <label>BatchCode</label>
                <input type="text" value={batchCode} onChange={(e) => {
                    setBatchCode(e.target.value);
                }} />
            </div>
            <div>
                <label>PreparedRecipeId</label>
                <input type="text" value={preparedRecipeId} onChange={(e) => {
                    setPreparedRecipeId(e.target.value);
                }} />
            </div>
            <div>
                <button type="submit">Add Package</button>
            </div>
        </form>
    </div>);
}

export default PackageForm;