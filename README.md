# reddit-simple
Simple Wrapper Over Reddit Public API for node js 

![Logo](http://i63.tinypic.com/2dc91t5.png)

### Get it from npm

`npm i reddit-simple`

[npm](https://www.npmjs.com/package/reddit-simple)

or Clone this repo

## Import

```js
const {RedditWrapper} = require('reddit-simple')
or 
import {RedditWrapper} from 'reddit-simple'
```

## Usage

### Get top post from r/ProgrammerHumor

```js 
RedditWrapper.TopPost('programmerHumor')
```

### Get Random Post from r/freefolk

```js
RedditWrapper.RandomPost('freefolk')
```

### Get List of Subreddits

```js
RedditWrapper.SubReddit()
```

### Spy on Redditor 
```js
RedditWrapper.SpyRedditor('dashuser')
```
