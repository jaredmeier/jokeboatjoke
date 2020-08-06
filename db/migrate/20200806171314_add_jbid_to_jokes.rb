class AddJbidToJokes < ActiveRecord::Migration[5.2]
  def change
    add_column :jokes, :jbid, :integer
  end
end
