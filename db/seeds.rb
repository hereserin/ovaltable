# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do


# info that is not content:
  User.destroy_all
  demo_user = User.create!(username: "Demo User", password: "password" )

  DiningStyle.destroy_all
  casual_dining = DiningStyle.create!(dining_style: "Casual Dining")
  fine_dining = DiningStyle.create!(dining_style: "Fine Dining")

  DressCode.destroy_all
  casual_dress = DressCode.create!(dress_code: "Casual Dress")
  smart_casual = DressCode.create!(dress_code: "Smart Casual")
  business_casual = DressCode.create!(dress_code: "Business Casual")

  HourOfOperation.destroy_all
  # weekdays = [
  #   "Sunday",
  #   "Monday",
  #   "Tuesday",
  #   "Wednesday",
  #   "Thurday",
  #   "Friday",
  #   "Saturday"
  # ]
  #
  # weekdays.each do |day|
  day = "Monday"
    twelve_am = HourOfOperation.create!(day_of_week: day, time_block: 0)
    twelve_thirty_am = HourOfOperation.create!(day_of_week: day, time_block: 1)
    one_am = HourOfOperation.create!(day_of_week: day, time_block: 2)
    one_thirty_am = HourOfOperation.create!(day_of_week: day, time_block: 3)
    two_am = HourOfOperation.create!(day_of_week: day, time_block: 4)
    two_thirty_am = HourOfOperation.create!(day_of_week: day, time_block: 5)
#
#     3_00am = HoursOfOperation(day_of_week: day, time_block: 6)
#     3_30am = HoursOfOperation(day_of_week: day, time_block: 7)
#     4_00am = HoursOfOperation(day_of_week: day, time_block: 8)
#     4_30am = HoursOfOperation(day_of_week: day, time_block: 9)
#     5_00am = HoursOfOperation(day_of_week: day, time_block: 10)
#     5_30am = HoursOfOperation(day_of_week: day, time_block: 11)
#
#     6_00am = HoursOfOperation(day_of_week: day, time_block: 12)
#     6_30am = HoursOfOperation(day_of_week: day, time_block: 13)
#     7_00am = HoursOfOperation(day_of_week: day, time_block: 14)
#     7_30am = HoursOfOperation(day_of_week: day, time_block: 15)
#     8_00am = HoursOfOperation(day_of_week: day, time_block: 16)
#     8_30am = HoursOfOperation(day_of_week: day, time_block: 17)
#
#     9_00am = HoursOfOperation(day_of_week: day, time_block: 18)
#     9_30am = HoursOfOperation(day_of_week: day, time_block: 19)
#     10_00am = HoursOfOperation(day_of_week: day, time_block: 20)
#     10_30am = HoursOfOperation(day_of_week: day, time_block: 21)
#     11_00am = HoursOfOperation(day_of_week: day, time_block: 22)
#     11_30am = HoursOfOperation(day_of_week: day, time_block: 23)
#
#     12_00pm = HoursOfOperation(day_of_week: day, time_block: 24)
#     12_30pm = HoursOfOperation(day_of_week: day, time_block: 25)
#     1_00pm = HoursOfOperation(day_of_week: day, time_block: 26)
#     1_30pm = HoursOfOperation(day_of_week: day, time_block: 27)
#     2_00pm = HoursOfOperation(day_of_week: day, time_block: 28)
#     2_30pm = HoursOfOperation(day_of_week: day, time_block: 29)
#
#     3_00pm = HoursOfOperation(day_of_week: day, time_block: 30)
#     3_30pm = HoursOfOperation(day_of_week: day, time_block: 31)
#     4_00pm = HoursOfOperation(day_of_week: day, time_block: 32)
#     4_30pm = HoursOfOperation(day_of_week: day, time_block: 33)
#     5_00pm = HoursOfOperation(day_of_week: day, time_block: 34)
#     5_30pm = HoursOfOperation(day_of_week: day, time_block: 35)
#
#     6_00pm = HoursOfOperation(day_of_week: day, time_block: 36)
#     6_30pm = HoursOfOperation(day_of_week: day, time_block: 37)
#     7_00pm = HoursOfOperation(day_of_week: day, time_block: 38)
#     7_30pm = HoursOfOperation(day_of_week: day, time_block: 39)
#     8_00pm = HoursOfOperation(day_of_week: day, time_block: 40)
#     8_30pm = HoursOfOperation(day_of_week: day, time_block: 41)
#
#     9_00pm = HoursOfOperation(day_of_week: day, time_block: 42)
#     9_30pm = HoursOfOperation(day_of_week: day, time_block: 43)
#     10_00pm = HoursOfOperation(day_of_week: day, time_block: 44)
#     10_30pm = HoursOfOperation(day_of_week: day, time_block: 45)
#     11_00pm = HoursOfOperation(day_of_week: day, time_block: 46)
#     11_30pm = HoursOfOperation(day_of_week: day, time_block: 47)
# end

  # info that is not content ^^^(above)^^^


# info that is content:
  Restaurant.destroy_all
  RestaurantHourOfOperation.destroy_all

  mintons = Restaurant.create!(
    restaurant_name: 'Mintons Playhouse',
    max_capacity: 100,
    restaurant_description: 'The place to be for a great dining experience and a live show!',
    dining_style_id: casual_dining.id,
    phone: "777-777-7779",
    website_url: "www.mintons.com",
    dress_code_id: smart_casual.id,
    physical_address: "123 Some Street, New York, NY"
  )

  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: twelve_am.id)
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: twelve_thirty_am.id )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: one_am.id )


  redrooster = Restaurant.create!(
    restaurant_name: 'Red Rooster Harlem',
    max_capacity: 200,
    restaurant_description: 'Located in the heart of Harlem, Red Rooster serves comfort food celebrating the roots of American cuisine and the diverse culinary traditions of the neighborhood. Named in honor of the legendary Harlem speakeasy, Chef Marcus Samuelsson brings his passion for food to the neighborhood he calls home',
    dining_style_id: casual_dining.id,
    phone: "888-888-8888",
    website_url: "www.RedRooster.com",
    dress_code_id: smart_casual.id,
    physical_address: "555 Another Street, New York, NY"
  )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: one_am.id)
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: one_thirty_am.id )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: two_thirty_am.id )


  # twelve_am = HourOfOperation.create!(day_of_week: day, time_block: 1)
  # twelve_thirty_am = HourOfOperation.create!(day_of_week: day, time_block: 2)
  # one_am = HourOfOperation.create!(day_of_week: day, time_block: 3)
  # one_thirty_am = HourOfOperation.create!(day_of_week: day, time_block: 4)
  # two_am = HourOfOperation.create!(day_of_week: day, time_block: 5)
  # two_thirty_am = HourOfOperation.create!(day_of_week: day, time_block: 6)


end
