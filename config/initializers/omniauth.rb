OmniAuth.config.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :twitter, ENV['TWITTER_KEY'], ENV['TWITTER_SECRET']
end

TweetStream.configure do |config|
  config.consumer_key       = 'o84hCMpeTv4jiOs7Bqa0qriEU'
  config.consumer_secret    = 'JZuEzx7XCsgydoy4oz5p7ARWGkTCSAw97Q6ZWJXNJ1vdbodhmB'
  config.oauth_token        = '2986589739-M2EgdUo0dhvBuBwadjGdS20pUP7olvQ57ByDxyF'
  config.oauth_token_secret = '2A0W61BtR1yeIwNqoYddZehBThU8MJa0sPkm4IyHn3zzo'
  config.auth_method        = :oauth
end
