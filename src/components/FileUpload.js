import React, { useState } from 'react';

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      try {
        const response = await fetch('http://localhost:8000/upload', {  //need to change the api url
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          alert('File uploaded successfully!');
        } else {
          alert('File upload failed. Please try again.');
        }
      } catch (error) {
        console.error('Error uploading file:', error);
        alert('An error occurred while uploading the file.');
      }
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-gray-200 p-8 rounded-lg text-center">
        <h1 className="text-3xl font-semibold mb-4">File Upload</h1>
        <input
          type="file"
          accept=".pdf, .doc, .docx, .csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          onChange={handleFileChange}
          className="border border-gray-400 px-4 py-2 rounded-lg"
        />
        <button
          onClick={handleUpload}
          className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
          disabled={!selectedFile}
        >
          Upload
        </button>
      </div>
    </div>
  );
}

export default FileUpload;

