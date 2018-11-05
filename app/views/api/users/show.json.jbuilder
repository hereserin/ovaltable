# json.partial! 'api/users/user', user: @user


json.extract! @user, :id, :username
json.reservations @user.reservations.pluck(:id)
