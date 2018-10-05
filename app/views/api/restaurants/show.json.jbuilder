json.restaurant do
  json.extract! @restaurant, :id, :restaurant_name, :restaurant_description, :phone, :dining_style_id, :website_url, :dress_code_id, :physical_address
  json.hours_of_operation_ids @restaurant.hours_of_operation.pluck(:id)
  json.hours_of_operation_string @restaurant.hours_of_operations_list
  json.dining_style @restaurant.dining_style_string
  json.dress_code @restaurant.dress_code_string
end

json.hours_of_operation  do
  @restaurant.hours_of_operation.each do |hour|
    json.set! hour.id do
      json.extract! hour, :id, :day_of_week, :time_block
      json.drop_down_time hour.drop_down_format
    end
  end
end

json.photos do
  @restaurant.photos.each do |photo|
    json.set! photo.id do
      json.extract! photo, :id
      json.photoUrl url_for(photo.pic)
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
