// //need to integrate with api endpoint to fetch the student details 

// import React, { useState, useEffect } from 'react';
// import StudentDetailsCard from './StudentDetails';

// const ScanScreen = () => {
//   const [isScanning, setIsScanning] = useState(true);
//   const [scannedRollNumber, setScannedRollNumber] = useState('');
//   const [showStudentDetails, setShowStudentDetails] = useState(false);

//   useEffect(() => {
//     // Simulate scanning process
//     const scanningTimeout = setTimeout(() => {
//       setIsScanning(false);
//     }, 3000);

//     return () => clearTimeout(scanningTimeout);
//   }, []);

//   const handleInputChange = (event) => {
//     setScannedRollNumber(event.target.value);
//   };

//   const handleEnterClick = () => {
//     setShowStudentDetails(true);
//   };

//   const handleCloseClick = () => {
//     setShowStudentDetails(false);
//   };

//   return (
//     <div className="flex h-screen justify-center items-center mt-0">
//       <section className="text-gray-600 body-font">
//         <div className="container mx-auto px-5 py-24 md:flex-row flex-col items-center text-center">
//           <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
//             {isScanning ? 'Scanning...' : 'Scan ID'}
//           </h1>
//           <div className="mt-4">
//             <input
//               type="text"
//               placeholder="Enter Roll Number"
//               className="border px-4 py-2 mr-2"
//               value={scannedRollNumber}
//               onChange={handleInputChange}
//             />
//             <button
//               className="bg-blue-500 text-white px-4 py-2 rounded"
//               onClick={handleEnterClick}
//             >
//               Enter
//             </button>
//           </div>
//         </div>
//       </section>
//       {showStudentDetails && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//             <StudentDetailsCard
//               rollNumber={scannedRollNumber}
//               onAccept={() => {
//                 // Handle Accept button click
//               }}
//               onClose={handleCloseClick} // Close the card when the Close button is clicked
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ScanScreen;



import React, { useState } from 'react';
import StudentDetailsCard from './StudentDetails';

function ScanScreen() {
  const [rollNumber, setRollNumber] = useState('');
  const [studentDetails, setStudentDetails] = useState(null);

  //function to fetch student details 
  const handleScan = async () => {
    try {
      // Replace 'backendEndpoint' with the actual backend API endpoint
      const response = await fetch(`http://localhost:8000/user/users/${rollNumber}/`);
      const data = await response.json();
      setStudentDetails(data);
    } catch (error) {
      console.error('Error fetching student details:', error);
      setStudentDetails(null);
    }
  };
//closing the student details card
  const handleClose = () => {
    setStudentDetails(null);
  };
//after clicking accept on the student details card the data should be entered in the database, use the respective api url
  const handleAccept = async () => {
    try {
      const response = await fetch(`http://localhost:8000/user/checkin/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          rollNo: rollNumber,
          // name: studentDetails.name,
          // hall: studentDetails.hall,
          // entryTime: new Date().toISOString(), // or use a date library
        }),
      });
  
      if (response.ok) {
        alert('Student accepted');
        console.log('Student accepted');
      } else if (response.status === 403) {
        alert('Student already checked in');
        console.error('Error accepting student:', response.status);
      }
      else if (response.status === 422) {
        alert('Invalid time for check-in');
        console.error('Error accepting student:', response.status);
      }
      else if (response.status === 404) {
        alert('Student not found');
        console.error('Error accepting student:', response.status);
      }
    } catch (error) {
      console.error('Error accepting student:', error);
    }
  };
  

  return (
    <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-2xl font-semibold mb-4">SCAN ID HERE</h1>
      <div className="mb-4">
        <input
          type="text"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
          placeholder="Scan Roll Number"
          className="border border-gray-400 px-3 py-2 rounded-lg"
        />
      </div>
      <div className="mb-8">
        <button
          onClick={handleScan}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Enter
        </button>
      </div>
      {studentDetails && (
        <StudentDetailsCard
          rollNumber={rollNumber}
          name={studentDetails.name}
          photoUrl={studentDetails.profilePic}
          onClose={handleClose}
          onAccept={handleAccept}
        />
      )}
    </div>
  );
}

export default ScanScreen;





