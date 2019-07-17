# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


10.times do |i|
  user = User.create({
    username: Faker::Movies::StarWars.unique.character,
    email: Faker::Internet.free_email,
    full_name: Faker::Movies::StarWars.vehicle,
    password: Faker::Internet.password(8)
    })
    user.image.attach(io: File.open("#{Rails.root}/app/assets/images/instagalaxy_album/users_page/#{i}.png"), filename: "#{i}.png")
    sleep(3)
    user.save
end

10.times do |num|
  post = Post.create({
    user_id: Faker::Number.unique.between(1, 10),
    post_caption: Faker::Movies::StarWars.unique.quote
    })
    post.image.attach(io: File.open("#{Rails.root}/app/assets/images/instagalaxy_album/users/#{num}.jpg"), filename: "#{num}.jpg")
    sleep(3)
    post.save
end

demo_user = User.create!( {username: "Demo_User", email: "ItsADemo@demo.com", full_name: "Darth User", password: "demo_user", bio: "Welcome to InstaGalaxy :)"} )

demo_user.image.attach(io: File.open("#{Rails.root}/app/assets/images/instagalaxy_album/demo_user/cool_guys.jpg"), filename: "cool_guys.jpg")

sleep(3)
demo_user.save

demo1 = Post.create({
    user_id: 11,
    post_caption: "Issa trap!"
  })

demo1.image.attach(io: File.open("#{Rails.root}/app/assets/images/instagalaxy_album/demo_user/9.png"), filename: "9.png")
sleep(3)
demo1.save

demo2 = Post.create({
    user_id: 11,
    post_caption: "Don't hate us cause you ain't us"
  })

demo2.image.attach(io: File.open("#{Rails.root}/app/assets/images/instagalaxy_album/demo_user/10.jpg"), filename: "10.jpg")
sleep(3)
demo2.save

demo3 = Post.create({
    user_id: 11,
    post_caption: "Wiseguy Stormtroopers"
  })

demo3.image.attach(io: File.open("#{Rails.root}/app/assets/images/instagalaxy_album/demo_user/cool_guys.jpg"), filename: "cool_guys.jpg")
sleep(3)
demo3.save
