# == Schema Information
#
# Table name: dress_codes
#
#  id         :bigint(8)        not null, primary key
#  dress_code :string           not null
#

class DressCode < ApplicationRecord
  has_many :restaurants,
  class_name: :Restaurant


end
