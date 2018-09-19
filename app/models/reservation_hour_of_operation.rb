class ReservationHourOfOperation < ApplicationRecord

  self.table_name = "reservations_hours_of_operations"

  belongs_to :reservation,
  class_name: :Reservation

  belongs_to :hour_of_operation
  class_name: :HourOfOperation
end
