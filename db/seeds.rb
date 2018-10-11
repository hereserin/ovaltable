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
  # day = "Monday"
  def set_up_day(day)
    weekday_hash = {}

    weekday_hash[twelve_am] = HourOfOperation.create!(day_of_week: day, time_block: 0)
    weekday_hash[twelve_thirty_am] = HourOfOperation.create!(day_of_week: day, time_block: 1)
    weekday_hash[one_am] = HourOfOperation.create!(day_of_week: day, time_block: 2)
    weekday_hash[one_thirty_am] = HourOfOperation.create!(day_of_week: day, time_block: 3)
    weekday_hash[two_am] = HourOfOperation.create!(day_of_week: day, time_block: 4)
    weekday_hash[two_thirty_am] = HourOfOperation.create!(day_of_week: day, time_block: 5)

    weekday_hash[a] = HoursOfOperation(day_of_week: day, time_block: 6)
    weekday_hash[b] = HoursOfOperation(day_of_week: day, time_block: 7)
    weekday_hash[c] = HoursOfOperation(day_of_week: day, time_block: 8)
    weekday_hash[d] = HoursOfOperation(day_of_week: day, time_block: 9)
    weekday_hash[e] = HoursOfOperation(day_of_week: day, time_block: 10)
    weekday_hash[f] = HoursOfOperation(day_of_week: day, time_block: 11)

    weekday_hash[h] = HoursOfOperation(day_of_week: day, time_block: 12)
    weekday_hash[i] = HoursOfOperation(day_of_week: day, time_block: 13)
    weekday_hash[j] = HoursOfOperation(day_of_week: day, time_block: 14)
    weekday_hash[k] = HoursOfOperation(day_of_week: day, time_block: 15)
    weekday_hash[l] = HoursOfOperation(day_of_week: day, time_block: 16)
    weekday_hash[m] = HoursOfOperation(day_of_week: day, time_block: 17)

    weekday_hash[n] = HoursOfOperation(day_of_week: day, time_block: 18)
    weekday_hash[o] = HoursOfOperation(day_of_week: day, time_block: 19)
    weekday_hash[p_] = HoursOfOperation(day_of_week: day, time_block: 20)
    weekday_hash[q] = HoursOfOperation(day_of_week: day, time_block: 21)
    weekday_hash[r] = HoursOfOperation(day_of_week: day, time_block: 22)
    weekday_hash[s] = HoursOfOperation(day_of_week: day, time_block: 23)

    weekday_hash[t] = HoursOfOperation(day_of_week: day, time_block: 24)
    weekday_hash[u] = HoursOfOperation(day_of_week: day, time_block: 25)
    weekday_hash[v] = HoursOfOperation(day_of_week: day, time_block: 26)
    weekday_hash[w] = HoursOfOperation(day_of_week: day, time_block: 27)
    weekday_hash[y] = HoursOfOperation(day_of_week: day, time_block: 28)
    weekday_hash[z] = HoursOfOperation(day_of_week: day, time_block: 29)

    weekday_hash[aa] = HoursOfOperation(day_of_week: day, time_block: 30)
    weekday_hash[ab] = HoursOfOperation(day_of_week: day, time_block: 31)
    weekday_hash[ac] = HoursOfOperation(day_of_week: day, time_block: 32)
    weekday_hash[ad] = HoursOfOperation(day_of_week: day, time_block: 33)
    weekday_hash[ae] = HoursOfOperation(day_of_week: day, time_block: 34)
    weekday_hash[af] = HoursOfOperation(day_of_week: day, time_block: 35)

    weekday_hash[ag] = HoursOfOperation(day_of_week: day, time_block: 36)
    weekday_hash[ah] = HoursOfOperation(day_of_week: day, time_block: 37)
    weekday_hash[ai] = HoursOfOperation(day_of_week: day, time_block: 38)
    weekday_hash[aj] = HoursOfOperation(day_of_week: day, time_block: 39)
    weekday_hash[ak] = HoursOfOperation(day_of_week: day, time_block: 40)
    weekday_hash[al] = HoursOfOperation(day_of_week: day, time_block: 41)

    weekday_hash[am] = HoursOfOperation(day_of_week: day, time_block: 42)
    weekday_hash[an] = HoursOfOperation(day_of_week: day, time_block: 43)
    weekday_hash[ao] = HoursOfOperation(day_of_week: day, time_block: 44)
    weekday_hash[ap] = HoursOfOperation(day_of_week: day, time_block: 45)
    weekday_hash[aq] = HoursOfOperation(day_of_week: day, time_block: 46)
    weekday_hash[as] = HoursOfOperation(day_of_week: day, time_block: 47)
    weekday_hash
  end

  mon_hash = set_up_day("Monday")
  tue_hash = set_up_day("Tuesday")
  wed_hash = set_up_day("Wednesday")
  thur_hash = set_up_day("Thursday")
  fri_hash = set_up_day("Friday")
  sat_hash = set_up_day("Saturday")
  sun_hash = set_up_day("Sunday")


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

  # RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: twelve_am.id)
  # RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: twelve_thirty_am.id )
  # RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: one_am.id )

  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[n] )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[o] )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[p_] )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[q] )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[s] )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[t] )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[u] )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[v] )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[w] )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[x] )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[y] )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[z] )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[aa] )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[ab] )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[ac] )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[ad] )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[ae] )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[af] )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[ag] )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[ah] )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[ai] )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[aj] )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[ak] )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[al] )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[am] )


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
  RestaurantHourOfOperation.create!(restaurant_id: redrooster.id, hour_of_operation_id: one_am.id)
  RestaurantHourOfOperation.create!(restaurant_id: redrooster.id, hour_of_operation_id: one_thirty_am.id )
  RestaurantHourOfOperation.create!(restaurant_id: redrooster.id, hour_of_operation_id: two_thirty_am.id )



  # twelve_am = HourOfOperation.create!(day_of_week: day, time_block: 1)
  # twelve_thirty_am = HourOfOperation.create!(day_of_week: day, time_block: 2)
  # one_am = HourOfOperation.create!(day_of_week: day, time_block: 3)
  # one_thirty_am = HourOfOperation.create!(day_of_week: day, time_block: 4)
  # two_am = HourOfOperation.create!(day_of_week: day, time_block: 5)
  # two_thirty_am = HourOfOperation.create!(day_of_week: day, time_block: 6)


end
