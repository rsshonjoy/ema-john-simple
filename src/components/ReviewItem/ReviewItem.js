import React from 'react';

const ReviewItem = (props) => {
  const {name} = props.product;
  return (
    <div>
      <h4>{name}</h4>
    </div>
  );
};

export default ReviewItem;