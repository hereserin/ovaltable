

json.photo do
  json.extract! @photo, :id, :caption, :user_id
  json.photoUrl url_for(@photo.pic)
end

json.users do
  json.extract! @photo.user, :id, :username
end
