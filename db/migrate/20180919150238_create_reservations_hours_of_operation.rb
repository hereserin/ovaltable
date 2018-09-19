class CreateReservationsHoursOfOperation < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations_hours_of_operations do |t|
      t.integer :hour_of_operation_id, null: false
      t.integer :reservation_id, null: false
    end
  end
end
