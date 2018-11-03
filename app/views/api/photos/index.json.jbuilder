json.array! @photos do |photo|
  json.extract! photo, :id, :user_id, :caption
  json.photoUrl url_for(photo.pic)
end
