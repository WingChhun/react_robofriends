import React from "react"; //import react
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes"; //sample fishes
import Fish from "./Fish";
//import firebase
import base from "../base";
class App extends React.Component {
  constructor() {
    super(); //inherit React properties
    this.state = {
      fishes: {},
      order: {}
    };
  }
  //LIFECYCLE sync state to firebase
  componentDidMount() {
    console.log("mounting component", " connecting to firebase");
    const {params} = this.props.match;
    //reinstate our local storage
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      // if local storage value, reinstate it, pass in localStorage ref use JSON.parse
      // that takes JSON to convert to object
      this.setState({
        order: JSON.parse(localStorageRef)
      });
    }
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }
  //take care of order local storage
  componentDidUpdate()
  {
    console.log(this.state.order);
    console.log("Updated");
    //set localStorage, pass in firebase StoreId and Stringify the store order
    localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));

  }
  componentWillUnmount() {
    //When user leaves page, remove firebase reference
    console.log("unmounted component");
    base.removeBinding(this.ref);
  }

  //Update fishes in state
  addFish = fish => {
    console.log("Adding a fish...");
    //1. take a copy of the existing state
    const fishes = {
      ...this.state.fishes
    };
    //2. Add our new fish to fishes variable
    fishes[`fish${Date.now()}`] = fish;
    //3. Set the new fishes object to state
    this.setState({fishes: fishes});
    //Refresh the form
  };
  //Create sample fishes
  loadSampleFishes = () => {
    console.log("Loading sample fishes");
    this.setState({fishes: sampleFishes});
  };

  addToOrder = key => {
    //1. take a copy of state
    const order = {
      ...this.state.order
    };
    //2. Either add to the order or update the number in our order
    order[key] = order[key] + 1 || 1;
    //3. Call setState to update our state object
    this.setState({order: order});
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="fishes">
            {Object
              .keys(this.state.fishes)
              .map(key => (<Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}/>))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order}/>
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
      </div>
    );
  }
}
export default App;
