//************CODE WITHOUT THE STUDENT DETAILS CARD */
import React, { useState, useRef } from 'react';

function ScanScreen() {
  const [rollNumber, setRollNumber] = useState('');
  const inputRef = useRef(null);

  const handleScan = async () => {
    try {
      const response = await fetch(`http://localhost:8000/user/checkin/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          rollNo: rollNumber,
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
    inputRef.current.focus();
    setRollNumber('');
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col items-center bg-gray-200 rounded-lg p-6 shadow-md text-center">
        <h1 className="text-2xl font-semibold mb-4">SCAN ID HERE</h1>
        <div className="mb-4">
          <input
            ref={inputRef}
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
      </div>
    </div>
  );
}

export default ScanScreen;



// ****** CODE WITH STUDENT DETAILS */


// import React, { useState, useRef } from 'react';
// import StudentDetailsCard from './StudentDetails';

// function ScanScreen() {
//   const [rollNumber, setRollNumber] = useState('');
//   const [studentDetails, setStudentDetails] = useState(null);
//   const inputRef = useRef(null);

//   const handleScan = async () => {
//     try {
//       const response = await fetch(`http://localhost:8000/user/users/${rollNumber}/`);
//       const data = await response.json();
//       setStudentDetails(data);
//     } catch (error) {
//       console.error('Error fetching student details:', error);
//       setStudentDetails(null);
//     }
//     inputRef.current.focus();
//     setRollNumber('');
//   };

//   const handleClose = () => {
//     setStudentDetails(null);
//     inputRef.current.focus();
//     setRollNumber('');
//   };

//   const handleAccept = async () => {
//     try {
//       const response = await fetch(`http://localhost:8000/user/checkin/`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           rollNo: studentDetails.rollNo,
//         }),
//       });

//       if (response.ok) {
//         alert('Student accepted');
//         console.log('Student accepted');
//         inputRef.current.focus();
//       } else if (response.status === 403) {
//         alert('Student already checked in');
//         console.error('Error accepting student:', response.status);
//         inputRef.current.focus();
//       }
//       else if (response.status === 422) {
//         alert('Invalid time for check-in');
//         console.error('Error accepting student:', response.status);
//         inputRef.current.focus();
//       }
//       else if (response.status === 404) {
//         alert('Student not found');
//         console.error('Error accepting student:', response.status);
//         inputRef.current.focus();
//       }
//     } catch (error) {
//       console.error('Error accepting student:', error);
//     }
//   };

//   return (
//     <div className="flex flex-col justify-center items-center h-screen">
//       <div className="flex flex-col items-center bg-gray-200 rounded-lg p-6 shadow-md text-center">
//         <h1 className="text-2xl font-semibold mb-4">SCAN ID HERE</h1>
//         <div className="mb-4">
//           <input
//             ref={inputRef}
//             type="text"
//             value={rollNumber}
//             onChange={(e) => setRollNumber(e.target.value)}
//             placeholder="Scan Roll Number"
//             className="border border-gray-400 px-3 py-2 rounded-lg"
//           />
//         </div>
//         <div className="mb-8">
//           <button
//             onClick={handleScan}
//             className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//           >
//             Enter
//           </button>
//         </div>
//       </div>

//       {studentDetails && (
//         <StudentDetailsCard
//           rollNumber={studentDetails.rollNo}
//           name={studentDetails.name}
//           photoUrl={studentDetails.profilePic}
//           onClose={handleClose}
//           onAccept={handleAccept}
//         />
//       )}
//     </div>
//   );
// }

// export default ScanScreen;