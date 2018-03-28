# web-crawler
[![Build Status](https://travis-ci.org/brycessorensen/web-crawler.svg?branch=master)](https://travis-ci.org/brycessorensen/web-crawler)

Extract and index relevant information from a specified website

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Requirements

The only requirement of this application is the Node Package Manager. All other dependencies (including the AWS SDK for Node.js) can be installed with:

```
npm install
```

### Basic Configuration

You need to set up your AWS security credentials before the sample code is able to connect to AWS. You can do this by creating a file named "credentials" at ~/.aws/ (C:\Users\USER_NAME.aws\ for Windows users) and saving the following lines in the file:

```
[default]
aws_access_key_id = <your access key id>
aws_secret_access_key = <your secret key>
```

### Running the IMDB Sample

This sample web-crawler connects to Amazon's Elastic Search Service (ES), and indexes the information scraped from the Highest Rated IMDb "Top 1000" Titles list. The script will automatically create the file to upload. All you need to do is run it:

```
node web-crawler/web-crawler.js
```

Then, bulk upload the documents to an Amazon ES Domain by typing the command:

```
curl -XPOST elasticsearch_domain_endpoint/_bulk --data-binary @imdb.json -H 'Content-Type: application/json'
```

Run the following command to search the IMDB domain for the word "spielberg"

```
curl -XGET 'elasticsearch_domain_endpoint/imdb/_search?q=spielberg'
```

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
