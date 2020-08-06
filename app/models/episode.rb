# == Schema Information
#
# Table name: episodes
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Episode < ApplicationRecord
  validates :name, presence: true
  
  has_many :jokes
end
