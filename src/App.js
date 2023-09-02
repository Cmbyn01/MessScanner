// import React from 'react';
// import './App.css';
// import Header from './components/Header';
// import Home from './modules/Home/Home';
// import Footer from './components/Footer';
// import { Routes, Route } from 'react-router-dom';
// import ScanScreen from './components/ScanScreen';
// function App() {
//   return (
//     <div>
//       <Header />
      
//       <div className="custom-margin">
//       <Routes>
//         <Route path="/" element={<Home/>} />
//         <Route path='/scan-screen' element={<ScanScreen />} />
//       </Routes>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './modules/Home/Home';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import ScanScreen from './components/ScanScreen';
import Login from './components/Login';
import Blog from './components/Blog';
import FileUpload from './components/FileUpload';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutWithHeaderAndFooter component={<Blog />} />} />
        <Route path='/scan-screen' element={<LayoutWithHeaderAndFooter component={<ScanScreen />} />} />
        <Route path="/file-upload" element={<LayoutWithHeaderAndFooter component={<FileUpload />} />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

// A component to wrap content with Header and Footer
const LayoutWithHeaderAndFooter = ({ component }) => (
  <div>
    <Header />
    <div className="custom-margin">
      {component}
    </div>
    <Footer />
  </div>
);

export default App;
