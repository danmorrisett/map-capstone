class User < ActiveRecord::Base


def self.from_omniauth(auth)
  find_by(provider: auth.provider, uid: auth.uid) || self.create_from_omniauth(auth)
end


def self.create_from_omniauth(auth)
  User.create!({
    uid: auth['uid'],
    provider: auth['provider'],
    name: auth['info']['name'],
  })
  end


end
