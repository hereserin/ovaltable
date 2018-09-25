class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.string :photo_url
      t.integer :restaurant_id, null: false
      t.integer :user_id, null: false
      t.string :caption
    end
  end
end
