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
