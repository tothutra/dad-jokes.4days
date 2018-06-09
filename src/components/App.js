import React, { Component } from 'react';
import Header from './Header'
import Search from './Search'
import Hint from './Hint'
import Footer from './Footer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      hintText: 'Hit enter to search',
      loading: false,
      joke: null
    }
  }
  render() {
    return (
      <div>
        <Header {...this.state} />
        <Search {...this.state} />
        <Hint {...this.state} />
        <Footer {...this.state} />
      </div>
    );
  }
}

export default App;
