# web-crawler
[![Build Status](https://travis-ci.org/brycessorensen/web-crawler.svg?branch=master)](https://travis-ci.org/brycessorensen/web-crawler) [![NSP Status](https://nodesecurity.io/orgs/web-crawler/projects/83fb104e-43d6-4e7d-afe1-d6137e6c9604/badge)](https://nodesecurity.io/orgs/web-crawler/projects/83fb104e-43d6-4e7d-afe1-d6137e6c9604)


Extract and index relevant information from a specified website

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Requirements

The only requirement of this application is the Node Package Manager. All other dependencies can be installed with:

```
npm install
```

### Basic Configuration

This app uses Webpack which takes modules with dependencies and generates static assets representing those modules. In order for your app to render you will need to first bundle your modules using the following command:

```
npm run build
```

You will also have to create an Amazon Elasticsearch Service endpoint. Your ENDPOINT environment variable must be set before the sample code is able to connect to AWS. You can do this by running this command in the terminal:

```
export ENDPOINT=https://search-domainname-domainid.us-west-1.es.amazonaws.com
```

Ensure that you have set the environment variable correctly (before you initialize the server):

```
echo $ENDPOINT
```

The console should print out the URL you just entered. 

### Running the App

Initalize your server:

```
npm start
```

ElasticSearch Info should output that it is adding a connection to the Amazon ES Endpoint. If it is attempting to add to localhost, see the Basic Configuration notes above.

## Testing

```
npm test
```

## Deployment

Work in Progress.

## Built With

* [Amazon ES](https://aws.amazon.com/elasticsearch-service/) - Fully Managed ElasticSearch Service
* [Jest](https://facebook.github.io/jest/) - JavaScript Testing
* [Node](https://nodejs.org/en/) - Runtime Environment
* [NPM](https://www.npmjs.com/) - Package Manager
* [Puppeteer](https://developers.google.com/web/tools/puppeteer/) - High Level API to Control Headless Chrome
* [React](https://reactjs.org/) - User Interface Library
* [Travis](https://travis-ci.org/) - Continuous Integration
* [Webpack](https://webpack.js.org/) - Module Bundler

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## Versioning

We use [semantic versioning](http://semver.org/). For the versions available, see the [tags on this repository](https://github.com/brycessorensen/web-crawler/tags). 

## Authors

* **Bryce Sorensen** - [Github](https://github.com/brycessorensen)

See also the list of [contributors](https://github.com/brycessorensen/web-crawler/contributors) who participated in this project.

## License

This is free and unencumbered software released into the public domain - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

