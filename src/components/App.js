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
      result: null,
      hasResult: false,
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
          result: randomJoke(results).joke,
          hasResult: true
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
  actions = {
    clearSearch: () => {
      this.setState({
        searchTerm: '',
        hintText: 'Hit enter to search',
        loading: false,
        result: null,
        hasResult: false,
      })
      this.textInput.focus()
    }
  }

  render() {
    const {searchTerm} = this.state
    return (
      <div className="page flex flex-column min-vh-100 tc">
        <Header {...this.state} {...this.actions}/>
        <div className="search grid">
          <input
            className="grid-item bg-transparent bn nunito f1 outline-0 tc"
            placeholder="Hit enter or type something!"
            value={searchTerm}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            ref={input => {this.textInput = input}}
          />
          <SearchResult {...this.state} {...this.actions}/>
        </div>
        <Hint {...this.state} />
        <Footer {...this.state} />
      </div>
    );
  }
}

export default App;
