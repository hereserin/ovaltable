class Reservation < ApplicationRecord
  validates :date_and_time, presence: true 

  belongs_to :user,
  class_name: :User

  belongs_to :restaurant,
  class_name: :Restaurant

  has_many :reservation_hour_of_operations,
  class_name: :ReservationHourOfOperation

  has_many :hours_of_operation,
  through: :reservation_hour_of_operations,
  source: :hour_of_operation

  # has_many :photos,
  # through: :restaurant,
  # source: :photos

  def display_date
    self.date_and_time.strftime('%A, %B %e, %Y')
  end

  def display_time
    self.date_and_time.strftime('%l:%M %p')
  end

end
