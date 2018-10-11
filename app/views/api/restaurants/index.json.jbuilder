json.restaurants do
  @restaurants.each do |restaurant|
    json.set! restaurant.id do
      json.extract! restaurant, :id, :restaurant_name, :restaurant_description
      json.photos [restaurant.thumbnail.select_id]
    end
  end
end

json.photos do
  @restaurants.each do |restaurant|
    json.set! restaurant.thumbnail.id do
      json.extract! restaurant.thumbnail, :id
      # json.photoUrl url_for(restaurant.thumbnail.pic)
    end
  end
end
