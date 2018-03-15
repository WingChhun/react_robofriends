import React from "react";
import { getFunName } from "../helpers";
//import { format } from "path";
class StorePicker extends React.Component {
  //grab myInput without using DOM manipulation
  myInput = React.createRef();
  goToStore = event => {
    //1. Prevent page from reloading
    event.preventDefault();

    //2. get text from input
    const storeName = this.myInput.value.value;

    //3. change page to /store/whatever-entered
    this.props.history.push(`/store/${storeName}`);
  };

  //RENDER
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        {/*Form component*/}
        <h2>Please enter a store</h2>
        <input
          type="text"
          ref={this.myInput}
          placeholder="Store name"
          defaultValue={getFunName()}
          required
        />
        <button type="submit">Visit Store </button>
      </form>
    );
  }
}
export default StorePicker;
