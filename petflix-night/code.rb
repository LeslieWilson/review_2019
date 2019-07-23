dramas = [
  "Stanger Llamas",
  "Game of Bones",
  "Llama Actually",
  "Grey's Catanomy",
  "Breaking Baaaaahhhd"
]

animations = [
  "Bojack Man",
  "Family Dog",
  "Futurellama",
  "Barkcher",
  "American Dog",
  "Pokemon",
  "Bob's Barkers"
]

comedies = [
  "Barks and Recreation",
  "30 Cats",
  "Bones",
  "Girl meets Cat",
  "Gilmore Cats",
  "New Dog",
  "Catlandia",
  "Full Mouse"
]

all_shows = [
  "Stanger Llamas",
  "Game of Bones",
  "Llama Actually",
  "Grey's Catanomy",
  "Breaking Baaaaahhhd",
  "Bojack Man",
  "Family Dog",
  "Futurellama",
  "Barkcher",
  "American Dog",
  "Pokemon",
  "Bob's Barkers",
  "Barks and Recreation",
  "30 Cats",
  "Bones",
  "Girl meets Cat",
  "Gilmore Cats",
  "New Dog",
  "Catlandia",
  "Full Mouse"
]


# 1

# dramas.each do |drama|
# if drama.include?("llama") || drama.include?("Llama")
#     puts drama
# end
# end

#2

# animations.each do |animation|
#     if animation.include?("dog") || animation.include?("Dog")
#         puts animation
# end
# end

# 3

# comedies.each do |comedy|
#     if comedy.include?("cat")|| comedy.include?("Cat")||comedy.include?("Cats")
#         comedies.delete(comedy)
#
# end
# end
#
# puts comedies

# 4
blah = all_shows.map { |show| "#{show[0]}"}

puts blah
