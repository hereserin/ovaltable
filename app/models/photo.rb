
class Photo < ApplicationRecord

  validates :user_id, :restaurant_id, :caption, :pic, presence: true

  has_one_attached :pic

  belongs_to :restaurant,
  class_name: :Restaurant


end
