import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style";
import { IUseExportToExcel } from "./types";

const useExportExcel = () => {
  const FILE_TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const FILE_EXTENSION = ".xlsx";

  const exportToExcel = (props: IUseExportToExcel) => {
    const { fileName, data } = props;
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const excelData = new Blob([excelBuffer], { type: FILE_TYPE });

    FileSaver.saveAs(excelData, fileName + FILE_EXTENSION);
  };

  return { exportToExcel };
};

export default useExportExcel;
