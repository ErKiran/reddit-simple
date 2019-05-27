const axios = require('axios');
module.exports = {
    test: async function test(name) {
        const res = await axios.get(`https://www.reddit.com/r/${name}.json`);
        return res.data.data.children;
    }
}