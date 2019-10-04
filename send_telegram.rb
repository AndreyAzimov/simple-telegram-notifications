require "open-uri"

class PagesController < ApplicationController

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
