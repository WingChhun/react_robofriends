import React from "react";

class AddFishForm extends React.Component {
  //Create references to the input values
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  //Function to handle updating state with new fish
  createFish = event => {
    //stop form from submitting
    event.preventDefault();
    //create fish object
    const fish = {
      name: this.nameRef.value.value,
      price: parseFloat(this.priceRef.value.value),
      status: this.statusRef.value.value,
      desc: this.descRef.value.value,
      iamge: this.imageRef.value.value
    };
    console.log("Create fish object", fish);
    //Call this.addFish from parent
    this.props.addFish(fish);
    //Refresyh the form, reset fields
    event.currentTarget.reset();
  };
  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <input
          name="price"
          ref={this.priceRef}
          type="text"
          placeholder="Price"
        />
        <select
          name="status"
          ref={this.statusRef}
          type="text"
          placeholder="Status"
        >
          <option value="available">Fresh</option>
          <option value="unavailable">Sold Out</option>
        </select>

        <textarea
          name="desc"
          ref={this.descRef}
          type="text"
          placeholder="Desc"
        />
        <input
          name=" image"
          ref={this.imageRef}
          type="text"
          placeholder="Image"
        />
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
