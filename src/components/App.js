import React, { Component } from 'react';
import Header from './Header'
import SearchResult from './SearchResult'
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
  handleChange = (e) => {
    const {value} = e.target
    this.setState((prevState) => ({
      ...prevState,
      searchTerm: value,
      hintText: value.length > 2? `Hit enter to search ${value}` : ''
    }))
  }

  render() {
    return (
      <div>
        <Header {...this.state} />
        <input
          className=""
          placeholder="About what, sun?"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
        <SearchResult {...this.state} {...this.actions}/>
        <Hint {...this.state} />
        <Footer {...this.state} />
      </div>
    );
  }
}

export default App;
