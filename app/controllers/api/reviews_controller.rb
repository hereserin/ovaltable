class Api::ReviewsController < ApplicationController
  before_action :require_logged_in

  def create

    reviews_input = {
        rating_overall: params[:review][:rating_overall].to_i,
        user_id: current_user.id,
        restaurant_id: params[:review][:restaurant_id].to_i,
        review_body: params[:review][:review_body],
        # other input:
        rating_food: params[:review][:rating_overall].to_i,
        rating_service: params[:review][:rating_overall].to_i,
        rating_ambience: params[:review][:rating_overall].to_i
    }

    @review = Review.new(reviews_input)

    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def show
    @review = Review.find(params[:id])
  end

  def delete
  end

  private
  def reviews_params
    params.require(:review).permit(:restaurant_id, :review_body, :rating_overall)
  end

end
