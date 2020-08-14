json.array! @episodes do |episode|
  json.extract! episode, :name
end