class AddTimeblockToReservations < ActiveRecord::Migration[5.2]
  def change
    add_column :reservations, :time_block, :integer, null: false 
  end
end
