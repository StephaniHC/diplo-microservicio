import { useEffect } from "react";
import { useState } from "react";
import { NutritionalKitchenService } from "./services/NutritionalKitchenService";

const PackagePage = () => {
    const [packageList, setPackageList] = useState([]);
    useEffect(() => {
        new NutritionalKitchenService().getPackages().then((response) => {
            setPackageList(response);
        });
    }, [])

    const getPackagesList = () => {
        getPackages().then((response) => {
            console.log(response);
            setPackageList(response);
        }).catch((error) => {
            console.log(error);
        });
    }
    return (<div>
        <h1>Package List</h1>
        <table>
            <thead>
            <tr>
                <th>Id</th>
                <th>Status</th>
                <th>Preparation Recipe</th>
                <th>Batch Code</th>
            </tr>
            </thead>
            <tbody>
            {packageList.map((response) => {
                return (<tr key={response.id}>
                    <td>{response.id}</td>
                    <td>{response.status}</td>
                    <td>{response.preparedRecipeId}</td>
                    <td>{response.batchCode}</td>
                </tr>);
            })}
            </tbody>
        </table>
    </div>);
}

export default PackagePage;