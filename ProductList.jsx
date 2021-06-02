import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    products: []
  }

  componentDidMount() {
    
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const product = res.data;
        this.setState({ products });
      })
  }

  render() {
    return (
      <ul>
        { this.state.productss.map(product => <li>{product.name}</li>)}
      </ul>
    )
  }
}