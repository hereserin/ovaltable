
class Photo < ApplicationRecord

  has_one_attached :pic

  belongs_to :restaurant,
  class_name: :Restaurant


end
