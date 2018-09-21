# json.partial! 'api/users/user', user: @user


json.user do
  json.extract! @user, :id, :username
  json.current_user_reservations @user.reservations.pluck(:id)
end 
