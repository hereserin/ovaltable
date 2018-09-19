class RestaurantShowHoursOfOperation < ApplicationRecord
  belongs_to :reservation,
  class_name: :Reservation

  belongs_to :hour_of_operation
  class_name: :HourOfOperation
end
