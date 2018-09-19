class RemoveRegionalKeyFromRestaurants < ActiveRecord::Migration[5.2]
  def change
    remove_column :restaurants, :region_key_id
  end
end
