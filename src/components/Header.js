import React from 'react';
import { connect } from 'react-redux';

const Header = props => {
  console.log("props in Header.js", props)
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Starting Price: ${props.car.price}</p>
    </>
  );
};

const mapStateToProps = state => {
  console.log("State in mapStateToProps in Header.js", state)
}

export default connect(mapStateToProps, {})(Header);
