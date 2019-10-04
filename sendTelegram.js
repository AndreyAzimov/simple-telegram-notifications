// where package.json is located: `npm install node-fetch`
// or `npm install -g node-fetch` to install globally
const fetch = require("node-fetch");
const sendTelegram = async (message) => {
	const token = "YOUR_BOT_TOKEN";
	const data = Object.entries({
	    	text: message,
	    	chat_id: "YOUR_CHAT_ID",
	    	parse_mode: "html"
	    })
	    .map(entry => entry[0] + "=" + entry[1])
	    .join("&");

	const url = `https://api.telegram.org/bot${token}/sendMessage?${data}`;
	console.log(`url: ${url}`);
	const response = await fetch(url);
	const json = await response.json();
	console.log(json);
	return json;	
};

sendTelegram("hi!");
