json.extract! @reservation, :id, :restaurant_id, :user_id, :party_size, :date_and_time
json.restaurant_name @reservation.restaurant.restaurant_name
json.restaurant_loc @reservation.restaurant.physical_address
