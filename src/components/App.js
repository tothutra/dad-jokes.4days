import React, { Component } from 'react';
import Header from './Header'
import SearchResult from './SearchResult'
import Hint from './Hint'
import Footer from './Footer'

const randomJoke = array => {
  return array[Math.floor(Math.random()*array.length)]
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      hintText: 'Hit enter to search',
      loading: false,
      result: null
    }
  }

  searchJoke = async term => {
    this.setState({loading: true})
    try {
      const response = await fetch(`https://icanhazdadjoke.com/search?term=${term}`, {
        method: 'GET',
        headers: new Headers({
          'Accept': 'application/json'
        }),
      });
      const {results} = await response.json()
      if (results.length === 0) {
        throw `Nothing found for ${term}`
      } else {
        this.setState((prevState) => ({
          ...prevState,
          loading: false,
          result: randomJoke(results).joke
        }))
      }
    } catch (error) {
      this.setState((prevState) => ({
        ...prevState,
        loading: false,
        hintText: error
      }))
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
  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.searchJoke(this.state.searchTerm)
    }
  }

  render() {
    const {searchTerm} = this.state
    return (
      <div>
        <Header {...this.state} />
        <input
          className=""
          placeholder="About what, sun?"
          value={searchTerm}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <SearchResult {...this.state} {...this.actions}/>
        <Hint {...this.state} />
        <Footer {...this.state} />
      </div>
    );
  }
}

export default App;
