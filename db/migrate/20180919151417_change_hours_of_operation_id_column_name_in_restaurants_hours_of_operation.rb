class ChangeHoursOfOperationIdColumnNameInRestaurantsHoursOfOperation < ActiveRecord::Migration[5.2]
  def change
    remove_column :restaurants_hours_of_operations, :hours_of_operation_id
    add_column :restaurants_hours_of_operations, :hour_of_operation_id, :integer, null: false
  end
end
