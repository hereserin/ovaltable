class RestaurantHourOfOperation < ApplicationRecord

  self.table_name = 'restaurants_hours_of_operations'

  belongs_to :restaurant,
  primary_key: :id,
  foreign_key: :restaurant_id,
  class_name: :Restaurant

  belongs_to :hour_of_operation,
  primary_key: :id,
  foreign_key: :hour_of_operation_id,
  class_name: :HourOfOperation
end
