# reddit-simple
Simple Wrapper Over Reddit Public API for node js No Overhead No Auth Token 

![Logo](/docs/images/reddit-simple.png)

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


### Get it from npm

`npm i reddit-simple`

[reddit-simple](https://www.npmjs.com/package/reddit-simple)


or Clone this repo

![meme](/docs/images/meme.jpeg)

## Import

```js
const {RedditSimple} = require('reddit-simple')
or 
import {RedditSimple} from 'reddit-simple'
```

## Usage

### Get top post from r/ProgrammerHumor 😀😀

```js 
RedditSimple.TopPost('programmerHumor')
```

### Get Random Post from r/freefolk 🔀🔀

```js
RedditSimple.RandomPost('freefolk')
```

### Get List of Subreddits 📚📚

```js
RedditSimple.SubReddit()
```

### 🕵️‍♀️ 🕵️‍♂️Spy on Redditor 🕵️‍♀️ 🕵️‍♂️
```js
RedditSimple.SpyRedditor('dashuser')
```

## Example Usage
#### I have made Telegram Bot for Reddit using this module if it interest you. Get it from here. [telegram-reddit](https://github.com/ErKiran/telegram-reddit)
#### Discord bot using Reddit Simple [discord-reddit](https://github.com/ErKiran/discord-reddit-js-)

## Do you like that logo. 
Try [Hatchful](https://hatchful.shopify.com) They provides wide range of Logo for absolutely free 🆓🆓
