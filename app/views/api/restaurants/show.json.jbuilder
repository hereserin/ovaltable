json.restaurant do
  json.extract! @restaurant, :id, :restaurant_name, :restaurant_description, :phone, :dining_style_id, :website_url, :dress_code_id, :physical_address
  json.hours_of_operation_ids @restaurant.hours_of_operation.pluck(:id)
  json.hours_of_operation_string @restaurant.hours_of_operations_list
  json.photos @restaurant.photos.all.pluck(:id)
  json.reviews @restaurant.reviews.all.pluck(:id)
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
      json.extract! photo, :id, :user_id, :caption
      json.photoUrl url_for(photo.pic)
    end
  end
end

json.reviews do
  @restaurant.reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :user_id, :dine_date, :review_body, :rating_overall, :rating_food, :rating_service, :rating_ambience, :helpfulness_votes
    end
  end
end

json.users do
  @restaurant.reviewers.each do |reviewer|
    json.set! reviewer.id do
      json.extract! reviewer, :id, :username
    end
  end
end
