class HourOfOperation < ApplicationRecord

  self.table_name = "hours_of_operations"

  has_many :restaurant_hour_of_operations,
  class_name: :RestaurantHourOfOperation

  has_many :restaurants,
  through: :restaurant_hour_of_operations,
  source: :restaurant



  def self.time_block_to_time_string(time_block_integer)
    time_hash = { hours:0, minutes:0, m: "am"}

    hour_offset = time_block_integer / 2
    min_offset = 30 * ( time_block_integer % 2 )

    time_hash[:hours] += hour_offset
    time_hash[:minutes] += min_offset

    time_hash[:hours] = 12 if time_hash[:hours] == 0
    if time_hash[:hours] >= 13
      time_hash[:hours] -= 12
      time_hash[:m] = "pm"
    end

    # time_hash[:hours] = "0#{time_hash[:hours]}" if time_hash[:hours] < 10
    time_hash[:minutes] = "0#{time_hash[:minutes]}" if time_hash[:minutes] < 10

    "#{time_hash[:hours]}:#{time_hash[:minutes]}#{time_hash[:m]}"
  end

  def drop_down_format
    arr = HourOfOperation.time_block_to_time_string(self.time_block).split("")
    ending = arr.pop
    ending = arr.pop.upcase + ending.upcase
    arr += [" ", ending ]
    arr.join("")
  end


  def self.hours_of_operations_list(time_block_hash)
    all_hours = time_block_hash
    all_hours_list = ""

    all_hours.each do |k,v|
      time_ranges = []
      i = 0
      while i < all_hours[k].length
        single_time_range = []
        single_time_range << all_hours[k][i]
        # debugger
        while (i + 1 < all_hours[k].length) && (1 >= (all_hours[k][i + 1] - all_hours[k][i]))
          i = i + 1
        end
        single_time_range << all_hours[k][i]
        time_ranges << single_time_range
        i = i + 1
      end
      range_strings_arr = []
      time_ranges.each do |range|
        start = HourOfOperation.time_block_to_time_string(range[0])
        finish = HourOfOperation.time_block_to_time_string(range[1])
        range_strings_arr << "#{start} to #{finish}"
      end
      all_hours_list += "#{k}: #{range_strings_arr.join(", ")} "
    end
    all_hours_list
  end


end
