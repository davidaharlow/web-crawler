import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.png';
import './App.css';
import Search from './Components/Search/Search';
import ResultsList from './Components/ResultsList/ResultsList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchable: false,
      results: [],
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleCrawl = this.handleCrawl.bind(this);
  }

  handleSearch(queryString) {
    axios.get('/search', {
      params: {
        query: queryString,
      },
    })
      .then(({ data }) => {
        this.setState({ results: data });
      })
      .catch(error => console.log(error));
  }

  handleCrawl() {
    axios.post('/web-crawler', {
      params: {
        url: 'https://www.imdb.com/search/title?groups=top_1000&sort=user_rating&view=advanced',
        nextSelector: '.lister-page-next',
        listSelector: '.lister-item-content',
        itemDescriptor: 'movie',
        fileName: 'imdb',
        fileType: 'json',
        configuration: {
          title: 'div.lister-item-content > h3 > a',
          description: 'div.lister-item-content > p:nth-child(4)',
          director: 'div.lister-item-content > p:nth-child(5) > a:nth-child(1)',
        },
      },
    })
      .then(() => this.setState({ searchable: true }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Web Crawler</h1>
        </header>
        {this.state.searchable ?
          <div className="App-search">
            <Search handleSearch={this.handleSearch} />
          </div> :
          <input
            type="submit"
            value="Crawl IMDB"
            onClick={this.handleCrawl}
          />
        }
        {
          this.state.results.length > 0 ?
            <div>
              <ResultsList results={this.state.results} />
            </div> : null
        }
      </div>
    );
  }
}

export default App;
