import React from 'react';
;

class FilterOptions extends React.Component {
  
  constructor(props) {
    super(props);
    this.changeOption = this.changeOption.bind(this);
  }

  changeOption(typee, e){
    const val = e.target.value;
    this.props.changeOption(val, typee);
   
  };
  
  

  

  render(){
    
    console.log(this.props.changeOption);
    return (
      <div className="filter-options">
        <div className="filter-option">
          <label>location</label>
          <select id="location" value={this.props.location} onChange={this.changeOption.bind(this, 'location')}>
          {this.props.locationOptions.map( (option) => {
            return ( <option key={option} value={option}>{option}</option> )
          })}
          </select>
          <label>type</label>
          <select id="type" value={this.props.type} onChange={this.changeOption.bind(this, 'type')}>
          {this.props.typeOptions.map( (option) => {
            return ( <option key={option} value={option}>{option}</option> )
          })}
          </select>
          <label>price</label>
          <select id="price" value={this.props.price} onChange={this.changeOption.bind(this, 'price')}>
          {this.props.priceOptions.map( (option) => {
            return ( <option key={option} value={option}>{option}</option> )
          })}
          </select>
          <label>bedroom</label>
          <select id="bedroom" value={this.props.bedroom} onChange={this.changeOption.bind(this, 'bedroom')}>
          {this.props.bedroomOptions.map( (option) => {
            return ( <option key={option} value={option}>{option}</option> )
          })}
          </select>
        </div>
      </div>
    );
  }
}

/*
const FilterOptions = () => {
  const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
  };
  return (
    <>
      <h1> hello </h1>
    </>
  )
}
*/
export default FilterOptions;
