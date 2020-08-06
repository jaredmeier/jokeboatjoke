class CreateEpisodes < ActiveRecord::Migration[5.2]
  def change
    create_table :episodes do |t|
      t.string :name, null: false
      t.timestamps
    end
    add_index :episodes, :name, unique: true
  end
end
