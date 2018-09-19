class RemoveTimeblockColumnFromReservations < ActiveRecord::Migration[5.2]
  def change
    remove_column :reservations, :time_block
  end
end
