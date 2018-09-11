class RemovePointsFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :points
  end
end
