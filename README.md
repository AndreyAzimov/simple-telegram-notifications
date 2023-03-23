# Simple Telegram Notifications

If you want to receive private notifications from your web app in Telegram  here are simple code snippets on Node.js, Ruby and PHP that will allow you to do it.

You can have 1 bot fot many channel. Once you've create a bot. You can add it to another channel (skip step 1 and start with step 2)

## Pre Requirements

### 1. Create a bot

1. Find `@BotFather` in Telegram
2. `/newbot`
3. Choose a name
4. Choose a username
5. Get token. Should be something like: `992382811:DKyqVhUJsjP-uJivOf2yQi5MuUVvsRyRaZMh`

### 2. Add bot to the group chat
1. Create a group chat or add to existing one
2. Add your bot there

### 3. Get Chat ID
1. Add `@RawDataBot` bot to your group chat
2. Get Chat ID from the JSON That you've got from `@RawDataBot`
3. Remove `@RawDataBot` from your chat 

### 4. Test your bot
1. Add code snippet to your project
2. Change the token and the chat id to yourth
3. Call the function `send_telegram("hi")`


## Node.js

```javascript
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
```

## Ruby

```ruby
require "open-uri"

class Telegram

  def send_telegram(message)
      token = "YOUR_TOKEN"
      
      data = {
        text: message,
        chat_id: "YOUR_CHAT_ID"
      }
      url = "https://api.telegram.org/bot#{token}/sendMessage?#{data.to_param}&parse_mode=html"
      puts "telegram url: " + url
      open(url).read
    end
    
    send_telegram("hi!")
end
```

## PHP

```php
<?php
function send_telegram($message) {
	$token = "YOUR_TOKEN";
	$data = [
		'text' => $message,
		'chat_id' => 'YOUR_CHAT_ID'
	];

	file_get_contents("https://api.telegram.org/bot$token/sendMessage?" . http_build_query($data) . "&parse_mode=html");
}

send_telegram("hi!")
```

## Python

```python
import urllib.parse
import urllib.request

def send_telegram(message):
    token = "YOUR_TOKEN"
    
    data = {
        'text': message,
        'chat_id': 'YOUR_CHAT_ID'
    }
    url = f"https://api.telegram.org/bot{token}/sendMessage?{urllib.parse.urlencode(data)}&parse_mode=html"
    response = urllib.request.urlopen(url)
    return response.read().decode()

send_telegram("hi!")
```
