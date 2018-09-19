class CreateHoursOfOperation < ActiveRecord::Migration[5.2]
  def change
    create_table :hours_of_operations do |t|
      t.string :day_of_week, null: false
      t.integer :time_block, null: false
      t.timestamp
    end

  end
end
