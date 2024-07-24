import React from "react";

const FileDownload = () => {
  const handleDownload = () => {
    const fileUrl = "./sudipcv.pdf"; // Replace with the actual file URL
    const fileName = "downloaded-file.pdf"; // Replace with the desired file name

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      className="py-4 text-2xl bg-gray-400 rounded-md"
      onClick={handleDownload}
    >
      Download My Cv
    </button>
  );
};

export default FileDownload;
