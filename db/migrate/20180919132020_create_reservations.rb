class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.integer :restaurant_id, null: false
      t.integer :user_id, null: false
      t.integer :party_size, null: false
      t.datetime :date_and_time, null: false
      t.integer :duration, null: false
      t.timestamp
    end
    add_index :reservations, :restaurant_id
    add_index :reservations, :user_id
    add_index :reservations, :date_and_time
  end
end
