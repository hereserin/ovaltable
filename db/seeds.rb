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

    weekday_hash[:twelve_am] = HourOfOperation.create!(day_of_week: day, time_block: 0)
    weekday_hash[:twelve_thirty_am] = HourOfOperation.create!(day_of_week: day, time_block: 1)
    weekday_hash[:one_am] = HourOfOperation.create!(day_of_week: day, time_block: 2)
    weekday_hash[:one_thirty_am] = HourOfOperation.create!(day_of_week: day, time_block: 3)
    weekday_hash[:two_am] = HourOfOperation.create!(day_of_week: day, time_block: 4)
    weekday_hash[:two_thirty_am] = HourOfOperation.create!(day_of_week: day, time_block: 5)

    weekday_hash[:a] = HourOfOperation.create!(day_of_week: day, time_block: 6)
    weekday_hash[:b] = HourOfOperation.create!(day_of_week: day, time_block: 7)
    weekday_hash[:c] = HourOfOperation.create!(day_of_week: day, time_block: 8)
    weekday_hash[:d] = HourOfOperation.create!(day_of_week: day, time_block: 9)
    weekday_hash[:e] = HourOfOperation.create!(day_of_week: day, time_block: 10)
    weekday_hash[:f] = HourOfOperation.create!(day_of_week: day, time_block: 11)

    weekday_hash[:h] = HourOfOperation.create!(day_of_week: day, time_block: 12)
    weekday_hash[:i] = HourOfOperation.create!(day_of_week: day, time_block: 13)
    weekday_hash[:j] = HourOfOperation.create!(day_of_week: day, time_block: 14)
    weekday_hash[:k] = HourOfOperation.create!(day_of_week: day, time_block: 15)
    weekday_hash[:l] = HourOfOperation.create!(day_of_week: day, time_block: 16)
    weekday_hash[:m] = HourOfOperation.create!(day_of_week: day, time_block: 17)

    weekday_hash[:n] = HourOfOperation.create!(day_of_week: day, time_block: 18)
    weekday_hash[:o] = HourOfOperation.create!(day_of_week: day, time_block: 19)
    weekday_hash[:p_] = HourOfOperation.create!(day_of_week: day, time_block: 20)
    weekday_hash[:q] = HourOfOperation.create!(day_of_week: day, time_block: 21)
    weekday_hash[:r] = HourOfOperation.create!(day_of_week: day, time_block: 22)
    weekday_hash[:s] = HourOfOperation.create!(day_of_week: day, time_block: 23)

    weekday_hash[:t] = HourOfOperation.create!(day_of_week: day, time_block: 24)
    weekday_hash[:u] = HourOfOperation.create!(day_of_week: day, time_block: 25)
    weekday_hash[:v] = HourOfOperation.create!(day_of_week: day, time_block: 26)
    weekday_hash[:w] = HourOfOperation.create!(day_of_week: day, time_block: 27)
    weekday_hash[:y] = HourOfOperation.create!(day_of_week: day, time_block: 28)
    weekday_hash[:z] = HourOfOperation.create!(day_of_week: day, time_block: 29)

    weekday_hash[:aa] = HourOfOperation.create!(day_of_week: day, time_block: 30)
    weekday_hash[:ab] = HourOfOperation.create!(day_of_week: day, time_block: 31)
    weekday_hash[:ac] = HourOfOperation.create!(day_of_week: day, time_block: 32)
    weekday_hash[:ad] = HourOfOperation.create!(day_of_week: day, time_block: 33)
    weekday_hash[:ae] = HourOfOperation.create!(day_of_week: day, time_block: 34)
    weekday_hash[:af] = HourOfOperation.create!(day_of_week: day, time_block: 35)

    weekday_hash[:ag] = HourOfOperation.create!(day_of_week: day, time_block: 36)
    weekday_hash[:ah] = HourOfOperation.create!(day_of_week: day, time_block: 37)
    weekday_hash[:ai] = HourOfOperation.create!(day_of_week: day, time_block: 38)
    weekday_hash[:aj] = HourOfOperation.create!(day_of_week: day, time_block: 39)
    weekday_hash[:ak] = HourOfOperation.create!(day_of_week: day, time_block: 40)
    weekday_hash[:al] = HourOfOperation.create!(day_of_week: day, time_block: 41)

    weekday_hash[:am] = HourOfOperation.create!(day_of_week: day, time_block: 42)
    weekday_hash[:an] = HourOfOperation.create!(day_of_week: day, time_block: 43)
    weekday_hash[:ao] = HourOfOperation.create!(day_of_week: day, time_block: 44)
    weekday_hash[:ap] = HourOfOperation.create!(day_of_week: day, time_block: 45)
    weekday_hash[:aq] = HourOfOperation.create!(day_of_week: day, time_block: 46)
    weekday_hash[:as] = HourOfOperation.create!(day_of_week: day, time_block: 47)
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

  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[:n].id )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[:o].id )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[:p_].id )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[:q].id )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[:s].id )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[:t].id )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[:u].id )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[:v].id )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[:w].id )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[:y].id )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[:z].id )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[:aa].id )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[:ab].id )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[:ac].id )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[:ad].id )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[:ae].id )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[:af].id )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[:ag].id )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[:ah].id )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[:ai].id )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[:aj].id )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[:ak].id )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[:al].id )
  RestaurantHourOfOperation.create!(restaurant_id: mintons.id, hour_of_operation_id: mon_hash[:am].id )


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
  # RestaurantHourOfOperation.create!(restaurant_id: redrooster.id, hour_of_operation_id: one_am.id)
  # RestaurantHourOfOperation.create!(restaurant_id: redrooster.id, hour_of_operation_id: one_thirty_am.id )
  # RestaurantHourOfOperation.create!(restaurant_id: redrooster.id, hour_of_operation_id: two_thirty_am.id )
  RestaurantHourOfOperation.create!(restaurant_id: redrooster.id, hour_of_operation_id: mon_hash[:n].id )
  RestaurantHourOfOperation.create!(restaurant_id: redrooster.id, hour_of_operation_id: mon_hash[:o].id )
  RestaurantHourOfOperation.create!(restaurant_id: redrooster.id, hour_of_operation_id: mon_hash[:p_].id )
  RestaurantHourOfOperation.create!(restaurant_id: redrooster.id, hour_of_operation_id: mon_hash[:q].id )
  RestaurantHourOfOperation.create!(restaurant_id: redrooster.id, hour_of_operation_id: mon_hash[:s].id )
  RestaurantHourOfOperation.create!(restaurant_id: redrooster.id, hour_of_operation_id: mon_hash[:t].id )
  RestaurantHourOfOperation.create!(restaurant_id: redrooster.id, hour_of_operation_id: mon_hash[:u].id )
  RestaurantHourOfOperation.create!(restaurant_id: redrooster.id, hour_of_operation_id: mon_hash[:v].id )
  RestaurantHourOfOperation.create!(restaurant_id: redrooster.id, hour_of_operation_id: mon_hash[:w].id )
  RestaurantHourOfOperation.create!(restaurant_id: redrooster.id, hour_of_operation_id: mon_hash[:y].id )
  RestaurantHourOfOperation.create!(restaurant_id: redrooster.id, hour_of_operation_id: mon_hash[:z].id )
  RestaurantHourOfOperation.create!(restaurant_id: redrooster.id, hour_of_operation_id: mon_hash[:aa].id )
  RestaurantHourOfOperation.create!(restaurant_id: redrooster.id, hour_of_operation_id: mon_hash[:ab].id )
  RestaurantHourOfOperation.create!(restaurant_id: redrooster.id, hour_of_operation_id: mon_hash[:ac].id )
  RestaurantHourOfOperation.create!(restaurant_id: redrooster.id, hour_of_operation_id: mon_hash[:ad].id )
  RestaurantHourOfOperation.create!(restaurant_id: redrooster.id, hour_of_operation_id: mon_hash[:ae].id )
  RestaurantHourOfOperation.create!(restaurant_id: redrooster.id, hour_of_operation_id: mon_hash[:af].id )
  RestaurantHourOfOperation.create!(restaurant_id: redrooster.id, hour_of_operation_id: mon_hash[:ag].id )
  RestaurantHourOfOperation.create!(restaurant_id: redrooster.id, hour_of_operation_id: mon_hash[:ah].id )
  RestaurantHourOfOperation.create!(restaurant_id: redrooster.id, hour_of_operation_id: mon_hash[:ai].id )
  RestaurantHourOfOperation.create!(restaurant_id: redrooster.id, hour_of_operation_id: mon_hash[:aj].id )
  RestaurantHourOfOperation.create!(restaurant_id: redrooster.id, hour_of_operation_id: mon_hash[:ak].id )
  RestaurantHourOfOperation.create!(restaurant_id: redrooster.id, hour_of_operation_id: mon_hash[:al].id )
  RestaurantHourOfOperation.create!(restaurant_id: redrooster.id, hour_of_operation_id: mon_hash[:am].id )


  # twelve_am = HourOfOperation.create!(day_of_week: day, time_block: 1)
  # twelve_thirty_am = HourOfOperation.create!(day_of_week: day, time_block: 2)
  # one_am = HourOfOperation.create!(day_of_week: day, time_block: 3)
  # one_thirty_am = HourOfOperation.create!(day_of_week: day, time_block: 4)
  # two_am = HourOfOperation.create!(day_of_week: day, time_block: 5)
  # two_thirty_am = HourOfOperation.create!(day_of_week: day, time_block: 6)

  frenchette = Restaurant.create!(
    restaurant_name: 'Frenchette',
    max_capacity: 50,
    restaurant_description: 'The everyday French bistro is fresh again at Frenchette, a lively restaurant in Tribeca from the chefs behind mainstays like Balthazar.',
    dining_style_id: casual_dining.id,
    phone: "(212) 334-3883",
    website_url: 'Frenchette.com',
    dress_code_id: smart_casual.id,
    physical_address: "241 W Broadway, New York, NY"
  )

  RestaurantHourOfOperation.create!(restaurant_id: frenchette.id, hour_of_operation_id: mon_hash[:n].id )
  RestaurantHourOfOperation.create!(restaurant_id: frenchette.id, hour_of_operation_id: mon_hash[:o].id )
  RestaurantHourOfOperation.create!(restaurant_id: frenchette.id, hour_of_operation_id: mon_hash[:p_].id )
  RestaurantHourOfOperation.create!(restaurant_id: frenchette.id, hour_of_operation_id: mon_hash[:q].id )
  RestaurantHourOfOperation.create!(restaurant_id: frenchette.id, hour_of_operation_id: mon_hash[:s].id )
  RestaurantHourOfOperation.create!(restaurant_id: frenchette.id, hour_of_operation_id: mon_hash[:t].id )
  RestaurantHourOfOperation.create!(restaurant_id: frenchette.id, hour_of_operation_id: mon_hash[:u].id )
  RestaurantHourOfOperation.create!(restaurant_id: frenchette.id, hour_of_operation_id: mon_hash[:v].id )
  RestaurantHourOfOperation.create!(restaurant_id: frenchette.id, hour_of_operation_id: mon_hash[:w].id )
  RestaurantHourOfOperation.create!(restaurant_id: frenchette.id, hour_of_operation_id: mon_hash[:y].id )
  RestaurantHourOfOperation.create!(restaurant_id: frenchette.id, hour_of_operation_id: mon_hash[:z].id )
  RestaurantHourOfOperation.create!(restaurant_id: frenchette.id, hour_of_operation_id: mon_hash[:aa].id )
  RestaurantHourOfOperation.create!(restaurant_id: frenchette.id, hour_of_operation_id: mon_hash[:ab].id )
  RestaurantHourOfOperation.create!(restaurant_id: frenchette.id, hour_of_operation_id: mon_hash[:ac].id )
  RestaurantHourOfOperation.create!(restaurant_id: frenchette.id, hour_of_operation_id: mon_hash[:ad].id )
  RestaurantHourOfOperation.create!(restaurant_id: frenchette.id, hour_of_operation_id: mon_hash[:ae].id )
  RestaurantHourOfOperation.create!(restaurant_id: frenchette.id, hour_of_operation_id: mon_hash[:af].id )
  RestaurantHourOfOperation.create!(restaurant_id: frenchette.id, hour_of_operation_id: mon_hash[:ag].id )
  RestaurantHourOfOperation.create!(restaurant_id: frenchette.id, hour_of_operation_id: mon_hash[:ah].id )
  RestaurantHourOfOperation.create!(restaurant_id: frenchette.id, hour_of_operation_id: mon_hash[:ai].id )
  RestaurantHourOfOperation.create!(restaurant_id: frenchette.id, hour_of_operation_id: mon_hash[:aj].id )
  RestaurantHourOfOperation.create!(restaurant_id: frenchette.id, hour_of_operation_id: mon_hash[:ak].id )
  RestaurantHourOfOperation.create!(restaurant_id: frenchette.id, hour_of_operation_id: mon_hash[:al].id )
  RestaurantHourOfOperation.create!(restaurant_id: frenchette.id, hour_of_operation_id: mon_hash[:am].id )

  rest1 = Restaurant.create!(
    restaurant_name: 'Wildair',
    max_capacity: 75,
    restaurant_description: "At Wildair, Jeremiah Stone and Fabian von Hauske — the chef-restaurateurs behind Contra down the block — serve inventive small plates that don't easily fit into any one culinary classification. A meal here might include Southern-style white shrimp, rich pork rillettes, crispy squid with green onions, bright scallop ceviche, and spicy chopped tuna on toast",
    dining_style_id: casual_dining.id,
    phone: "(646) 964-5624",
    website_url: 'Wildair.com',
    dress_code_id: smart_casual.id,
    physical_address: "142 Orchard St, New York, NY"
  )
  RestaurantHourOfOperation.create!(restaurant_id: rest1.id, hour_of_operation_id: mon_hash[:q].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest1.id, hour_of_operation_id: mon_hash[:s].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest1.id, hour_of_operation_id: mon_hash[:t].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest1.id, hour_of_operation_id: mon_hash[:u].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest1.id, hour_of_operation_id: mon_hash[:v].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest1.id, hour_of_operation_id: mon_hash[:w].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest1.id, hour_of_operation_id: mon_hash[:y].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest1.id, hour_of_operation_id: mon_hash[:z].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest1.id, hour_of_operation_id: mon_hash[:aa].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest1.id, hour_of_operation_id: mon_hash[:ab].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest1.id, hour_of_operation_id: mon_hash[:ac].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest1.id, hour_of_operation_id: mon_hash[:ad].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest1.id, hour_of_operation_id: mon_hash[:ae].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest1.id, hour_of_operation_id: mon_hash[:af].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest1.id, hour_of_operation_id: mon_hash[:ag].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest1.id, hour_of_operation_id: mon_hash[:ah].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest1.id, hour_of_operation_id: mon_hash[:ai].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest1.id, hour_of_operation_id: mon_hash[:aj].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest1.id, hour_of_operation_id: mon_hash[:ak].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest1.id, hour_of_operation_id: mon_hash[:al].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest1.id, hour_of_operation_id: mon_hash[:am].id )

  rest2 = Restaurant.create!(
    restaurant_name: 'Uncle Boons',
    max_capacity: 175,
    restaurant_description: "This Nolita lounge is still turning out some of the city’s most captivating Thai fare, courtesy of Per Se alums Ann Redding and Matt Danzer. Look for dishes like green curry snails, wood-fired yellowtail collar, a spicy lamb laab, or a savory crab fried rice. The space is an eclectic way to start a night out; order an overflowing beer slushie to get in the mood.",
    dining_style_id: casual_dining.id,
    phone: "(212) 334-3883",
    website_url: 'Boons.com',
    dress_code_id: smart_casual.id,
    physical_address: "7 Spring St, New York, NY"
  )

  RestaurantHourOfOperation.create!(restaurant_id: rest2.id, hour_of_operation_id: mon_hash[:q].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest2.id, hour_of_operation_id: mon_hash[:s].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest2.id, hour_of_operation_id: mon_hash[:t].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest2.id, hour_of_operation_id: mon_hash[:u].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest2.id, hour_of_operation_id: mon_hash[:v].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest2.id, hour_of_operation_id: mon_hash[:w].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest2.id, hour_of_operation_id: mon_hash[:y].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest2.id, hour_of_operation_id: mon_hash[:z].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest2.id, hour_of_operation_id: mon_hash[:aa].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest2.id, hour_of_operation_id: mon_hash[:ab].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest2.id, hour_of_operation_id: mon_hash[:ac].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest2.id, hour_of_operation_id: mon_hash[:ad].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest2.id, hour_of_operation_id: mon_hash[:ae].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest2.id, hour_of_operation_id: mon_hash[:af].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest2.id, hour_of_operation_id: mon_hash[:ag].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest2.id, hour_of_operation_id: mon_hash[:ah].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest2.id, hour_of_operation_id: mon_hash[:ai].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest2.id, hour_of_operation_id: mon_hash[:aj].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest2.id, hour_of_operation_id: mon_hash[:ak].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest2.id, hour_of_operation_id: mon_hash[:al].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest2.id, hour_of_operation_id: mon_hash[:am].id )


  rest3 = Restaurant.create!(
    restaurant_name: 'Atla',
    max_capacity: 30,
    restaurant_description: "Mexican cuisine gets a stylish, uber-hip setting at Atla, the highly-acclaimed all-day restaurant in Noho from Enrique Olvera and Daniela Soto-Innes. Expect a fashionable crowd and lots of light yet flavor-packed dishes, including a split pea tlacoyo, an egg white omelette with zucchini, and an herb guacamole. Fresh juices, coffee, and cocktails are available.",
    dining_style_id: casual_dining.id,
    phone: "(646) 837-6464",
    website_url: 'Atla.com',
    dress_code_id: smart_casual.id,
    physical_address: "372 Lafayette St, New York, NY"
  )

  RestaurantHourOfOperation.create!(restaurant_id: rest3.id, hour_of_operation_id: mon_hash[:q].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest3.id, hour_of_operation_id: mon_hash[:s].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest3.id, hour_of_operation_id: mon_hash[:t].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest3.id, hour_of_operation_id: mon_hash[:u].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest3.id, hour_of_operation_id: mon_hash[:v].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest3.id, hour_of_operation_id: mon_hash[:w].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest3.id, hour_of_operation_id: mon_hash[:y].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest3.id, hour_of_operation_id: mon_hash[:z].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest3.id, hour_of_operation_id: mon_hash[:aa].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest3.id, hour_of_operation_id: mon_hash[:ab].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest3.id, hour_of_operation_id: mon_hash[:ac].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest3.id, hour_of_operation_id: mon_hash[:ad].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest3.id, hour_of_operation_id: mon_hash[:ae].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest3.id, hour_of_operation_id: mon_hash[:af].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest3.id, hour_of_operation_id: mon_hash[:ag].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest3.id, hour_of_operation_id: mon_hash[:ah].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest3.id, hour_of_operation_id: mon_hash[:ai].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest3.id, hour_of_operation_id: mon_hash[:aj].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest3.id, hour_of_operation_id: mon_hash[:ak].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest3.id, hour_of_operation_id: mon_hash[:al].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest3.id, hour_of_operation_id: mon_hash[:am].id )

  rest4 = Restaurant.create!(
    restaurant_name: 'Le Coucou',
    max_capacity: 100,
    restaurant_description: "Restaurateur Stephen Starr and chef Daniel Rose take cues from traditional French restaurants, transforming their place into one of the most exciting upscale restaurants in New York. The dining room offers perfect light in a room adorned in stately yet stylish decor. The menu is obvious in its luxuries: Lobster, foie gras, and oysters all make appearances.",
    dining_style_id: casual_dining.id,
    phone: "(212) 271-4252",
    website_url: 'LeCoucou.com',
    dress_code_id: smart_casual.id,
    physical_address: "138 Lafayette St, New York, NY"
  )

  RestaurantHourOfOperation.create!(restaurant_id: rest3.id, hour_of_operation_id: mon_hash[:q].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest3.id, hour_of_operation_id: mon_hash[:s].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest3.id, hour_of_operation_id: mon_hash[:t].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest3.id, hour_of_operation_id: mon_hash[:u].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest3.id, hour_of_operation_id: mon_hash[:v].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest3.id, hour_of_operation_id: mon_hash[:w].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest3.id, hour_of_operation_id: mon_hash[:y].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest3.id, hour_of_operation_id: mon_hash[:z].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest3.id, hour_of_operation_id: mon_hash[:aa].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest3.id, hour_of_operation_id: mon_hash[:ab].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest3.id, hour_of_operation_id: mon_hash[:ac].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest3.id, hour_of_operation_id: mon_hash[:ad].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest3.id, hour_of_operation_id: mon_hash[:ae].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest3.id, hour_of_operation_id: mon_hash[:af].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest3.id, hour_of_operation_id: mon_hash[:ag].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest3.id, hour_of_operation_id: mon_hash[:ah].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest3.id, hour_of_operation_id: mon_hash[:ai].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest3.id, hour_of_operation_id: mon_hash[:aj].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest3.id, hour_of_operation_id: mon_hash[:ak].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest3.id, hour_of_operation_id: mon_hash[:al].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest3.id, hour_of_operation_id: mon_hash[:am].id )

  rest5 = Restaurant.create!(
    restaurant_name: 'Via Carota',
    max_capacity: 30,
    restaurant_description: "West Village Tuscan restaurant Via Carota is a neighborhood place that has turned into a destination — in part due to the simple and rustic, yet always surprising cooking of beloved chefs Rita Sodi and Jody Williams. The menu changes regularly, and everything is worth sharing.",
    dining_style_id: casual_dining.id,
    phone: "(212) 271-4252",
    website_url: 'ViaCarota.com',
    dress_code_id: smart_casual.id,
    physical_address: "51 Grove St, New York, NY"
  )
  RestaurantHourOfOperation.create!(restaurant_id: rest5.id, hour_of_operation_id: mon_hash[:n].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest5.id, hour_of_operation_id: mon_hash[:o].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest5.id, hour_of_operation_id: mon_hash[:p_].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest5.id, hour_of_operation_id: mon_hash[:q].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest5.id, hour_of_operation_id: mon_hash[:s].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest5.id, hour_of_operation_id: mon_hash[:t].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest5.id, hour_of_operation_id: mon_hash[:u].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest5.id, hour_of_operation_id: mon_hash[:v].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest5.id, hour_of_operation_id: mon_hash[:w].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest5.id, hour_of_operation_id: mon_hash[:y].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest5.id, hour_of_operation_id: mon_hash[:z].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest5.id, hour_of_operation_id: mon_hash[:aa].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest5.id, hour_of_operation_id: mon_hash[:ab].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest5.id, hour_of_operation_id: mon_hash[:ac].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest5.id, hour_of_operation_id: mon_hash[:ad].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest5.id, hour_of_operation_id: mon_hash[:ae].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest5.id, hour_of_operation_id: mon_hash[:af].id )

end
