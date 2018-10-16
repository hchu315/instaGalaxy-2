# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


10.times do
  User.create({
    username: Faker::StarWars.unique.character,
    email: Faker::Internet.free_email,
    full_name: Faker::StarWars.vehicle,
    password: Faker::Internet.password(8)
    })
end

10.times do |num|
  Post.create({
    user_id: Faker::Number.between(1, 10),
    post_caption: Faker::StarWars.unique.quote
    })
end



Demo_User = User.create!( {username: "Demo_User", email: "ItsADemo@demo.com", full_name: "Darth Demo User", password: "demo_user"} )
