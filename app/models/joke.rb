# == Schema Information
#
# Table name: jokes
#
#  id         :bigint           not null, primary key
#  setup      :string           not null
#  punchline  :string           not null
#  categories :string           is an Array
#  jbid       :integer          not null
#  episode_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Joke < ApplicationRecord
  validates :setup, :punchline, :episode_id, presence: true
  
  belongs_to :episode

end
