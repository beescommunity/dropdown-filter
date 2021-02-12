import React from 'react';

class List extends React.Component {
  
  render(){
    const data = this.props.data;
    return (
      <div className="filter-items">
      {data.map( (item) => {
        return (
          <div className="filter-item">{item.location}</div>
        );
      })}
      </div>
    )
  }
}
/*const List = () => {
  return (
    <>
      <p> merhbaaa </p>
    </>
  )
}
*/
export default List;
