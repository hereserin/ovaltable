
class Review < ApplicationRecord

  validates :user_id, :restaurant_id, :review_body, presence: true


  belongs_to :restaurant,
  class_name: :Restaurant

  belongs_to :user,
  class_name: :User

  def update_helpfulness_votes(num)
    self.helpfulness_votes ||= 0
    self.helpfulness_votes += num
  end

  def select_id
    self.id
  end

end
