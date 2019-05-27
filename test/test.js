const axios = require('axios');
const assert = require('assert');
const { TopPost, RandomPost, SubReddit, SpyRedditor } = require('../src');

describe(`Test Cases for TopPost`, async () => {
  describe('Top Post', async () => {
    it('should include objects', async () => {
      const res = await TopPost('Nepal');
      await assert.ok(typeof res === 'object');
    });
    it('should include Subreddit name', async () => {
      const res = await TopPost('Nepal');
      await assert.equal(res[0].data.subreddit, 'Nepal');
    })
  });


  describe('Logic to get Top Post From Url', async () => {
    it('should get maximum numbers of ups/votes than the rest', async () => {
      const res = await axios.get(`https://www.reddit.com/r/Nepal.json`);
      const all = res.data.data.children.map(i => i.data.ups);
      const query = Math.max(...all);
      const top1 = res.data.data.children.filter(i => i.data.ups == query);
      const title1 = top1[0].data.title;
      const srcc = await TopPost('Nepal');
      const max = srcc[0].data.ups;
      const top2 = srcc.filter(i => i.data.ups == max);
      const title2 = top2[0].data.title;
      await assert.equal(title1, title2);
    })
  })
  describe('Random Post should return an object', async () => {
    it('show sucessfully return random post', async () => {
      const res = await RandomPost('Nepal');
      await assert.ok(res);
    })
    it('Should Include Name of passed Sub-Reddits', async () => {
      const res = await RandomPost('Nepal');
      await assert.equal(res[0].data.subreddit, 'Nepal');
    })
  })
  describe('Subreddit', async () => {
    it('Should shows list of Subreddits', async () => {
      const res = await SubReddit()
      await assert.ok(res.length > 1);
    })
  })
  describe('SpyRedditor', async () => {
    it('Should contain author name if redditor has posted something', async () => {
      const res = await SpyRedditor('dashuser');
      await assert.equal('dashuser', res[0].author);
    })
  })

});