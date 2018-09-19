# == Schema Information
#
# Table name: restaurants
#
#  id                     :bigint(8)        not null, primary key
#  restaurant_name        :string           not null
#  max_capacity           :integer          not null
#  restaurant_description :text
#  dining_style_id        :integer
#  phone                  :string
#  website_url            :string
#  dress_code_id          :integer
#  physical_address       :string
#  region_key_id          :integer
#

class Restaurant < ApplicationRecord

  has_many :reservations,
  class_name: :Reservation

  has_many :restaurant_hour_of_operations,
  primary_key: :id,
  foreign_key: :restaurant_id,
  class_name: :RestaurantHourOfOperation

  has_many :hours_of_operation,
  through: :restaurant_hour_of_operations,
  source: :hour_of_operation

  belongs_to :dining_style,
  class_name: :DiningStyle

  # belongs_to :regional_key,
  # class_name: :RegionalKey

  belongs_to :dress_code,
  class_name: :DressCode


  def average_ratings
  end

end
