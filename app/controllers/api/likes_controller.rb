class Api::LikesController < ApplicationController
  def create
    like = Like.create(like_params)
    json_response(like)
  end

  private
  def like_params
    params.require(:like).permit(:recipe_id, :user_id)
  end
end