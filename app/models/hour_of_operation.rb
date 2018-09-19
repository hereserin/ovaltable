class HourOfOperation < ApplicationRecord

  has_many :restaurant_hour_of_operations,
  class_name: :RestaurantHourOfOperation

  has_many :restaurants,
  through: :restaurant_hour_of_operations,
  source: :restaurant

end
