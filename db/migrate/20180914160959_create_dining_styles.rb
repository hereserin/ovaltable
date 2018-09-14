class CreateDiningStyles < ActiveRecord::Migration[5.2]
  def change
    create_table :dining_styles do |t|
      t.string :dining_style, null: false 
    end
  end
end
