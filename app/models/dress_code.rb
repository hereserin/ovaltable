class DressCode < ApplicationRecord
  has_many :restaurants,
  class_name: :Restaurant


end
