class AddNullConstraintToJokesJbId < ActiveRecord::Migration[5.2]
  def change
    change_column_null :jokes, :jbid, false
  end
end
