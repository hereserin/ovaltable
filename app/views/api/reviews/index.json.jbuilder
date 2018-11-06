json.reviews do
  @reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :user_id, :dine_date, :review_body, :rating_overall, :rating_food, :rating_service, :rating_ambience, :helpfulness_votes
    end
  end
end
