import React from "react";
import DatePicker from "./component/DatePicker";

function onChange(timestamp) {
  console.log(timestamp);
}

function App() {
  return (
    <div>
      <DatePicker onChange={onChange} />
    </div>
  );
}

export default App;
