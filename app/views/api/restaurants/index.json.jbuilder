json.restaurants do
  @restaurants.each do |restaurant|
    json.set! restaurant.id do
      json.extract! restaurant, :id, :restaurant_name, :restaurant_description
    end
  end
end

json.photos do
  @restaurants.each do |restaurant|
    restaurant.photos.first do |photo|
    # json.set! photo.id do
      json.extract! :id, :photo_url, :restaurant_id
      json.photoUrl url_for(photo.pic)
    end
  end
end
