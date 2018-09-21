class CreateRestaurantsHoursOfOperation < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants_hours_of_operations do |t|
      t.integer :hours_of_operation_id, null: false
      t.integer :restaurant_id, null: false
      t.timestamp
    end
  end
end
