import { useEffect } from "react";
import { useState } from "react";
import { NutritionalKitchenService } from "./services/NutritionalKitchenService";

const KitchenManagerPage = () => {
    const [kitchenManagerList, setKitchenManagerList] = useState([]);
    useEffect(() => {
        new NutritionalKitchenService().getKitchenManagers().then((response) => {
            setKitchenManagerList(response);
        });
    }, [])

    const getKitchenManagerList = () => {
        getKitchenManager().then((response) => {
            console.log(response);
            setKitchenManagerList(response);
        }).catch((error) => {
            console.log(error);
        });
    }
    return (<div>
        <h1>Kitchen Manager List</h1>
        <table>
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Shift</th>
            </tr>
            </thead>
            <tbody>
            {kitchenManagerList.map((kitchenManager) => {
                return (<tr key={kitchenManager.id}>
                    <td>{kitchenManager.id}</td>
                    <td>{kitchenManager.name}</td>
                    <td>{kitchenManager.shift}</td>
                </tr>);
            })}
            </tbody>
        </table>
    </div>);
}

export default KitchenManagerPage;