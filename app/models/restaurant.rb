# == Schema Information
#
# Table name: restaurants
#
#  id                     :bigint(8)        not null, primary key
#  restaurant_name        :string           not null
#  max_capacity           :integer          not null
#  restaurant_description :text
#  dining_style_id        :integer
#  phone                  :string
#  website_url            :string
#  dress_code_id          :integer
#  physical_address       :string
#  region_key_id          :integer
#

class Restaurant < ApplicationRecord

  has_many :reservations,
  class_name: :Reservation

  has_many :restaurant_hour_of_operations,
  primary_key: :id,
  foreign_key: :restaurant_id,
  class_name: :RestaurantHourOfOperation

  has_many :hours_of_operation,
  through: :restaurant_hour_of_operations,
  source: :hour_of_operation

  has_many :photos,
  class_name: :Photo

  has_many :photo_posters,
  through: :photos,
  source: :user

  has_many :reviews,
  class_name: :Review

  has_many :reviewers,
  through: :reviews,
  source: :user

  belongs_to :dining_style,
  class_name: :DiningStyle

  # belongs_to :regional_key,
  # class_name: :RegionalKey

  belongs_to :dress_code,
  class_name: :DressCode


  def show_banner
    @show_banner ||= (self.photos.first || nil )
    @show_banner
  end

  def average_overall_rating
    all_ratings = self.reviews.all.map {|review| review.rating_overall }
    count_of_ratings = all_ratings.count
    return nil if count_of_ratings <= 0
    sum_ratings = all_ratings.reduce(:+)
    sum_ratings / count_of_ratings
  end

  def hours_of_operations_list
    HourOfOperation.hours_of_operations_list(self.opp_hours_week_timeblock_hash)
  end

  def opp_hours_week_timeblock_hash
    opp_hours_hash = Hash.new {|h,k| h[k] = [] }
    self.hours_of_operation.each do |hour|
      opp_hours_hash[hour.day_of_week] << hour.time_block
    end
    opp_hours_hash
  end

  def dining_style_string
    self.dining_style.dining_style
  end

  def dress_code_string
    self.dress_code.dress_code
  end

  def self.search(q_arr)

    if q_arr.length == 1
      return Restaurant
      .includes(:photos)
      .where("lower(restaurant_name) LIKE ? OR lower(restaurant_description) LIKE ?",
        "%#{q_arr[0].downcase}%",
        "%#{q_arr[0].downcase}%")
    end

    Restaurant
    .includes(:photos)
    .where("lower(restaurant_name) LIKE ? OR lower(restaurant_description) LIKE ?",
      "%#{q_arr[-1].downcase}%",
      "%#{q_arr[-1].downcase}%")
      .or(Restaurant.search(q_arr[0..-2]))

  end

  # def search_match_score
  #   @search_match_score || 0
  # end
  #
  # def search_match_score=(score)
  #   @search_match_score = score
  # end
  #
  # # def average_ratings
  # # end

end
