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
