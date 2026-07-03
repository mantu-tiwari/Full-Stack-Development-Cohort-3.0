// Good bye to welcome change logic

import React, { useState } from "react";
const Welcome = () => {
  let [change, setChange] = useState("Welcome");
  console.log(change);
  return (
    <div>
      <h2>Welcome and GoodBye</h2>
      <h3>{change}</h3>
      <button onClick={() => {
          setChange('Good Bye')
      }} >Change</button>
    </div>
  );
};
export default Welcome;

// import React, { useState } from "react";
// const Welcome = () => {
//     // let change = 'do not greet'
//   let [change='do not greet', setChange] = useState();
//   console.log(change);
//   return (
//     <div>
//       <h2>Welcome and GoodBye</h2>
//       <h3>{change}</h3>
//       <button onClick={() => {
//           setChange('Good Bye')
//       }} >Change</button>
//     </div>
//   );
// };
// export default Welcome;
