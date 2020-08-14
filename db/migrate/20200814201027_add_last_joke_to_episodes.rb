class AddLastJokeToEpisodes < ActiveRecord::Migration[5.2]
  def change
    add_column :episodes, :last_joke_added, :datetime
    add_index :episodes, :last_joke_added
  end
end
