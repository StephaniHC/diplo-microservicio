import { useEffect } from "react";
import { useState } from "react";
import { NutritionalKitchenService } from "./services/NutritionalKitchenService";

const LabelPage = () => {
    const [labelList, setLabelList] = useState([]);
    useEffect(() => {
        new NutritionalKitchenService().getLabels().then((response) => {
            setLabelList(response);
        });
    }, [])

    const getLabelList = () => {
        getLabels().then((response) => {
            console.log(response);
            setLabelList(response);
        }).catch((error) => {
            console.log(error);
        });
    }
    return (<div>
        <h1>Label List</h1>
        <table>
            <thead>
            <tr>
                <th>Batch code</th>
                <th>Production date</th>
                <th>Expiration date</th>
                <th>Detail</th>
                <th>Address</th>
                <th>Patient</th>
            </tr>
            </thead>
            <tbody>
            {labelList.map((label) => {
                return (<tr key={label.batchCode}>
                    <td>{label.batchCode}</td>
                    <td>{label.productionDate}</td>
                    <td>{label.expirationDate}</td>
                    <td>{label.detail}</td>
                    <td>{label.address}</td>
                    <td>{label.patientId}</td>
                </tr>);
            })}
            </tbody>
        </table>
    </div>);
}

export default LabelPage;