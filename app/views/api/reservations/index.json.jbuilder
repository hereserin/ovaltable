json.reservations do
  @reservations.each do |reservation|
    json.set! reservation.id do
      json.extract! reservation, :id, :restaurant_id, :user_id, :party_size, :date_and_time
      json.photos reservation.restaurant.photos.all.pluck(:id)
      json.date reservation.display_date
      json.time reservation.display_time
      json.restaurant_name reservation.restaurant.restaurant_name
      json.restaurant_loc reservation.restaurant.physical_address
    end
  end
end

json.order @reservations.pluck(:id)

json.photos do
  @reservations.each do |reservation|
    reservation.restaurant.photos.each do |photo|
      json.set! photo.id do
        json.extract! photo, :id, :caption
        json.photoUrl url_for(photo.pic)
      end
    end
  end
end

json.restaurants do
  @reservations.each do |reservation|
    json.restaurant_name reservation.restaurant.restaurant_name
    json.restaurant_loc reservation.restaurant.physical_address
  end
end
