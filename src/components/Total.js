import React from 'react';
import { connect } from 'react-redux';


const Total = props => {
  console.log("props in Total.js", props)
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  console.log("State in mapStateToProps in Total.js", state)
}

export default connect(mapStateToProps, {})(Total);