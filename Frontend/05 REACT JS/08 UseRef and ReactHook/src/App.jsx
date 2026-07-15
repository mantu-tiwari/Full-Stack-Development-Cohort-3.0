import React, { useState } from "react";
import FormRevision from "./Revision/FormRevision";
import RegisterRevision from "./Revision/RegisterRevision";
import CardRevision from "./Revision/CardRevision";

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [arr, setArr] = useState([]);
  console.log(arr);
  return (
    // <div>
    //   {toggle ? (
    //     <RegisterRevision setArr={setArr} setToggle={setToggle} />
    //   ) : (
    //     // <FormRevision setToggle={setToggle} />
    //     arr.map((e) => {
    //       <CardRevision user={e} />;
    //     })
    //   )}
    // </div>
    <div>
      <RegisterRevision setArr={setArr} setToggle={setToggle} />
      <div>
        {arr.map((e) => {
          <CardRevision user={e} />;
        })}
      </div>
    </div>
  );
};

export default App;
