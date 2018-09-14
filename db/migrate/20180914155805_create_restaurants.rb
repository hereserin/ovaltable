class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :restaurant_name, null: false
      t.integer :max_capacity, null: false
      t.text :restaurant_description
      t.integer :dining_style_id
      t.string :phone
      t.string :website_url
      t.integer :dress_code_id
      t.string :physical_address
      t.integer :region_key_id
    end
    add_index :restaurants, :restaurant_name, unique: true
    add_index :restaurants, :dining_style_id
    add_index :restaurants, :dress_code_id
    add_index :restaurants, :region_key_id
  end
end
