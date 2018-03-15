import React from "react"; //import react
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes"; //sample fishes
import Fish from "./Fish";
class App extends React.Component {
  constructor() {
    super(); //inherit React properties
    this.state = {
      fishes: {},
      order: {}
    };
  }
  //Update fishes in state
  addFish = fish => {
    console.log("Adding a fish...");
    //1. take a copy of the existing state
    const fishes = { ...this.state.fishes };
    //2. Add our new fish to fishes variable
    fishes[`fish${Date.now()}`] = fish;
    //3. Set the new fishes object to state
    this.setState({ fishes: fishes });
    //Refresh the form
  };
  //Create sample fishes
  loadSampleFishes = () => {
    console.log("Loading sample fishes");
    this.setState({ fishes: sampleFishes });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish key={key} details={this.state.fishes[key]} />
            ))}
          </ul>
        </div>
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}
export default App;
