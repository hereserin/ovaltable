json.array! @photos do |photo|
  json.extract! photo, :id, :caption
  json.photoUrl url_for(photo.pic)
end
