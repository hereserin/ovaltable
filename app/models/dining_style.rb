class DiningStyle < ApplicationRecord
  has_many :restaurants,
  class_name: :Restaurant

end
