class CreateRegionKeys < ActiveRecord::Migration[5.2]
  def change
    create_table :region_keys do |t|
      t.string :region_key, null: false 
    end
  end
end
