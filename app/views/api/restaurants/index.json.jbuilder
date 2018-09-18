@restaurants.each do |restaurant|
  json.set! restaurant.id do
    json.extract! restaurant, :id, :restaurant_name, :restaurant_description
  end
end
