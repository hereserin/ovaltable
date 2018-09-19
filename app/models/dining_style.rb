# == Schema Information
#
# Table name: dining_styles
#
#  id           :bigint(8)        not null, primary key
#  dining_style :string           not null
#

class DiningStyle < ApplicationRecord
  has_many :restaurants,
  class_name: :Restaurant

end
