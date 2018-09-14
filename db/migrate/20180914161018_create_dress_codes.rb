class CreateDressCodes < ActiveRecord::Migration[5.2]
  def change
    create_table :dress_codes do |t|
      t.string :dress_code, null: false 
    end
  end
end
