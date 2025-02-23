export const responseIngredientList = [
    {
        id: '08dd1c47-05bb-45e2-8fde-8e4815933ff8',
        name: 'ingredient1'
    },
    {
        id: '08dd1c46-7e37-40a0-8493-f11bce9fee7f',
        name: 'ingredient2'
    }
];
export const crearIngredientRequestBody = {
    "id": "3fa85f00-5717-4511-b3fc-2c233f66af00",
    "name": "test ingredient"
};
export const crearIngredientResponse = '"3fa85f00-5717-4511-b3fc-2c233f66af00"';

export const responseKitchenManagerList = [
    {
        id: '08dd1c47-05bb-45e2-8fde-9i4815933ff8',
        name: 'test1',
        shift: 'test1'
    },
    {
        id: '08dd1c46-7e37-40a0-8493-f21bce9fee7f',
        name: 'test2',
        shift: 'test2'
    }
];

export const crearKitchenManagerRequestBody = {
    "id": "3fa85f00-5717-4562-b3fc-2c233f66af11",
    "name": "test integracion",
    "shift": "morning"
};

export const crearKitchenManagerResponse = '"3fa85f00-5717-4562-b3fc-2c233f66af11"';


export const responseRecipeList = [
    {
        id: '08dd1c47-05bb-45e2-83de-9i4815933ff8',
        name: 'test1',
        preparationTime: '25'
    },
    {
        id: '08dd1c46-7e37-40a0-7193-f21bce9fee7f',
        name: 'test2',
        preparationTime: '30'

    }
];

export const crearRecipesRequestBody = {
    "id": "3fa85f11-5717-4562-b3fc-2c233f66af75",
    "name": "test integracion data",
    "preparationTime": "30"
};

export const crearRecipeResponse = '"3fa85f11-5717-4562-b3fc-2c233f66af75"';

export const responseLabelList = [
    {
        batchCode: '08aa1c47-65bb-45e2-8fde-9i4815933ff8',
        productionDate: '2025-02-23T15:07:44',
        expirationDate: '2025-04-23T15:07:44',
        detail: 'test1',
        address: 'test1',
        patientId: '08aa1117-65bb-45e2-8fde-9i4815933ff8'
    },
    {
        batchCode: '08qd1c46-7eq7-40a0-8493-f21bce9fee7f',
        productionDate: '2025-02-23T15:07:44',
        expirationDate: '2025-04-23T15:07:44',
        detail: 'test2',
        address: 'test2',
        patientId: '08aa1x27-65bb-45e2-8fde-9i4815933ff8'
    }
];

export const responsePackageList = [
    {
        id: '08dd1c47-65bb-45e2-8fde-9i4815933ff8',
        status: 'ok',
        preparedRecipeId: '25',
        batchCode: '0014'
    },
    {
        id: '08dd1c46-7eq7-40a0-8493-f21bce9fee7f',
        status: 'ok',
        preparedRecipeId: '30',
        batchCode: '0012'
    }
];

export const crearPackageRequestBody = {
    "id": "1fa15f64-5717-4562-b3fc-2c233f66af75",
    "status": "pending f",
    "batchCode": "3fa85f64-5717-4562-b3fc-2c233f66af75",
    "preparedRecipeId": "3fa85f64-5717-4562-b3fc-2c233f66af75"
};

export const crearPackageResponse = '"1fa15f64-5717-4562-b3fc-2c233f66af75"';

