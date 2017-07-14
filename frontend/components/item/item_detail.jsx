import React from 'react';

const ItemDetail = ({ item }) => {

  const imgStyle = {"width": "30px"};

  if (!!item) {
    return (
      <ul>
        <li><strong>{ item.name }</strong></li>
        <li><strong>Happiness: </strong>{ item.happiness }</li>
        <li><strong>Price: </strong>{ item.price }</li>
        <li><img src={ item.image_url } style={imgStyle}/></li>
      </ul>
    );
  } else {
    return (
      <ul>
        <h3>Item Loading</h3>
      </ul>
    );
  }

};

export default ItemDetail;
