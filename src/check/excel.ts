import { generateExcel } from "../helpers/generateExcel";

const json = [
    {
        name: "User Info",
        data: [
            { Name: "Deepak", Age: 26, SN: 1 },
            { Name: "Arun", Age: 40, SN: 2 }
        ]
    },
]


const header = [
    "SN",
    "Name",
    "Age"
];

generateExcel("test", json, header);