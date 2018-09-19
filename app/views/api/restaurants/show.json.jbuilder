json.restaurant do
  json.extract! @restaurant, :id, :restaurant_name, :restaurant_description, :dining_style_id, :website_url, :dress_code_id, :physical_address
  json.hours_of_operation_ids @restaurant.hours_of_operation.pluck(:id)
end

json.hours_of_operation  do
  @restaurant.hours_of_operation.each do |hour|
    json.set! hour.id do
      json.extract! hour, :id, :day_of_week, :time_block  
    end
  end
end






# json.extract! @restaurant, :id,
# :restaurant_name,
# # :max_capacity,
# :restaurant_description,
# :dining_style_id,
# :dining_style_id
# :website_url,
# :dress_code_id,
# :physical_address,
# :regional_key_id
