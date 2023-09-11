//login page functionalities, fetches "user_type" and "token", user is then redirected to their respective pages



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    try {
      const response = await fetch('http://localhost:8000/user/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const { token, user_type: userType } = data;
        localStorage.setItem('token', token);
        localStorage.setItem('userType', userType);

        switch (userType) {
          case 'admin':
            navigate('/admin-dashboard');
            break;
          case 'Mess Worker':
            navigate('/scan-screen');
            break;
          case 'HCM':
            navigate('/hcm-dashboard');
            break;
          default:
            console.error('User is not recognizable');
            setErrorMessage('User is not recognizable');
            break;
        }

        // Calling handleCheckIn function with the retrieved token
        handleCheckIn(token);
      } else {
        setErrorMessage('Invalid credentials');
      }
    } catch (error) {
      console.error('Error during authentication:', error);
      setErrorMessage('Error during authentication');
    }
  };

  const handleCheckIn = async (token) => {
    try {
      const response = await fetch('http://localhost:8000/user/checkin/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`
        },
      });

      if (response.ok) {
        // Handle successful check-in if needed
      } else {
        console.log('Check-in failed');
      }
    } catch (error) {
      console.error('Error during check-in:', error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md p-8 sm:w-full sm:max-w-sm">
        <form className="mt-6 space-y-6" onSubmit={handleSignIn}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
              User ID
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>
        {errorMessage && <div className="text-red-600 mt-4">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default Login;









//login page functionalities, fetches "user_type" and "token", user is then redirected to their respective pages

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const navigate = useNavigate();
//   const [userType, setUserType] = useState('');
//   const [token, setToken] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSignIn = async (event) => {   //handleSignIn function is triggered with onSubmit
//     event.preventDefault();
//     const username = event.target.username.value;
//     const password = event.target.password.value;

//     try {
//       const response = await fetch('http://localhost:8000/user/login/', {    //api url to verify login details
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         const { user_type: userType, token: authToken } = data; // Using 'user_type' instead of 'role'
//         setUserType(userType);
//         setToken(authToken);

//         switch (userType) {
//           case 'admin':
//             navigate('/admin-dashboard');   //will change the url to the required admin page
//             break;
//           case 'user':
//             navigate('/scan-screen');       //the screen which allows mess worker to scan the id card
//             break;
//           case 'guest':
//             navigate('/hcm-dashboard');   //will change the url to the required hcm page
//             break;
//           default:
//             console.error('user is not recognizable');
//             setErrorMessage('User is not recognizable');
//             break;
//         }
//       } else {
//         console.log('Authentication failed');
//       }
//     } catch (error) {
//       console.error('Error during authentication:', error);
//     }
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-100">
//       <div className="bg-white shadow-md p-8 sm:w-full sm:max-w-sm">
        
//         <form className="mt-6 space-y-6" onSubmit={handleSignIn}>
//           <div>
//             <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
//               User ID
//             </label>
//             <div className="mt-2">
//               <input
//                 id="username"
//                 name="username"
//                 type="text"
//                 autoComplete="username"
//                 required
//                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>

//           <div>
//             <div className="flex items-center justify-between">
//               <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
//                 Password
//               </label>
//             </div>
//             <div className="mt-2">
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 autoComplete="current-password"
//                 required
//                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>

//           <div>
//             <button
//               type="submit"
//               // onClick={handleSignIn} // Adding onClick event handler
//               className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             >
//               Sign in
//             </button>

//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;



