// useState is hook which allow us to maintain state or update state

import { useState } from "react";
function App() {
  //How to change data using function and click event
  // let data = "Tamoor Khokhar";
  // function green(props) {
  //   data = "TAMOOR";
  //   alert(data);
  // }
  // update state using hooks
  const [data, setState] = useState("Anil");
  function updateData() {
    setState("Tamoor");
  }
  return (
    // <div>
    //   <p>How to change data using function and click event</p>
    //   <h1>{data}</h1>
    //   <button onClick={() => green()}>CLICK ME</button>
    // </div>

    //update state
    <div>
      <h1>{data}</h1>
      <button onClick={updateData}>UPDATE ME</button>
    </div>
  );
}
export default App;
