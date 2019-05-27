const axios = require('axios');
module.exports = {
    TopPost: async function TopPost(name) {
        const res = await axios.get(`https://www.reddit.com/r/${name}.json`);
        if (res.length == 0) {
            return false;
        } else {
            const max = Math.max.apply(Math, res.data.data.children.map(i => i.data.ups));
            const tosubmit = res.data.data.children.filter(i => i.data.ups == max);
            return tosubmit;
        }
    },
    RandomPost: async function RandomPost(name) {
        const res = await axios.get(`https://www.reddit.com/r/${name}.json`);
        if (res.length == 0) {
            return false;
        } else {
            let max = [];
            max = res.data.data.children.map(i => i.data.ups);
            const rand = Math.floor(Math.random() * max.length);
            const tosubmit = res.data.data.children.filter(i => i.data.ups == max[rand]);
            return tosubmit;
        }
    },
    SubReddit: async function SubReddit() {
        const res = await axios.get(`https://www.reddit.com/reddits.json`);
        const subs = res.data.data.children.map(i => i.data.display_name);
        const rand = Math.floor(Math.random() * subs.length);
        const recommend = subs[rand];
        return recommend;
    },
    SpyRedditor: async function SpyRedditor(name) {
        const res = await axios.get(`https://www.reddit.com/user/${name}.json`);
        return res.data.data.children.map(i => i.data);
    },
}
