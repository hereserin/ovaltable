class Reservation < ApplicationRecord

  belongs_to :user,
  class_name: :User

  belongs_to :restaurant,
  class_name: :Restaurant

  has_many :reservation_hour_of_operations,
  class_name: :ReservationHourOfOperation

  has_many :hours_of_operation,
  through: :reservation_hour_of_operations,
  source: :hour_of_operation

end
