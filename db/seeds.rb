# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Episode.destroy_all
Joke.destroy_all

episode_1 = Episode.create!(name: 'BigDogCatPerson')

setups = [
  "I want to open a store that only sells TOPIC",
  "You ever notice how TOPIC looks like",
  "When I was a kid we didn't have TOPIC."
]

punchlines = [
  "and call it BLANK",
  "BLANK?",
  "We had BLANK"
]

setups.each_with_index do |setup, i|
  Joke.create!(
    setup: setup,
    punchline: punchlines[i],
    categories: "things",
    episode_id: episode_1.id
  )
end

episode_2 = Episode.create!(name: 'EpisodeTwo')
Joke.create!(    
    setup: "If I were an animal I'd be a TOPIC",
    punchline: "because then I could BLANK",
    categories: "things",
    episode_id: episode_2.id
)
