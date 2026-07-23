import React from "react";

const UserCard = ({ user, setToggle, del, idx, setUpadtedData }) => {
  // console.log(user);
  return (
    <div className="bg-white p-4 gap-2 w-60 rounded-xl flex flex-col ">
      <div className="h-40 ">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={user.image}
          alt="display img"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="font-bold">Name: {user.name} </h1>
        <p className="text-sm">Email: {user.email}</p>
        <p className="text-sm">Contact: {user.mobile}</p>
      </div>
      <div className="flex gap-2 ">
        <button
          onClick={() => {
            setUpadtedData(user)
            setToggle((prev) => !prev);
          }}
          className=" cursor-pointer flex-1 bg-amber-400 hover:bg-amber-500 transition-colors font-bold rounded-lg py-2 text-center text-sm "
        >
          Update
        </button>
        <button onClick={() => {
            del(idx)
        }} className=" cursor-pointer flex-1 bg-red-500 hover:bg-red-600 transition-colors font-bold text-white rounded-lg py-2 text-center text-sm ">
          Delete
        </button>
      </div>
    </div>
  );
};

// // THis is ai generated ui desing
// const UserCard = ({ user }) => {
//   return (
//     // Cleaned up classes: w-72 sets a uniform width, flex-1 keeps them equal height if needed
//     <div className='bg-white p-5 rounded-xl flex flex-col justify-between gap-4 w-72 shadow-md'>

//       {/* Image Container: Center and square aspect ratio */}
//       <div className='self-center w-full h-40 bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center'>
//         <img className='w-full h-full object-cover' src={user.image} alt="display img" />
//       </div>

//       {/* Content Area: Break long emails cleanly */}
//       <div className="flex flex-col gap-1 text-gray-800">
//         <h1 className="font-bold text-lg truncate">{user.name}</h1>
//         <p className="text-sm text-gray-600 break-all"><span className="font-medium text-gray-700">Email:</span> {user.email}</p>
//         <p className="text-sm text-gray-600"><span className="font-medium text-gray-700">Contact:</span> {user.mobile}</p>
//       </div>

//       {/* Buttons Area: Even widths for both buttons */}
//       <div className='flex gap-3 mt-2'>
//         <button className='cursor-pointer flex-1 bg-amber-400 hover:bg-amber-500 transition-colors font-bold rounded-lg py-2 text-center text-sm'>Update</button>
//         <button className='cursor-pointer flex-1 bg-red-500 hover:bg-red-600 transition-colors font-bold text-white rounded-lg py-2 text-center text-sm'>Delete</button>
//       </div>
//     </div>
//   )
// }

export default UserCard;
