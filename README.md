# web-crawler
[![Build Status](https://travis-ci.org/brycessorensen/web-crawler.svg?branch=master)](https://travis-ci.org/brycessorensen/web-crawler)

Extract and index relevant information from a specified website

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Requirements

The only requirement of this application is the Node Package Manager. All other dependencies can be installed with:

```
npm install
```

### Basic Configuration

You will have to create your own Amazon Elasticsearch Service endpoint or use the one provided to you. Your ENDPOINT environment variable must be set before the sample code is able to connect to AWS. You can do this by running this command in the terminal:

```
export ENDPOINT=https://search-domainname-domainid.us-west-1.es.amazonaws.com
```

Ensure that you have set the environment variable correctly (before you initialize the server):

```
echo $ENDPOINT
```

The console should print out the URL you just entered. 

### Running the IMDB Sample

Initalize your server:

```
node server/index.js
```

ElasticSearch Info should output that it is adding a connection to the Amazon ES Endpoint. If it is attempting to add to localhost, see the Basic Configuration notes above.

Run the code in your browser using the following command: 

```
npm start
```

Click the crawl button.

The web-crawler will connect to Amazon's Elastic Search Service (ES), and index the information scraped from the Highest Rated IMDB "Top 1000" Titles list. The script will automatically create and upload the file to AWS. 

It should take less than a minute to scrape the data and upload it to Amazon. All you need to do is search it:

Enter a query into the search bar when it appears.

## Testing

```
npm test
```

## Deployment

Work in Progress.

## Built With

* [Node](https://nodejs.org/en/) - Runtime Environment
* [NPM](https://www.npmjs.com/) - Package Manager
* [React](https://reactjs.org/) - User Interface Library
* [Travis](https://travis-ci.org/) - Continuous Integration
* [Puppeteer](https://developers.google.com/web/tools/puppeteer/) - High Level API to Control Headless Chrome
* [Amazon ES](https://aws.amazon.com/elasticsearch-service/) - Fully Managed ElasticSearch Service

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## Versioning

We use [semantic versioning](http://semver.org/). For the versions available, see the [tags on this repository](https://github.com/brycessorensen/web-crawler/tags). 

## Authors

* **Bryce Sorensen** - [Github](https://github.com/brycessorensen)

See also the list of [contributors](https://github.com/brycessorensen/web-crawler/contributors) who participated in this project.

## License

This is free and unencumbered software released into the public domain - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments and Useful Sites

* Bootstrapping a React app [Create React App](https://github.com/facebook/create-react-app)
* ISSUE_TEMPLATE.md [Template](https://github.com/atom/atom/blob/master/ISSUE_TEMPLATE.md)
* CONTRIBUTING.md [Template](https://github.com/atom/atom/blob/master/CONTRIBUTING.md#reporting-bugs)
* README.md [Template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
* PULL_REQUEST_TEMPLATE.md [Template](https://github.com/atom/atom/edit/master/PULL_REQUEST_TEMPLATE.md)
