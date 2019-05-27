const assert = require('assert');
const { TopPost, RandomPost, SubReddit, SpyRedditor } = require('../src');
const { test } = require('./api');

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
      const res = await test('Nepal');
      const all = res.map(i => i.data.ups);
      const max = Math.max(...all);
      await assert.equal(max, Math.max(...all));
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

});