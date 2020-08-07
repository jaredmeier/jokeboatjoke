class RemoveCategoriesFromJokes < ActiveRecord::Migration[5.2]
  def change
    remove_column :jokes, :categories
    add_column :jokes, :categories, :string
  end
end
