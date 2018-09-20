class HourOfOperation < ApplicationRecord

  self.table_name = "hours_of_operations"

  has_many :restaurant_hour_of_operations,
  class_name: :RestaurantHourOfOperation

  has_many :restaurants,
  through: :restaurant_hour_of_operations,
  source: :restaurant

  def self.time_block_to_time_string(time_block_integer)
    time_hash = { hours:0, minutes:0 }

    hour_offset = time_block_integer / 2
    min_offset = 30 * ( time_block_integer % 2 )

    time_hash[hours] += hours_offset
    time_hash[minutes] += min_offset

    time_hash[:hours] = "0#{time_hash[:hours]}" if time_hash[:hours] < 10
    time_hash[:mins] = "0#{time_hash[:mins]}" if time_hash[:mins] < 10

    "#{time_hash[:hours]}:#{time_hash[:mins]}"
  end

  # def time_string
  #   time_hash = { hours:0, minutes:0 }
  #
  #   hour_offset = self.time_block / 2
  #   min_offset = 30 * ( self.time_block % 2 )
  #
  #   time_hash[hours] += hours_offset
  #   time_hash[minutes] += min_offset
  #
  #   time_hash[:hours] = "0#{time_hash[:hours]}" if time_hash[:hours] < 10
  #   time_hash[:mins] = "0#{time_hash[:mins]}" if time_hash[:mins] < 10
  #
  #   "#{time_hash[:hours]}:#{time_hash[:mins]}"
  # end


end
