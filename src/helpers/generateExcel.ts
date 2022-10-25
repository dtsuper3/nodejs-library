import XLSX from "xlsx";
import path from "path";
import { OUT_FILE_PATH } from "../constants";

function generateExcel(name: string, jsonData: any, h: any | undefined) {
    const workBook = XLSX.utils.book_new();
    for (const item of jsonData) {
        const workSheet = XLSX.utils.json_to_sheet(item.data);
        XLSX.utils.book_append_sheet(workBook, workSheet, item.name);
    }

    // Generate buffer
    // return XLSX.write(workBook, {
    //     bookType: "xlsx", type: "buffer",
    // });

    const filepath = path.join(OUT_FILE_PATH, "out.xlsx");
    XLSX.writeFile(workBook, filepath, {
        type: "file",
        bookType: "xlsx"
    });

    // Binary string
    // XLSX.write(workBook, {
    //     bookType: "xlsx", type: "binary",
    // });

    // XLSX.writeFile(workBook, "studentsData.xlsx");
}

export {
    generateExcel,
};
