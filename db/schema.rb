# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_10_10_191347) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "dining_styles", force: :cascade do |t|
    t.string "dining_style", null: false
  end

  create_table "dress_codes", force: :cascade do |t|
    t.string "dress_code", null: false
  end

  create_table "hours_of_operations", force: :cascade do |t|
    t.string "day_of_week", null: false
    t.integer "time_block", null: false
  end

  create_table "photos", force: :cascade do |t|
    t.string "photo_url"
    t.integer "restaurant_id", null: false
    t.integer "user_id", null: false
    t.string "caption"
  end

  create_table "region_keys", force: :cascade do |t|
    t.string "region_key", null: false
  end

  create_table "reservations", force: :cascade do |t|
    t.integer "restaurant_id", null: false
    t.integer "user_id", null: false
    t.integer "party_size", null: false
    t.datetime "date_and_time", null: false
    t.integer "duration", null: false
    t.index ["date_and_time"], name: "index_reservations_on_date_and_time"
    t.index ["restaurant_id"], name: "index_reservations_on_restaurant_id"
    t.index ["user_id"], name: "index_reservations_on_user_id"
  end

  create_table "reservations_hours_of_operations", force: :cascade do |t|
    t.integer "hour_of_operation_id", null: false
    t.integer "reservation_id", null: false
  end

  create_table "restaurants", force: :cascade do |t|
    t.string "restaurant_name", null: false
    t.integer "max_capacity", null: false
    t.text "restaurant_description"
    t.integer "dining_style_id"
    t.string "phone"
    t.string "website_url"
    t.integer "dress_code_id"
    t.string "physical_address"
    t.index ["dining_style_id"], name: "index_restaurants_on_dining_style_id"
    t.index ["dress_code_id"], name: "index_restaurants_on_dress_code_id"
    t.index ["restaurant_name"], name: "index_restaurants_on_restaurant_name", unique: true
  end

  create_table "restaurants_hours_of_operations", force: :cascade do |t|
    t.integer "restaurant_id", null: false
    t.integer "hour_of_operation_id", null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "restaurant_id", null: false
    t.datetime "dine_date"
    t.text "review_body", null: false
    t.integer "rating_overall", null: false
    t.integer "rating_food", null: false
    t.integer "rating_service", null: false
    t.integer "rating_ambience", null: false
    t.integer "helpfulness_votes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.index ["dine_date"], name: "index_reviews_on_dine_date"
    t.index ["helpfulness_votes"], name: "index_reviews_on_helpfulness_votes"
    t.index ["restaurant_id"], name: "index_reviews_on_restaurant_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "session_token"
    t.string "string"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
