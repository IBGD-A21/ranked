import React from "react";
import * as XLSX from "xlsx";
import { AddMembers } from "../../../models";
import { Box, IconButton, Typography } from "@mui/material";
import { Upload } from "@mui/icons-material";
import { ExcelUploaderProps } from "./types";

const ExcelUploader = (props: ExcelUploaderProps) => {
  const { onAddMember } = props;
  const [file, setFile] = React.useState<File>();
  const [data, setData] = React.useState<any>([]);
  const uploaderRef = React.useRef<HTMLInputElement>(null);

  const handleFileChange = ($event: React.ChangeEvent<HTMLInputElement>) => {
    if (!$event.target.files) return;

    const selectedFile = $event.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);

      const reader = new FileReader();
      reader.onload = (fileReader) => {
        const workbook = XLSX.read(fileReader?.target?.result, { type: "binary" });
        const worksheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[worksheetName];
        const parsedData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        setData(parsedData);
      };

      reader.readAsBinaryString(selectedFile);
    }
  };

  React.useEffect(() => {
    const dataWithoutHeader = data.slice(1);
    const member: AddMembers = dataWithoutHeader.map((value: any) => ({
      name: value[0],
      stars: value[1],
    }));

    onAddMember && data.length > 0 && onAddMember(member);
  }, [data]);

  const handleUploadMembers = () => {
    uploaderRef.current?.click();
  };

  return (
    <Box display="flex">
      <IconButton onClick={handleUploadMembers}>
        <Upload />
      </IconButton>
      {file && (
        <Typography fontSize="small" margin="auto">
          {file.name}
        </Typography>
      )}

      <input
        ref={uploaderRef}
        style={{ display: "none" }}
        type="file"
        accept=".xlsx"
        onChange={handleFileChange}
      />
    </Box>
  );
};

export default ExcelUploader;
