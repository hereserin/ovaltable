@restaurants.each do |restaurant|
  json.set! restaurant.id do
    json.extract! restaurant, :restaurant_name
  end
end
