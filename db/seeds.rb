# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do

  User.destroy_all
  demo_user = User.create!(username: "Demo User", password: "password" )

  DiningStyle.destroy_all
  casual_dining = DiningStyle.create!(dining_style: "Casual Dining")
  fine_dining = DiningStyle.create!(dining_style: "Fine Dining")

  DressCode.destroy_all
  casual_dress = DressCode.create!(dress_code: "Casual Dress")
  smart_casual = DressCode.create!(dress_code: "Smart Casual")
  business_casual = DressCode.create!(dress_code: "Business Casual")


  Restaurant.destroy_all
  Restaurant.create!(
    restaurant_name: 'Mintons Playhouse',
    max_capacity: 100,
    restaurant_description: 'The place to be for a great dining experience and a live show!',
    dining_style_id: casual_dining.id,
    phone: "777-777-7779",
    website_url: "www.mintons.com",
    dress_code_id: smart_casual.id,
    physical_address: "123 Some Street, New York, NY"
  )

  Restaurant.create!(
    restaurant_name: 'Red Rooster Harlem',
    max_capacity: 200,
    restaurant_description: 'Located in the heart of Harlem, Red Rooster serves comfort food celebrating the roots of American cuisine and the diverse culinary traditions of the neighborhood. Named in honor of the legendary Harlem speakeasy, Chef Marcus Samuelsson brings his passion for food to the neighborhood he calls home',
    dining_style_id: casual_dining.id,
    phone: "888-888-8888",
    website_url: "www.RedRooster.com",
    dress_code_id: smart_casual.id,
    physical_address: "555 Another Street, New York, NY"
  )
end
