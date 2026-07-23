import React from 'react'

const Navbar = ({setToggle}) => {
  return (
    <div className='flex justify-between items-center bg-amber-300 rounded-lg p-4'>
      <div className="w-15">
        <img className='w-full' src="https://img.icons8.com/?size=100&id=108296&format=png&color=000000" alt="user logo" />
      </div>
      <div className="items-center gap-4 font-bold text-lg cursor-pointer hidden md:flex ">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <button onClick={() => {
          setToggle((prev) => !prev)
      }} className='bg-blue-500 hover:bg-blue-600 px-4 py-2 mr-4 text-lg font-bold text-white rounded-xl '>Create User</button>
    </div>
  )
}

export default Navbar


// //  Ai generated ui
// import React, { useState } from 'react';
// const Navbar = ({ setToggle }) => {
//   // Local state to open/close mobile menu drawer
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <nav className='relative bg-amber-300 rounded-lg p-4 shadow-sm select-none'>
//       {/* Main Bar Container */}
//       <div className='flex justify-between items-center max-w-7xl mx-auto'>
//         {/* 1. LOGO */}
//         <div className="w-12 h-12 flex items-center justify-center">
//           <img 
//             className='w-full h-auto object-contain' 
//             src="https://img.icons8.com/?size=100&id=108296&format=png&color=000000" 
//             alt="user logo" 
//           />
//         </div>
//         {/* 2. DESKTOP LINKS (Hidden on mobile, flex on desktop) */}
//         <div className="hidden md:flex items-center gap-6 font-bold text-lg text-gray-800">
//           <p className="cursor-pointer hover:text-amber-800 transition-colors">Home</p>
//           <p className="cursor-pointer hover:text-amber-800 transition-colors">About</p>
//           <p className="cursor-pointer hover:text-amber-800 transition-colors">Contact</p>
//         </div>
//         {/* 3. RIGHT SIDE CONTROLS */}
//         <div className='flex items-center gap-3'>
//           {/* Action Button */}
//           <button 
//             onClick={() => setToggle((prev) => !prev)} 
//             className='bg-blue-500 hover:bg-blue-600 active:scale-95 transition-all px-4 py-2 text-md md:text-lg font-bold text-white rounded-xl shadow-md cursor-pointer'
//           >
//             Create User
//           </button>
//           {/* Mobile Hamburger Toggle (Only visible on mobile screens) */}
//           <button 
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden flex flex-col justify-center items-center gap-1 w-10 h-10 bg-amber-400 rounded-lg cursor-pointer"
//           >
//             <span className={`h-0.5 w-5 bg-black transition-transform ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
//             <span className={`h-0.5 w-5 bg-black transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
//             <span className={`h-0.5 w-5 bg-black transition-transform ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
//           </button>
//         </div>
//       </div>
//       {/* 4. MOBILE DROPDOWN DRAWER */}
//       {isOpen && (
//         <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-amber-200 rounded-lg p-4 flex flex-col gap-4 font-bold text-center text-gray-800 shadow-lg z-50 animate-fadeIn">
//           <p onClick={() => setIsOpen(false)} className="py-2 hover:bg-amber-300 rounded-md cursor-pointer">Home</p>
//           <p onClick={() => setIsOpen(false)} className="py-2 hover:bg-amber-300 rounded-md cursor-pointer">About</p>
//           <p onClick={() => setIsOpen(false)} className="py-2 hover:bg-amber-300 rounded-md cursor-pointer">Contact</p>
//         </div>
//       )}
//     </nav>
//   );
// };
// export default Navbar;
