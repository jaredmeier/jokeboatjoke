class CreateJokes < ActiveRecord::Migration[5.2]
  def change
    create_table :jokes do |t|
      t.string :setup, null: false
      t.string :punchline, null: false
      t.string :categories, array: true
      t.integer :episode_id, null: false
      t.timestamps
    end
    add_index :jokes, :episode_id
  end
end
