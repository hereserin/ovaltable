class RestaurantShowHoursOfOperation < ApplicationRecord
  belongs_to :restaurant,
  class_name: :Restaurant

  belongs_to :hour_of_operation
  class_name: :HourOfOperation
end
