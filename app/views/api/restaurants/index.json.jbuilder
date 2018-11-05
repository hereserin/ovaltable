json.restaurants do
  @restaurants.each do |restaurant|
    json.set! restaurant.id do
      json.extract! restaurant, :id, :restaurant_name, :restaurant_description
      json.photos restaurant.photos.all.pluck(:id)
      json.rating restaurant.average_overall_rating
    end
  end
end

json.photos do
  @restaurants.each do |restaurant|
    restaurant.photos.each do |photo|
      json.set! photo.id do
        json.extract! photo, :id, :caption
        json.photoUrl url_for(photo.pic)
      end
    end
  end
end

# TODO: eager loading (restaurant.includes(photo))
