//user can upload file


import React, { useState } from 'react';

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // what logic should be added for the file upload?
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-gray-200 p-8 rounded-lg text-center">
        <h1 className="text-3xl font-semibold mb-4">File Upload</h1>
        <input
          type="file"
          accept=".pdf, .doc, .docx"
          onChange={handleFileChange}
          className="border border-gray-400 px-4 py-2 rounded-lg"
        />
        <button
          onClick={handleUpload}
          className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Upload
        </button>
      </div>
    </div>
  );
}

export default FileUpload;
