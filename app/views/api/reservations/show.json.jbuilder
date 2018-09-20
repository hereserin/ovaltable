json.reservation do
  json.extract! @reservation, :id, :restaurant_id, :user_id, :party_size, :date_and_time
end 
