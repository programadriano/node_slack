const { WebClient } = require('@slack/web-api');
const config = require('./config')

const token = config.token;
const channel = config.channel;

const web = new WebClient(token);

(async () => {
    try {
        const result = await web.chat.postMessage({
            channel: channel,
            text: 'sss!'
        });
        console.log(`Sent message to ${result.channel}`);
    } catch (error) {
        console.error(error);
    }
})();