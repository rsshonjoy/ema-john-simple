import React from 'react';

const ReviewItem = (props) => {
  const {name, quantity} = props.product;
  const reviewItemStyle = {
    border: '1px solid lightgrey',
    marginBottom: '5px',
    paddingBottom: '5px',
    marginLeft: '200px'
}
  return (
    <div style={reviewItemStyle} className="review-item">
      <h4>{name}</h4>
      <p>Quantity: {quantity}</p>
      <br/>
      <button className="main-button">Remove</button>
    </div>
  );
};

export default ReviewItem;