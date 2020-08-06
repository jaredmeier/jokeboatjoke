class RemoveJbidFromJokes < ActiveRecord::Migration[5.2]
  def change
    remove_column :jokes, :jbid
  end
end
