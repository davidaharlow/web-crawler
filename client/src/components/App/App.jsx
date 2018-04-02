import React, { Component } from 'react';
import Search from '../Search/Search';
import ItemList from '../ItemList/ItemList';
import getResponseStatus from '../../helpers/status';
import logo from '../../assets/logo.png';
import './App.less';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchable: false,
      loading: false,
      items: [],
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleCrawl = this.handleCrawl.bind(this);
  }

  async handleSearch(queryString) {
    try {
      let response = await fetch(`/search${queryString}`);
      let data = await response.json();
      this.setState({ items: data });
    } catch (error) {
      console.log(error);
    }
  }

  async handleCrawl() {
    this.setState({ loading: true });
    let form = {
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
    };

    try {
      let response = await fetch('web-crawler', {
        method: 'post',
        body: JSON.stringify(form),
        headers: {
          'Content-type': 'application/json',
        },
      });

      await getResponseStatus(response);

      this.setState({
        searchable: true,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { loading, searchable, items } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Web Crawler</h1>
        </header>
        {
          searchable ?
            <div className="App-search">
              <Search handleSearch={this.handleSearch} />
            </div> : loading ? <h3>Loading...</h3> :
              <input
                type="submit"
                value="Crawl IMDB"
                onClick={this.handleCrawl}
              />
        }
        {
          items.length > 0 ?
            <div>
              <ItemList items={items} />
            </div> : null
        }
      </div>
    );
  }
}

export default App;
