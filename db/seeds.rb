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

  RestaurantHourOfOperation.create!(restaurant_id: rest4.id, hour_of_operation_id: mon_hash[:q].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest4.id, hour_of_operation_id: mon_hash[:s].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest4.id, hour_of_operation_id: mon_hash[:t].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest4.id, hour_of_operation_id: mon_hash[:u].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest4.id, hour_of_operation_id: mon_hash[:v].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest4.id, hour_of_operation_id: mon_hash[:w].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest4.id, hour_of_operation_id: mon_hash[:y].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest4.id, hour_of_operation_id: mon_hash[:z].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest4.id, hour_of_operation_id: mon_hash[:aa].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest4.id, hour_of_operation_id: mon_hash[:ab].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest4.id, hour_of_operation_id: mon_hash[:ac].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest4.id, hour_of_operation_id: mon_hash[:ad].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest4.id, hour_of_operation_id: mon_hash[:ae].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest4.id, hour_of_operation_id: mon_hash[:af].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest4.id, hour_of_operation_id: mon_hash[:ag].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest4.id, hour_of_operation_id: mon_hash[:ah].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest4.id, hour_of_operation_id: mon_hash[:ai].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest4.id, hour_of_operation_id: mon_hash[:aj].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest4.id, hour_of_operation_id: mon_hash[:ak].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest4.id, hour_of_operation_id: mon_hash[:al].id )
  RestaurantHourOfOperation.create!(restaurant_id: rest4.id, hour_of_operation_id: mon_hash[:am].id )

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

  RestaurantHourOfOperation.create!(restaurant_id: rest5.id, hour_of_operation_id: mon_hash[:af].id )

# *********

  guanfusich = Restaurant.create!(
    restaurant_name: 'Guan Fu Sichuan',
    max_capacity: 20,
    restaurant_description: 'New York hardly suffers from a scarcity of good mapo tofu and Chongqing chicken. But the depth, complexity and finesse of the cooking at Guan Fu stand out. It’s probably the most cheffy Sichuan place in town, although that claim would be easier to support if Guan Fu’s owners didn’t refuse to name the chef in question. Whoever is in charge has some skills. The boiled fish with pickled vegetables, the “homemade” roasted fish, and the mapo tofu hold your attention with layer after layer of flavor, and only some of those layers come from chiles. Capsaicin freaks will want to test their strength against the cuttlefish in a charred green chile sauce that only looks harmless. The service, while not quite seamless, is gracious and solicitous, and the décor — wood paneling, gilded ceilings, padded seats wide enough for two — point to the new money trickling into Flushing.',
    dining_style_id: casual_dining.id,
    phone: "212-375-9001",
    website_url: 'guanfuny.com',
    dress_code_id: smart_casual.id,
    physical_address: "39-16 Prince Street, Queens, NY"
  )

  RestaurantHourOfOperation.create!(restaurant_id: guanfusich.id, hour_of_operation_id: mon_hash[:n].id )
  RestaurantHourOfOperation.create!(restaurant_id: guanfusich.id, hour_of_operation_id: mon_hash[:o].id )
  RestaurantHourOfOperation.create!(restaurant_id: guanfusich.id, hour_of_operation_id: mon_hash[:p_].id )
  RestaurantHourOfOperation.create!(restaurant_id: guanfusich.id, hour_of_operation_id: mon_hash[:q].id )
  RestaurantHourOfOperation.create!(restaurant_id: guanfusich.id, hour_of_operation_id: mon_hash[:s].id )
  RestaurantHourOfOperation.create!(restaurant_id: guanfusich.id, hour_of_operation_id: mon_hash[:t].id )
  RestaurantHourOfOperation.create!(restaurant_id: guanfusich.id, hour_of_operation_id: mon_hash[:u].id )
  RestaurantHourOfOperation.create!(restaurant_id: guanfusich.id, hour_of_operation_id: mon_hash[:v].id )
  RestaurantHourOfOperation.create!(restaurant_id: guanfusich.id, hour_of_operation_id: mon_hash[:w].id )
  RestaurantHourOfOperation.create!(restaurant_id: guanfusich.id, hour_of_operation_id: mon_hash[:y].id )
  RestaurantHourOfOperation.create!(restaurant_id: guanfusich.id, hour_of_operation_id: mon_hash[:z].id )
  RestaurantHourOfOperation.create!(restaurant_id: guanfusich.id, hour_of_operation_id: mon_hash[:aa].id )
  RestaurantHourOfOperation.create!(restaurant_id: guanfusich.id, hour_of_operation_id: mon_hash[:ab].id )
  RestaurantHourOfOperation.create!(restaurant_id: guanfusich.id, hour_of_operation_id: mon_hash[:ac].id )
  RestaurantHourOfOperation.create!(restaurant_id: guanfusich.id, hour_of_operation_id: mon_hash[:ad].id )
  RestaurantHourOfOperation.create!(restaurant_id: guanfusich.id, hour_of_operation_id: mon_hash[:ae].id )
  RestaurantHourOfOperation.create!(restaurant_id: guanfusich.id, hour_of_operation_id: mon_hash[:af].id )
  RestaurantHourOfOperation.create!(restaurant_id: guanfusich.id, hour_of_operation_id: mon_hash[:ag].id )
  RestaurantHourOfOperation.create!(restaurant_id: guanfusich.id, hour_of_operation_id: mon_hash[:ah].id )
  RestaurantHourOfOperation.create!(restaurant_id: guanfusich.id, hour_of_operation_id: mon_hash[:ai].id )
  RestaurantHourOfOperation.create!(restaurant_id: guanfusich.id, hour_of_operation_id: mon_hash[:aj].id )
  RestaurantHourOfOperation.create!(restaurant_id: guanfusich.id, hour_of_operation_id: mon_hash[:ak].id )
  RestaurantHourOfOperation.create!(restaurant_id: guanfusich.id, hour_of_operation_id: mon_hash[:al].id )
  RestaurantHourOfOperation.create!(restaurant_id: guanfusich.id, hour_of_operation_id: mon_hash[:am].id )

  # *********

    empellon = Restaurant.create!(
      restaurant_name: 'Empellón',
      max_capacity: 50,
      restaurant_description: 'If you walk in expecting the cuisine of Mexico, Empellón’s menu may leave you angry, disgruntled or confused. It’s Mexican cooking in the sense that Miles Davis’s “Sketches of Spain” is Spanish music: some of it is, the rest is made up, and somehow it all fits beautifully together. Even the tacos, not quite convincing initially despite their tacolike appearance, are better now and no longer usher you into food’s uncanny valley. Alex Stupak’s earlier Empellóns weren’t necessarily meant for everybody, but this one has a big Midtown space to fill; it needs to please crowds. That seems to have liberated him to make his plates more bright and colorful. He’s still a technical wizard, but the weird tricks he pulls now are almost always fun, like the platter of nachos under a scribble of a sea urchin-butter sauce that looks like melted Velveeta. ',
      dining_style_id: casual_dining.id,
      phone: "212-858-9365",
      website_url: 'empellon.com',
      dress_code_id: smart_casual.id,
      physical_address: "510 Madison Avenue, New York, NY"
    )

    RestaurantHourOfOperation.create!(restaurant_id: empellon.id, hour_of_operation_id: mon_hash[:n].id )
    RestaurantHourOfOperation.create!(restaurant_id: empellon.id, hour_of_operation_id: mon_hash[:o].id )
    RestaurantHourOfOperation.create!(restaurant_id: empellon.id, hour_of_operation_id: mon_hash[:p_].id )
    RestaurantHourOfOperation.create!(restaurant_id: empellon.id, hour_of_operation_id: mon_hash[:q].id )
    RestaurantHourOfOperation.create!(restaurant_id: empellon.id, hour_of_operation_id: mon_hash[:s].id )
    RestaurantHourOfOperation.create!(restaurant_id: empellon.id, hour_of_operation_id: mon_hash[:t].id )
    RestaurantHourOfOperation.create!(restaurant_id: empellon.id, hour_of_operation_id: mon_hash[:u].id )
    RestaurantHourOfOperation.create!(restaurant_id: empellon.id, hour_of_operation_id: mon_hash[:v].id )
    RestaurantHourOfOperation.create!(restaurant_id: empellon.id, hour_of_operation_id: mon_hash[:w].id )
    RestaurantHourOfOperation.create!(restaurant_id: empellon.id, hour_of_operation_id: mon_hash[:y].id )
    RestaurantHourOfOperation.create!(restaurant_id: empellon.id, hour_of_operation_id: mon_hash[:z].id )
    RestaurantHourOfOperation.create!(restaurant_id: empellon.id, hour_of_operation_id: mon_hash[:aa].id )
    RestaurantHourOfOperation.create!(restaurant_id: empellon.id, hour_of_operation_id: mon_hash[:ab].id )
    RestaurantHourOfOperation.create!(restaurant_id: empellon.id, hour_of_operation_id: mon_hash[:ac].id )
    RestaurantHourOfOperation.create!(restaurant_id: empellon.id, hour_of_operation_id: mon_hash[:ad].id )
    RestaurantHourOfOperation.create!(restaurant_id: empellon.id, hour_of_operation_id: mon_hash[:ae].id )
    RestaurantHourOfOperation.create!(restaurant_id: empellon.id, hour_of_operation_id: mon_hash[:af].id )
    RestaurantHourOfOperation.create!(restaurant_id: empellon.id, hour_of_operation_id: mon_hash[:ag].id )
    RestaurantHourOfOperation.create!(restaurant_id: empellon.id, hour_of_operation_id: mon_hash[:ah].id )
    RestaurantHourOfOperation.create!(restaurant_id: empellon.id, hour_of_operation_id: mon_hash[:ai].id )
    RestaurantHourOfOperation.create!(restaurant_id: empellon.id, hour_of_operation_id: mon_hash[:aj].id )
    RestaurantHourOfOperation.create!(restaurant_id: empellon.id, hour_of_operation_id: mon_hash[:ak].id )
    RestaurantHourOfOperation.create!(restaurant_id: empellon.id, hour_of_operation_id: mon_hash[:al].id )
    RestaurantHourOfOperation.create!(restaurant_id: empellon.id, hour_of_operation_id: mon_hash[:am].id )

    # *********

      grill = Restaurant.create!(
        restaurant_name: 'The Grill',
        max_capacity: 20,
        restaurant_description: 'The restaurateurs in the Major Food Group understand the theater of dining, and what to do with it, as well as anyone. They inherited two of the best stages in New York when they took over the former Four Seasons, and while they haven’t yet figured out how they can fully inhabit the old Pool Room, they’ve brought out the inherent drama of Philip Johnson’s Grill Room design to make a restaurant that’s relentlessly entertaining. From the oversize menus to the servers’ patter to the often outlandish prices, everything is slightly exaggerated, like the gestures of actors trying to reach the back row. Borrowing from American and Continental cuisine of the 1960s, the chef, Mario Carbone, has hit upon a style that’s both showy and substantial. Prime rib, carved tableside by a specialist who does nothing else, gets a whole smoked beef rib in a mustard rub as a garnish, which beats a parsley sprig. The elementally pure crab cake is made without breading; the top crust is a rosette of browned potato coins. The Grill has flaws, including the expense and the undercurrent of hustle, but it shares them with other restaurants. Its best qualities are all its own.',
        dining_style_id: casual_dining.id,
        phone: "212-375-9001",
        website_url: 'thegrillnewyork.com',
        dress_code_id: smart_casual.id,
        physical_address: "99 East 52nd Street, New York, NY"
      )

      RestaurantHourOfOperation.create!(restaurant_id:  grill.id, hour_of_operation_id: mon_hash[:n].id )
      RestaurantHourOfOperation.create!(restaurant_id:  grill.id, hour_of_operation_id: mon_hash[:o].id )
      RestaurantHourOfOperation.create!(restaurant_id:  grill.id, hour_of_operation_id: mon_hash[:p_].id )
      RestaurantHourOfOperation.create!(restaurant_id:  grill.id, hour_of_operation_id: mon_hash[:q].id )
      RestaurantHourOfOperation.create!(restaurant_id:  grill.id, hour_of_operation_id: mon_hash[:s].id )
      RestaurantHourOfOperation.create!(restaurant_id:  grill.id, hour_of_operation_id: mon_hash[:t].id )
      RestaurantHourOfOperation.create!(restaurant_id:  grill.id, hour_of_operation_id: mon_hash[:u].id )
      RestaurantHourOfOperation.create!(restaurant_id:  grill.id, hour_of_operation_id: mon_hash[:v].id )
      RestaurantHourOfOperation.create!(restaurant_id:  grill.id, hour_of_operation_id: mon_hash[:w].id )
      RestaurantHourOfOperation.create!(restaurant_id:  grill.id, hour_of_operation_id: mon_hash[:y].id )
      RestaurantHourOfOperation.create!(restaurant_id:  grill.id, hour_of_operation_id: mon_hash[:z].id )
      RestaurantHourOfOperation.create!(restaurant_id:  grill.id, hour_of_operation_id: mon_hash[:aa].id )
      RestaurantHourOfOperation.create!(restaurant_id:  grill.id, hour_of_operation_id: mon_hash[:ab].id )
      RestaurantHourOfOperation.create!(restaurant_id:  grill.id, hour_of_operation_id: mon_hash[:ac].id )
      RestaurantHourOfOperation.create!(restaurant_id:  grill.id, hour_of_operation_id: mon_hash[:ad].id )
      RestaurantHourOfOperation.create!(restaurant_id:  grill.id, hour_of_operation_id: mon_hash[:ae].id )
      RestaurantHourOfOperation.create!(restaurant_id:  grill.id, hour_of_operation_id: mon_hash[:af].id )
      RestaurantHourOfOperation.create!(restaurant_id:  grill.id, hour_of_operation_id: mon_hash[:ag].id )
      RestaurantHourOfOperation.create!(restaurant_id:  grill.id, hour_of_operation_id: mon_hash[:ah].id )
      RestaurantHourOfOperation.create!(restaurant_id:  grill.id, hour_of_operation_id: mon_hash[:ai].id )
      RestaurantHourOfOperation.create!(restaurant_id:  grill.id, hour_of_operation_id: mon_hash[:aj].id )
      RestaurantHourOfOperation.create!(restaurant_id:  grill.id, hour_of_operation_id: mon_hash[:ak].id )
      RestaurantHourOfOperation.create!(restaurant_id:  grill.id, hour_of_operation_id: mon_hash[:al].id )
      RestaurantHourOfOperation.create!(restaurant_id:  grill.id, hour_of_operation_id: mon_hash[:am].id )

      # *********

        king = Restaurant.create!(
          restaurant_name: 'King',
          max_capacity: 60,
          restaurant_description: "Occasionally I suspect that I and everyone else involved in the local restaurant scene have lost our minds. The next time that feeling takes hold, I’ll go to King. Everything there makes sense. The cocktails are straightforward little stress-reducers, just complicated enough to get your attention. The little square dining room looks exactly like a place to eat. The chefs, Clare de Boer and Jess Shadbolt, make a compelling case for bringing back the kind of refined-rustic seasonal cooking drawn from southern France and northern Italy that many young chefs have turned their backs on. Their cooking is a marvel of attentiveness and balance. ",
          dining_style_id: casual_dining.id,
          phone: "917-825-1618",
          website_url: 'tkingrestaurant.nyc',
          dress_code_id: smart_casual.id,
          physical_address: "18 King Street, New York, NY"
        )

        RestaurantHourOfOperation.create!(restaurant_id: king.id, hour_of_operation_id: mon_hash[:n].id )
        RestaurantHourOfOperation.create!(restaurant_id: king.id, hour_of_operation_id: mon_hash[:o].id )
        RestaurantHourOfOperation.create!(restaurant_id: king.id, hour_of_operation_id: mon_hash[:p_].id )
        RestaurantHourOfOperation.create!(restaurant_id: king.id, hour_of_operation_id: mon_hash[:q].id )
        RestaurantHourOfOperation.create!(restaurant_id: king.id, hour_of_operation_id: mon_hash[:s].id )
        RestaurantHourOfOperation.create!(restaurant_id: king.id, hour_of_operation_id: mon_hash[:t].id )
        RestaurantHourOfOperation.create!(restaurant_id: king.id, hour_of_operation_id: mon_hash[:u].id )
        RestaurantHourOfOperation.create!(restaurant_id: king.id, hour_of_operation_id: mon_hash[:v].id )
        RestaurantHourOfOperation.create!(restaurant_id: king.id, hour_of_operation_id: mon_hash[:w].id )
        RestaurantHourOfOperation.create!(restaurant_id: king.id, hour_of_operation_id: mon_hash[:y].id )
        RestaurantHourOfOperation.create!(restaurant_id: king.id, hour_of_operation_id: mon_hash[:z].id )
        RestaurantHourOfOperation.create!(restaurant_id: king.id, hour_of_operation_id: mon_hash[:aa].id )
        RestaurantHourOfOperation.create!(restaurant_id: king.id, hour_of_operation_id: mon_hash[:ab].id )
        RestaurantHourOfOperation.create!(restaurant_id: king.id, hour_of_operation_id: mon_hash[:ac].id )
        RestaurantHourOfOperation.create!(restaurant_id: king.id, hour_of_operation_id: mon_hash[:ad].id )
        RestaurantHourOfOperation.create!(restaurant_id: king.id, hour_of_operation_id: mon_hash[:ae].id )
        RestaurantHourOfOperation.create!(restaurant_id: king.id, hour_of_operation_id: mon_hash[:af].id )
        RestaurantHourOfOperation.create!(restaurant_id: king.id, hour_of_operation_id: mon_hash[:ag].id )
        RestaurantHourOfOperation.create!(restaurant_id: king.id, hour_of_operation_id: mon_hash[:ah].id )
        RestaurantHourOfOperation.create!(restaurant_id: king.id, hour_of_operation_id: mon_hash[:ai].id )
        RestaurantHourOfOperation.create!(restaurant_id: king.id, hour_of_operation_id: mon_hash[:aj].id )
        RestaurantHourOfOperation.create!(restaurant_id: king.id, hour_of_operation_id: mon_hash[:ak].id )
        RestaurantHourOfOperation.create!(restaurant_id: king.id, hour_of_operation_id: mon_hash[:al].id )
        RestaurantHourOfOperation.create!(restaurant_id: king.id, hour_of_operation_id: mon_hash[:am].id )

        # *********

          florabar = Restaurant.create!(
            restaurant_name: 'Flora Bar',
            max_capacity: 30,
            restaurant_description: "A great restaurant anywhere on the Upper East Side is newsworthy. But Flora Bar happens to make glorious use of the bottom floor of the Met Breuer museum, a brutalist landmark that grows more impressive the more closely you look. (The view is of Marcel Breuer’s naked-concrete moat and drawbridge off Madison Avenue.) Ignacio Mattos, the Uruguay-born chef of Estela and Café Altro Paradiso, does his most refined cooking here; the food, like caviar on a thin, unfolded omelet, is elegant and sumptuous. Even the radicchio shimmers. ",
            dining_style_id: casual_dining.id,
            phone: "646-558-5383",
            website_url: 'florabarnyc.com',
            dress_code_id: smart_casual.id,
            physical_address: "945 Madison Avenue, New York, NY"
          )

          RestaurantHourOfOperation.create!(restaurant_id: florabar.id, hour_of_operation_id: mon_hash[:n].id )
          RestaurantHourOfOperation.create!(restaurant_id: florabar.id, hour_of_operation_id: mon_hash[:o].id )
          RestaurantHourOfOperation.create!(restaurant_id: florabar.id, hour_of_operation_id: mon_hash[:p_].id )
          RestaurantHourOfOperation.create!(restaurant_id: florabar.id, hour_of_operation_id: mon_hash[:q].id )
          RestaurantHourOfOperation.create!(restaurant_id: florabar.id, hour_of_operation_id: mon_hash[:s].id )
          RestaurantHourOfOperation.create!(restaurant_id: florabar.id, hour_of_operation_id: mon_hash[:t].id )
          RestaurantHourOfOperation.create!(restaurant_id: florabar.id, hour_of_operation_id: mon_hash[:u].id )
          RestaurantHourOfOperation.create!(restaurant_id: florabar.id, hour_of_operation_id: mon_hash[:v].id )
          RestaurantHourOfOperation.create!(restaurant_id: florabar.id, hour_of_operation_id: mon_hash[:w].id )
          RestaurantHourOfOperation.create!(restaurant_id: florabar.id, hour_of_operation_id: mon_hash[:y].id )
          RestaurantHourOfOperation.create!(restaurant_id: florabar.id, hour_of_operation_id: mon_hash[:z].id )
          RestaurantHourOfOperation.create!(restaurant_id: florabar.id, hour_of_operation_id: mon_hash[:aa].id )
          RestaurantHourOfOperation.create!(restaurant_id: florabar.id, hour_of_operation_id: mon_hash[:ab].id )
          RestaurantHourOfOperation.create!(restaurant_id: florabar.id, hour_of_operation_id: mon_hash[:ac].id )
          RestaurantHourOfOperation.create!(restaurant_id: florabar.id, hour_of_operation_id: mon_hash[:ad].id )
          RestaurantHourOfOperation.create!(restaurant_id: florabar.id, hour_of_operation_id: mon_hash[:ae].id )
          RestaurantHourOfOperation.create!(restaurant_id: florabar.id, hour_of_operation_id: mon_hash[:af].id )
          RestaurantHourOfOperation.create!(restaurant_id: florabar.id, hour_of_operation_id: mon_hash[:ag].id )
          RestaurantHourOfOperation.create!(restaurant_id: florabar.id, hour_of_operation_id: mon_hash[:ah].id )
          RestaurantHourOfOperation.create!(restaurant_id: florabar.id, hour_of_operation_id: mon_hash[:ai].id )
          RestaurantHourOfOperation.create!(restaurant_id: florabar.id, hour_of_operation_id: mon_hash[:aj].id )
          RestaurantHourOfOperation.create!(restaurant_id: florabar.id, hour_of_operation_id: mon_hash[:ak].id )
          RestaurantHourOfOperation.create!(restaurant_id: florabar.id, hour_of_operation_id: mon_hash[:al].id )
          RestaurantHourOfOperation.create!(restaurant_id: florabar.id, hour_of_operation_id: mon_hash[:am].id )

          # *********

            chum = Restaurant.create!(
              restaurant_name: 'Chumley’s',
              max_capacity: 20,
              restaurant_description: "Victoria Blamey lasted just over a year as chef, but by the time she left early this month she had established herself as a chef worth following. And she did it at Chumley’s, the revivified speakeasy where just about everybody drank at one time or another in the past, and where just about nobody remembered eating. Ms. Blamey cooked tavern food never before seen in any tavern on this planet, like a double cheeseburger basted in bone marrow, or a warm pretzel and trout roe with onion dip so well-made it seemed like a hallucination. And then there were uncategorizable inventions like the Dungeness crab potpie, loosely inspired by an abalone dish from Chile, where Ms. Blamey grew up. The interior was brand new, its nostalgia carefully stage-managed and somewhat cloying, but with food like that and a cocktail or two, it didn’t matter.  ",
              dining_style_id: casual_dining.id,
              phone: "212-675-2081",
              website_url: 'chumleysnewyork.com',
              dress_code_id: smart_casual.id,
              physical_address: "86 Bedford Street, New York, NY"
            )

            RestaurantHourOfOperation.create!(restaurant_id: chum.id, hour_of_operation_id: mon_hash[:n].id )
            RestaurantHourOfOperation.create!(restaurant_id: chum.id, hour_of_operation_id: mon_hash[:o].id )
            RestaurantHourOfOperation.create!(restaurant_id: chum.id, hour_of_operation_id: mon_hash[:p_].id )
            RestaurantHourOfOperation.create!(restaurant_id: chum.id, hour_of_operation_id: mon_hash[:q].id )
            RestaurantHourOfOperation.create!(restaurant_id: chum.id, hour_of_operation_id: mon_hash[:s].id )
            RestaurantHourOfOperation.create!(restaurant_id: chum.id, hour_of_operation_id: mon_hash[:t].id )
            RestaurantHourOfOperation.create!(restaurant_id: chum.id, hour_of_operation_id: mon_hash[:u].id )
            RestaurantHourOfOperation.create!(restaurant_id: chum.id, hour_of_operation_id: mon_hash[:v].id )
            RestaurantHourOfOperation.create!(restaurant_id: chum.id, hour_of_operation_id: mon_hash[:w].id )
            RestaurantHourOfOperation.create!(restaurant_id: chum.id, hour_of_operation_id: mon_hash[:y].id )
            RestaurantHourOfOperation.create!(restaurant_id: chum.id, hour_of_operation_id: mon_hash[:z].id )
            RestaurantHourOfOperation.create!(restaurant_id: chum.id, hour_of_operation_id: mon_hash[:aa].id )
            RestaurantHourOfOperation.create!(restaurant_id: chum.id, hour_of_operation_id: mon_hash[:ab].id )
            RestaurantHourOfOperation.create!(restaurant_id: chum.id, hour_of_operation_id: mon_hash[:ac].id )
            RestaurantHourOfOperation.create!(restaurant_id: chum.id, hour_of_operation_id: mon_hash[:ad].id )
            RestaurantHourOfOperation.create!(restaurant_id: chum.id, hour_of_operation_id: mon_hash[:ae].id )
            RestaurantHourOfOperation.create!(restaurant_id: chum.id, hour_of_operation_id: mon_hash[:af].id )
            RestaurantHourOfOperation.create!(restaurant_id: chum.id, hour_of_operation_id: mon_hash[:ag].id )
            RestaurantHourOfOperation.create!(restaurant_id: chum.id, hour_of_operation_id: mon_hash[:ah].id )
            RestaurantHourOfOperation.create!(restaurant_id: chum.id, hour_of_operation_id: mon_hash[:ai].id )
            RestaurantHourOfOperation.create!(restaurant_id: chum.id, hour_of_operation_id: mon_hash[:aj].id )
            RestaurantHourOfOperation.create!(restaurant_id: chum.id, hour_of_operation_id: mon_hash[:ak].id )
            RestaurantHourOfOperation.create!(restaurant_id: chum.id, hour_of_operation_id: mon_hash[:al].id )
            RestaurantHourOfOperation.create!(restaurant_id: chum.id, hour_of_operation_id: mon_hash[:am].id )

            # *********

              littletong = Restaurant.create!(
                restaurant_name: 'Little Tong Noodle Shop',
                max_capacity: 10,
                restaurant_description: "This exciting evocation of Yunnanese cuisine is the project of a chef born in a different Chinese province, Sichuan. Simone Tong has a wonderful feeling for the fresh vibrancy of Yunnan, building up tension with salty, hot, sour and sweet ingredients, most of them local stand-ins. Her tribute to a street snack from Dali, a backpacker mecca, uses local purple potatoes and curds from Beecher’s Handmade Cheese, off Union Square. The main event is mixian, the long, slender, elusively slippery rice noodle; their mild flavor defers to the fireworks of Ms. Tong’s broths. Service is included in the prices, which don’t go above $15.  ",
                dining_style_id: casual_dining.id,
                phone: "929-367-8664",
                website_url: 'littletong.com',
                dress_code_id: smart_casual.id,
                physical_address: "177 First Avenue, New York, NY"
              )

              RestaurantHourOfOperation.create!(restaurant_id: littletong.id, hour_of_operation_id: mon_hash[:n].id )
              RestaurantHourOfOperation.create!(restaurant_id: littletong.id, hour_of_operation_id: mon_hash[:o].id )
              RestaurantHourOfOperation.create!(restaurant_id: littletong.id, hour_of_operation_id: mon_hash[:p_].id )
              RestaurantHourOfOperation.create!(restaurant_id: littletong.id, hour_of_operation_id: mon_hash[:q].id )
              RestaurantHourOfOperation.create!(restaurant_id: littletong.id, hour_of_operation_id: mon_hash[:s].id )
              RestaurantHourOfOperation.create!(restaurant_id: littletong.id, hour_of_operation_id: mon_hash[:t].id )
              RestaurantHourOfOperation.create!(restaurant_id: littletong.id, hour_of_operation_id: mon_hash[:u].id )
              RestaurantHourOfOperation.create!(restaurant_id: littletong.id, hour_of_operation_id: mon_hash[:v].id )
              RestaurantHourOfOperation.create!(restaurant_id: littletong.id, hour_of_operation_id: mon_hash[:w].id )
              RestaurantHourOfOperation.create!(restaurant_id: littletong.id, hour_of_operation_id: mon_hash[:y].id )
              RestaurantHourOfOperation.create!(restaurant_id: littletong.id, hour_of_operation_id: mon_hash[:z].id )
              RestaurantHourOfOperation.create!(restaurant_id: littletong.id, hour_of_operation_id: mon_hash[:aa].id )
              RestaurantHourOfOperation.create!(restaurant_id: littletong.id, hour_of_operation_id: mon_hash[:ab].id )
              RestaurantHourOfOperation.create!(restaurant_id: littletong.id, hour_of_operation_id: mon_hash[:ac].id )
              RestaurantHourOfOperation.create!(restaurant_id: littletong.id, hour_of_operation_id: mon_hash[:ad].id )
              RestaurantHourOfOperation.create!(restaurant_id: littletong.id, hour_of_operation_id: mon_hash[:ae].id )
              RestaurantHourOfOperation.create!(restaurant_id: littletong.id, hour_of_operation_id: mon_hash[:af].id )
              RestaurantHourOfOperation.create!(restaurant_id: littletong.id, hour_of_operation_id: mon_hash[:ag].id )
              RestaurantHourOfOperation.create!(restaurant_id: littletong.id, hour_of_operation_id: mon_hash[:ah].id )
              RestaurantHourOfOperation.create!(restaurant_id: littletong.id, hour_of_operation_id: mon_hash[:ai].id )
              RestaurantHourOfOperation.create!(restaurant_id: littletong.id, hour_of_operation_id: mon_hash[:aj].id )
              RestaurantHourOfOperation.create!(restaurant_id: littletong.id, hour_of_operation_id: mon_hash[:ak].id )
              RestaurantHourOfOperation.create!(restaurant_id: littletong.id, hour_of_operation_id: mon_hash[:al].id )
              RestaurantHourOfOperation.create!(restaurant_id: littletong.id, hour_of_operation_id: mon_hash[:am].id )

              # *********

                uglybaby = Restaurant.create!(
                  restaurant_name: 'Ugly Baby',
                  max_capacity: 20,
                  restaurant_description: "One dish, a dry curry from southern Thailand in which chiles are permanently fused with beef, is marked “brutally spicy” on the menu. Another, a northern Thai duck larb, isn’t, but should be. The rest of the food at Ugly Baby is more forgiving, but none of it is compromising: the chef, Sirichai Sreparplarn, is intent on giving Brooklyn an accurate taste of his native country’s cooking. Servers aren’t always reliable guides to what’s hot and what’s not. The best strategy is to order as much as possible, then go on a tour of the table.  ",
                  dining_style_id: casual_dining.id,
                  phone: "347-689-3075",
                  website_url: 'uglybabynyc.com',
                  dress_code_id: smart_casual.id,
                  physical_address: "407 Smith Street, Brooklyn, NY"
                )

                RestaurantHourOfOperation.create!(restaurant_id: uglybaby.id, hour_of_operation_id: mon_hash[:n].id )
                RestaurantHourOfOperation.create!(restaurant_id: uglybaby.id, hour_of_operation_id: mon_hash[:o].id )
                RestaurantHourOfOperation.create!(restaurant_id: uglybaby.id, hour_of_operation_id: mon_hash[:p_].id )
                RestaurantHourOfOperation.create!(restaurant_id: uglybaby.id, hour_of_operation_id: mon_hash[:q].id )
                RestaurantHourOfOperation.create!(restaurant_id: uglybaby.id, hour_of_operation_id: mon_hash[:s].id )
                RestaurantHourOfOperation.create!(restaurant_id: uglybaby.id, hour_of_operation_id: mon_hash[:t].id )
                RestaurantHourOfOperation.create!(restaurant_id: uglybaby.id, hour_of_operation_id: mon_hash[:u].id )
                RestaurantHourOfOperation.create!(restaurant_id: uglybaby.id, hour_of_operation_id: mon_hash[:v].id )
                RestaurantHourOfOperation.create!(restaurant_id: uglybaby.id, hour_of_operation_id: mon_hash[:w].id )
                RestaurantHourOfOperation.create!(restaurant_id: uglybaby.id, hour_of_operation_id: mon_hash[:y].id )
                RestaurantHourOfOperation.create!(restaurant_id: uglybaby.id, hour_of_operation_id: mon_hash[:z].id )
                RestaurantHourOfOperation.create!(restaurant_id: uglybaby.id, hour_of_operation_id: mon_hash[:aa].id )
                RestaurantHourOfOperation.create!(restaurant_id: uglybaby.id, hour_of_operation_id: mon_hash[:ab].id )
                RestaurantHourOfOperation.create!(restaurant_id: uglybaby.id, hour_of_operation_id: mon_hash[:ac].id )
                RestaurantHourOfOperation.create!(restaurant_id: uglybaby.id, hour_of_operation_id: mon_hash[:ad].id )
                RestaurantHourOfOperation.create!(restaurant_id: uglybaby.id, hour_of_operation_id: mon_hash[:ae].id )
                RestaurantHourOfOperation.create!(restaurant_id: uglybaby.id, hour_of_operation_id: mon_hash[:af].id )
                RestaurantHourOfOperation.create!(restaurant_id: uglybaby.id, hour_of_operation_id: mon_hash[:ag].id )
                RestaurantHourOfOperation.create!(restaurant_id: uglybaby.id, hour_of_operation_id: mon_hash[:ah].id )
                RestaurantHourOfOperation.create!(restaurant_id: uglybaby.id, hour_of_operation_id: mon_hash[:ai].id )
                RestaurantHourOfOperation.create!(restaurant_id: uglybaby.id, hour_of_operation_id: mon_hash[:aj].id )
                RestaurantHourOfOperation.create!(restaurant_id: uglybaby.id, hour_of_operation_id: mon_hash[:ak].id )
                RestaurantHourOfOperation.create!(restaurant_id: uglybaby.id, hour_of_operation_id: mon_hash[:al].id )
                RestaurantHourOfOperation.create!(restaurant_id: uglybaby.id, hour_of_operation_id: mon_hash[:am].id )

                # *********

                  ladybird = Restaurant.create!(
                    restaurant_name: 'Ladybird',
                    max_capacity: 20,
                    restaurant_description: "Because veganism is almost always an ethical or moral choice, its fare is often amply spiced with condescension in that way gymgoers pepper chats with talk of “discipline.” Vegans are mindful about what they put in their bodies—aren’t you? How refreshing, then, that Ladybird serves what can only be called vegan drunk food: late-night breaded mac-and-cheese balls meant to be hand-dipped in excellent buffalo sauce or nondairy ranch dressing. Everyone deserves to embrace their sloppy, slurred side. Beyond late-night, the avocado plate—a textural and flavorful winner with seaweed, black garlic ponzu and fried avocado croquettes atop fanned raw avocado—is due beatification as the patron saint of conversion to veganism. Beware the heat from the spiced broccoli in the artichoke-chardonnay fondue platter! ",
                    dining_style_id: casual_dining.id,
                    phone: "917-261-5524   ",
                    website_url: 'www.ladybirdny.com',
                    dress_code_id: smart_casual.id,
                    physical_address: "111 E 7th Street, New York, NY"
                  )

                  RestaurantHourOfOperation.create!(restaurant_id: ladybird.id, hour_of_operation_id: mon_hash[:n].id )
                  RestaurantHourOfOperation.create!(restaurant_id: ladybird.id, hour_of_operation_id: mon_hash[:o].id )
                  RestaurantHourOfOperation.create!(restaurant_id: ladybird.id, hour_of_operation_id: mon_hash[:p_].id )
                  RestaurantHourOfOperation.create!(restaurant_id: ladybird.id, hour_of_operation_id: mon_hash[:q].id )
                  RestaurantHourOfOperation.create!(restaurant_id: ladybird.id, hour_of_operation_id: mon_hash[:s].id )
                  RestaurantHourOfOperation.create!(restaurant_id: ladybird.id, hour_of_operation_id: mon_hash[:t].id )
                  RestaurantHourOfOperation.create!(restaurant_id: ladybird.id, hour_of_operation_id: mon_hash[:u].id )
                  RestaurantHourOfOperation.create!(restaurant_id: ladybird.id, hour_of_operation_id: mon_hash[:v].id )
                  RestaurantHourOfOperation.create!(restaurant_id: ladybird.id, hour_of_operation_id: mon_hash[:w].id )
                  RestaurantHourOfOperation.create!(restaurant_id: ladybird.id, hour_of_operation_id: mon_hash[:y].id )
                  RestaurantHourOfOperation.create!(restaurant_id: ladybird.id, hour_of_operation_id: mon_hash[:z].id )
                  RestaurantHourOfOperation.create!(restaurant_id: ladybird.id, hour_of_operation_id: mon_hash[:aa].id )
                  RestaurantHourOfOperation.create!(restaurant_id: ladybird.id, hour_of_operation_id: mon_hash[:ab].id )
                  RestaurantHourOfOperation.create!(restaurant_id: ladybird.id, hour_of_operation_id: mon_hash[:ac].id )
                  RestaurantHourOfOperation.create!(restaurant_id: ladybird.id, hour_of_operation_id: mon_hash[:ad].id )
                  RestaurantHourOfOperation.create!(restaurant_id: ladybird.id, hour_of_operation_id: mon_hash[:ae].id )
                  RestaurantHourOfOperation.create!(restaurant_id: ladybird.id, hour_of_operation_id: mon_hash[:af].id )
                  RestaurantHourOfOperation.create!(restaurant_id: ladybird.id, hour_of_operation_id: mon_hash[:ag].id )
                  RestaurantHourOfOperation.create!(restaurant_id: ladybird.id, hour_of_operation_id: mon_hash[:ah].id )
                  RestaurantHourOfOperation.create!(restaurant_id: ladybird.id, hour_of_operation_id: mon_hash[:ai].id )
                  RestaurantHourOfOperation.create!(restaurant_id: ladybird.id, hour_of_operation_id: mon_hash[:aj].id )
                  RestaurantHourOfOperation.create!(restaurant_id: ladybird.id, hour_of_operation_id: mon_hash[:ak].id )
                  RestaurantHourOfOperation.create!(restaurant_id: ladybird.id, hour_of_operation_id: mon_hash[:al].id )
                  RestaurantHourOfOperation.create!(restaurant_id: ladybird.id, hour_of_operation_id: mon_hash[:am].id )

                  # *********

                    mamastoo = Restaurant.create!(
                      restaurant_name: 'Mama’s Too',
                      max_capacity: 20,
                      restaurant_description: "The regular “house slice” combines the darkly caramelized, bready crust and pure-tomato flavor of a Neapolitan pie with the grab-and-go portability of a streetcorner slice. The squares, meanwhile, merge the Sicilian, Detroit, and Roman pizza al taglio styles in one dark, crunchy whole, fringed with what is know as a “frico crust” — the edges of browned cheese where the dough meets the pan. The pepperoni square in particular is an unstoppable force. Mama’s Too makes experimental pizza for the people. ",
                      dining_style_id: casual_dining.id,
                      phone: "212-510-7256",
                      website_url: 'mamastoo.com',
                      dress_code_id: smart_casual.id,
                      physical_address: "2750 Broadway, New York, NY"
                    )

                    RestaurantHourOfOperation.create!(restaurant_id: mamastoo.id, hour_of_operation_id: mon_hash[:n].id )
                    RestaurantHourOfOperation.create!(restaurant_id: mamastoo.id, hour_of_operation_id: mon_hash[:o].id )
                    RestaurantHourOfOperation.create!(restaurant_id: mamastoo.id, hour_of_operation_id: mon_hash[:p_].id )
                    RestaurantHourOfOperation.create!(restaurant_id: mamastoo.id, hour_of_operation_id: mon_hash[:q].id )
                    RestaurantHourOfOperation.create!(restaurant_id: mamastoo.id, hour_of_operation_id: mon_hash[:s].id )
                    RestaurantHourOfOperation.create!(restaurant_id: mamastoo.id, hour_of_operation_id: mon_hash[:t].id )
                    RestaurantHourOfOperation.create!(restaurant_id: mamastoo.id, hour_of_operation_id: mon_hash[:u].id )
                    RestaurantHourOfOperation.create!(restaurant_id: mamastoo.id, hour_of_operation_id: mon_hash[:v].id )
                    RestaurantHourOfOperation.create!(restaurant_id: mamastoo.id, hour_of_operation_id: mon_hash[:w].id )
                    RestaurantHourOfOperation.create!(restaurant_id: mamastoo.id, hour_of_operation_id: mon_hash[:y].id )
                    RestaurantHourOfOperation.create!(restaurant_id: mamastoo.id, hour_of_operation_id: mon_hash[:z].id )
                    RestaurantHourOfOperation.create!(restaurant_id: mamastoo.id, hour_of_operation_id: mon_hash[:aa].id )
                    RestaurantHourOfOperation.create!(restaurant_id: mamastoo.id, hour_of_operation_id: mon_hash[:ab].id )
                    RestaurantHourOfOperation.create!(restaurant_id: mamastoo.id, hour_of_operation_id: mon_hash[:ac].id )
                    RestaurantHourOfOperation.create!(restaurant_id: mamastoo.id, hour_of_operation_id: mon_hash[:ad].id )
                    RestaurantHourOfOperation.create!(restaurant_id: mamastoo.id, hour_of_operation_id: mon_hash[:ae].id )
                    RestaurantHourOfOperation.create!(restaurant_id: mamastoo.id, hour_of_operation_id: mon_hash[:af].id )
                    RestaurantHourOfOperation.create!(restaurant_id: mamastoo.id, hour_of_operation_id: mon_hash[:ag].id )
                    RestaurantHourOfOperation.create!(restaurant_id: mamastoo.id, hour_of_operation_id: mon_hash[:ah].id )
                    RestaurantHourOfOperation.create!(restaurant_id: mamastoo.id, hour_of_operation_id: mon_hash[:ai].id )
                    RestaurantHourOfOperation.create!(restaurant_id: mamastoo.id, hour_of_operation_id: mon_hash[:aj].id )
                    RestaurantHourOfOperation.create!(restaurant_id: mamastoo.id, hour_of_operation_id: mon_hash[:ak].id )
                    RestaurantHourOfOperation.create!(restaurant_id: mamastoo.id, hour_of_operation_id: mon_hash[:al].id )
                    RestaurantHourOfOperation.create!(restaurant_id: mamastoo.id, hour_of_operation_id: mon_hash[:am].id )

                    # *********

                      patsys = Restaurant.create!(
                        restaurant_name: 'Patsy’s Pizzeria',
                        max_capacity: 20,
                        restaurant_description: "The slices doled out in Patsy’s takeout wing next to the sit-down restaurant are in a style of their own, one with its roots in the brick-oven pies of early immigrants from Naples. Sauce is applied as if with a paintbrush to the thin and somewhat floppy crust, and the pizza is lightly charred in one of the city’s last coal-heated ovens. The slices have some of the old-time flavor you get at John’s of Bleecker Street or Totonno, both rigidly antislice. ",
                        dining_style_id: casual_dining.id,
                        phone: "212-510-7256",
                        website_url: 'thepatsyspizza.com',
                        dress_code_id: smart_casual.id,
                        physical_address: "2287 First Avenue, New York, NY"
                      )

                      RestaurantHourOfOperation.create!(restaurant_id: patsys.id, hour_of_operation_id: mon_hash[:n].id )
                      RestaurantHourOfOperation.create!(restaurant_id: patsys.id, hour_of_operation_id: mon_hash[:o].id )
                      RestaurantHourOfOperation.create!(restaurant_id: patsys.id, hour_of_operation_id: mon_hash[:p_].id )
                      RestaurantHourOfOperation.create!(restaurant_id: patsys.id, hour_of_operation_id: mon_hash[:q].id )
                      RestaurantHourOfOperation.create!(restaurant_id: patsys.id, hour_of_operation_id: mon_hash[:s].id )
                      RestaurantHourOfOperation.create!(restaurant_id: patsys.id, hour_of_operation_id: mon_hash[:t].id )
                      RestaurantHourOfOperation.create!(restaurant_id: patsys.id, hour_of_operation_id: mon_hash[:u].id )
                      RestaurantHourOfOperation.create!(restaurant_id: patsys.id, hour_of_operation_id: mon_hash[:v].id )
                      RestaurantHourOfOperation.create!(restaurant_id: patsys.id, hour_of_operation_id: mon_hash[:w].id )
                      RestaurantHourOfOperation.create!(restaurant_id: patsys.id, hour_of_operation_id: mon_hash[:y].id )
                      RestaurantHourOfOperation.create!(restaurant_id: patsys.id, hour_of_operation_id: mon_hash[:z].id )
                      RestaurantHourOfOperation.create!(restaurant_id: patsys.id, hour_of_operation_id: mon_hash[:aa].id )
                      RestaurantHourOfOperation.create!(restaurant_id: patsys.id, hour_of_operation_id: mon_hash[:ab].id )
                      RestaurantHourOfOperation.create!(restaurant_id: patsys.id, hour_of_operation_id: mon_hash[:ac].id )
                      RestaurantHourOfOperation.create!(restaurant_id: patsys.id, hour_of_operation_id: mon_hash[:ad].id )
                      RestaurantHourOfOperation.create!(restaurant_id: patsys.id, hour_of_operation_id: mon_hash[:ae].id )
                      RestaurantHourOfOperation.create!(restaurant_id: patsys.id, hour_of_operation_id: mon_hash[:af].id )
                      RestaurantHourOfOperation.create!(restaurant_id: patsys.id, hour_of_operation_id: mon_hash[:ag].id )
                      RestaurantHourOfOperation.create!(restaurant_id: patsys.id, hour_of_operation_id: mon_hash[:ah].id )
                      RestaurantHourOfOperation.create!(restaurant_id: patsys.id, hour_of_operation_id: mon_hash[:ai].id )
                      RestaurantHourOfOperation.create!(restaurant_id: patsys.id, hour_of_operation_id: mon_hash[:aj].id )
                      RestaurantHourOfOperation.create!(restaurant_id: patsys.id, hour_of_operation_id: mon_hash[:ak].id )
                      RestaurantHourOfOperation.create!(restaurant_id: patsys.id, hour_of_operation_id: mon_hash[:al].id )
                      RestaurantHourOfOperation.create!(restaurant_id: patsys.id, hour_of_operation_id: mon_hash[:am].id )

                      # *********

                        joes = Restaurant.create!(
                          restaurant_name: 'Joe’s Pizza',
                          max_capacity: 20,
                          restaurant_description: "When neoclassical slice-shop owners say they emulate the old-school joints that still obsess over quality, Joe’s is one of the places they’re talking about. The slices taste and look the way they did 30 years ago; there’s still a red border of pure tomato next to the outer crust, and the pies aren’t pulled from the oven until the cheese has a suntan. ",
                          dining_style_id: casual_dining.id,
                          phone: "212-366-1182",
                          website_url: 'oespizzanyc.com',
                          dress_code_id: smart_casual.id,
                          physical_address: "7 Carmine Street , New York, NY"
                        )

                        RestaurantHourOfOperation.create!(restaurant_id: joes.id, hour_of_operation_id: mon_hash[:n].id )
                        RestaurantHourOfOperation.create!(restaurant_id: joes.id, hour_of_operation_id: mon_hash[:o].id )
                        RestaurantHourOfOperation.create!(restaurant_id: joes.id, hour_of_operation_id: mon_hash[:p_].id )
                        RestaurantHourOfOperation.create!(restaurant_id: joes.id, hour_of_operation_id: mon_hash[:q].id )
                        RestaurantHourOfOperation.create!(restaurant_id: joes.id, hour_of_operation_id: mon_hash[:s].id )
                        RestaurantHourOfOperation.create!(restaurant_id: joes.id, hour_of_operation_id: mon_hash[:t].id )
                        RestaurantHourOfOperation.create!(restaurant_id: joes.id, hour_of_operation_id: mon_hash[:u].id )
                        RestaurantHourOfOperation.create!(restaurant_id: joes.id, hour_of_operation_id: mon_hash[:v].id )
                        RestaurantHourOfOperation.create!(restaurant_id: joes.id, hour_of_operation_id: mon_hash[:w].id )
                        RestaurantHourOfOperation.create!(restaurant_id: joes.id, hour_of_operation_id: mon_hash[:y].id )
                        RestaurantHourOfOperation.create!(restaurant_id: joes.id, hour_of_operation_id: mon_hash[:z].id )
                        RestaurantHourOfOperation.create!(restaurant_id: joes.id, hour_of_operation_id: mon_hash[:aa].id )
                        RestaurantHourOfOperation.create!(restaurant_id: joes.id, hour_of_operation_id: mon_hash[:ab].id )
                        RestaurantHourOfOperation.create!(restaurant_id: joes.id, hour_of_operation_id: mon_hash[:ac].id )
                        RestaurantHourOfOperation.create!(restaurant_id: joes.id, hour_of_operation_id: mon_hash[:ad].id )
                        RestaurantHourOfOperation.create!(restaurant_id: joes.id, hour_of_operation_id: mon_hash[:ae].id )
                        RestaurantHourOfOperation.create!(restaurant_id: joes.id, hour_of_operation_id: mon_hash[:af].id )
                        RestaurantHourOfOperation.create!(restaurant_id: joes.id, hour_of_operation_id: mon_hash[:ag].id )
                        RestaurantHourOfOperation.create!(restaurant_id: joes.id, hour_of_operation_id: mon_hash[:ah].id )
                        RestaurantHourOfOperation.create!(restaurant_id: joes.id, hour_of_operation_id: mon_hash[:ai].id )
                        RestaurantHourOfOperation.create!(restaurant_id: joes.id, hour_of_operation_id: mon_hash[:aj].id )
                        RestaurantHourOfOperation.create!(restaurant_id: joes.id, hour_of_operation_id: mon_hash[:ak].id )
                        RestaurantHourOfOperation.create!(restaurant_id: joes.id, hour_of_operation_id: mon_hash[:al].id )
                        RestaurantHourOfOperation.create!(restaurant_id: joes.id, hour_of_operation_id: mon_hash[:am].id )


end
