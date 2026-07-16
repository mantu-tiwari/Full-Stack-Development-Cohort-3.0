// import React, { useState } from "react";
// import FormRevision from "./Revision/FormRevision";
// import RegisterRevision from "./Revision/RegisterRevision";
// import CardRevision from "./Revision/CardRevision";
// const App = () => {
//   const [toggle, setToggle] = useState(true);
//   const [arr, setArr] = useState([]);
//   console.log(arr);
//   return (
//     // <div>
//     //   {toggle ? (
//     //     <RegisterRevision setArr={setArr} setToggle={setToggle} />
//     //   ) : (
//     //     // <FormRevision setToggle={setToggle} />
//     //     arr.map((e) => {
//     //       <CardRevision user={e} />;
//     //     })
//     //   )}
//     // </div>
//     <div>
//       <RegisterRevision setArr={setArr} setToggle={setToggle} />
//       <div>
//         {arr.map((e) => {
//           <CardRevision user={e} />;
//         })}
//       </div>
//     </div>
//   );
// };
// export default App;

import React, { useRef, useState } from "react";
import Form from "./components/Form";

const App = () => {
  console.log("app rendering");
    const inpRef = useRef();
    console.log(inpRef);

  return (
    <div className="bg-gray-200 min-h-screen p-4">
      <h1 className="pb-2">Hey.. This is Form</h1>
      {/* <Form/> */}

      <input
      name="name"
        ref={inpRef}
        type="text"
        placeholder="name"
      />
      <button
        onClick={() => {
        //   console.log(inpRef);        
          console.log(inpRef.current.value);  
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default App;
