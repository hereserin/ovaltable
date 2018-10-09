class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :restaurant_id, null: false
      t.datetime :dine_date
      t.text :review_body, null: false
      t.integer :rating_overall, null: false
      t.integer :rating_food, null: false
      t.integer :rating_service, null: false
      t.integer :rating_ambience, null: false
      t.integer :helpfulness_votes
      t.timestamps
    end
    add_index :reviews, :restaurant_id
    add_index :reviews, :helpfulness_votes
    add_index :reviews, :dine_date
  end
end
