// //need to fetch data through api

// import React from 'react';
// import studentphoto from './images/businessman-character-avatar-isolated/pic.jpg'

// const StudentDetailsCard = ({ rollNumber, onClose, onAccept }) => {
//   const studentData = {
//     name: 'John Doe',
//     hall: 'Hall A',
//     // Add other student details as needed
//   };

//   return (
//     <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//       <img
//         className="mx-auto w-32 h-32 mb-4 rounded-full object-cover"
//         src={studentphoto}
//         alt="Student"
//       />
//       <h2 className="text-2xl font-semibold mb-2">{studentData.name}</h2>
//       <p className="text-gray-600 mb-2">Roll Number: {rollNumber}</p>
//       <p className="text-gray-600 mb-4">Hall: {studentData.hall}</p>

//       <div className="flex justify-between">
//         <button
//           className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//           onClick={onAccept}
//         >
//           Accept
//         </button>
//         <button
//           className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//           onClick={onClose}
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default StudentDetailsCard;


import React from 'react';

const StudentDetailsCard = ({ rollNumber, name, photoUrl, onClose, onAccept }) => {
  const newPhotoUrl = `http://127.0.0.1:8000${photoUrl.replace('/profile_pics', '')}`
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"> 
      <img
        className="mx-auto w-32 h-32 mb-4 rounded-full object-cover"
        src={newPhotoUrl} // Use the provided photo URL from props
        alt="Student"
      />
      <h2 className="text-2xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-600 mb-2">Roll Number: {rollNumber}</p>

      <div className="flex justify-between">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={onAccept}
        >
          Accept
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default StudentDetailsCard;
