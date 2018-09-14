class RegionalKey < ApplicationRecord
  has_many :restaurants,
  class_name: :Restaurant


end
