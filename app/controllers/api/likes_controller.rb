class Api::LikesController < ApplicationController
  def create
    like = Like.create(like_params)
    json_response(like)
  end

  def destroy
    like = Like.find(params[:id])
    like.destroy
    json_response({message: "unliked!"})
  end

  private
  def like_params
    params.require(:like).permit(:recipe_id, :user_id)
  end
end