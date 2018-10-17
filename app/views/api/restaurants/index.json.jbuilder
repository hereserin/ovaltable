json.restaurants do
  @restaurants.each do |restaurant|
    json.set! restaurant.id do
      json.extract! restaurant, :id, :restaurant_name, :restaurant_description
      json.photos [restaurant.thumbnail.select_id]
    end
  end
end

# json.photos do
#   @restaurants.each do |restaurant|
#     json.set! restaurant.thumbnail.id do
#       json.extract! restaurant.thumbnail, :id, :pic
#       # json.photoUrl url_for(restaurant.thumbnail.pic)
#       # json.photoUrl url_for(restaurant.photo.first.pic)
#     end
#   end
# end

json.photos do
  @thumbnails.each do |thumbnail|
    json.set! thumbnail.id do
      json.extract! thumbnail, :id, :pic
      json.photoUrl url_for(thumbnail.pic)
      # json.photoUrl url_for(restaurant.photo.first.pic)
    end
  end
end
