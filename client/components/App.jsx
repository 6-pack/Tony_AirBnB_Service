import React from "react";
import Overview from "./Overview.jsx";

class App extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <h4> Hello from React</h4>
        <Overview/>
      </div>
    )
  }
}
export default App;