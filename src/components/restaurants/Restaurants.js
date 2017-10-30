import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    const restaurants = this.props.store.getState().restaurants.map(restaurant => <Restaurant store={this.props.store} key={restaurant.id} restaurant={restaurant} />)
    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;
