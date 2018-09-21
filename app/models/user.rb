# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string
#  password_digest :string
#  session_token   :string
#  string          :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :session_token, uniqueness: true, presence: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  attr_reader :password
  after_initialize :ensure_session_token

  has_many :reservations,
  class_name: :Reservation

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    crypt_pass = BCrypt::Password.new(self.password_digest)
    crypt_pass.is_password?(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

end
