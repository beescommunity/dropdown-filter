import React from 'react';

import {properties} from "../js/data.js";
import FilterOptions from "./FilterOptions";
import List from "./List";


class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: properties,
      location: '',
      type: '',
      price: '',
      bedroom: '',
      bathroom: '',
      multiple: false
    }
   
  }
  checked (e){
    this.setState({multiple: e.target.value});
  };

  filterItems(val, typee) {
    switch (typee) {
      case 'location':
        this.setState({location: val});
        break;
      case 'type':
        this.setState({type: val});
        break;
      case 'price': 
        this.setState({price: val});
        break;
      case 'bedroom':
        this.setState({bedroom: val});
        break;
      case 'bathroom':
        this.setState({bathroom: val});
        break;
      default:
        break;
    }
  }

  render(){
    const filteredItems = this.state.data;
    const state = this.state;
    const filterProperties = ["location", "type", "price", "bedroom", "bathroom"];

    filterProperties.forEach( (filterBy) => {
      const filterValue = state[filterBy];
      if (filterValue) {
        filteredItems = filteredItems.filter( (item) => {
         return item[filterBy] === filterValue;
        });
      }
    });
    console.log(filteredItems);

    const locationArray = properties.map( (item) =>{ return item.location });
    const typeArray = properties.map( (item)=> { return item.type });
    const priceArray = properties.map( (item) =>{ return item.price });
    const bedroomArray = properties.map( (item) =>{ return item.bedroom });
    const bathroomArray = properties.map( (item) =>{ return item.bathroom });
    locationArray.unshift("");
    typeArray.unshift("");
    priceArray.unshift("");
    bedroomArray.unshift("");
    bathroomArray.unshift("");

    console.log({filterProperties})

    return (
      <div className="container">
        <FilterOptions 
            data={this.state.data} 
            locationOptions={locationArray} 
            typeOptions={typeArray}
            priceOptions={priceArray}
            bedroomOptions={bedroomArray}
            changeOption={this.filterItems} />
        <div className="filter-form">
          <List data={filteredItems} />
        </div>
      </div>
    )
  }

}

/*const Container = () => {
  return (

      <EstateConsumer>
        {value => {
          console.log(value);

          return (
            <>
            Container
            <SearchPage />
            <List />
            </>
          );
        }}
      </EstateConsumer>
  );
}
*/

export default Container;

