json.episode do
    json.extract! @episode, :name
end
json.jokes do 
    json.array! @jokes do |joke|
        json.partial! 'api/jokes/joke', joke: joke
    end
end