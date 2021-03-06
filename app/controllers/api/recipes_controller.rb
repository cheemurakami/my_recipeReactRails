class Api::RecipesController < ApplicationController
  #before_action :authenticate_user!

  def index
    recipes = Recipe.all
    json_response(recipes)
  end

  def show
    recipe = Recipe.find(params[:id])
    recipe_hash = {"name" => recipe.name, "servings" => recipe.number, "ingredients" => recipe.ingredients, "directions" => recipe.directions}
    json_response(recipe_hash)
  end

  def create
    recipe = Recipe.create(recipe_params)
    json_response(recipe)
  end

  def user_recipes
    if current_user
      recipes = current_user.recipes
      json_response(recipes)
    end
  end

  def recipe_likes
    recipe = Recipe.find(params[:id])
    likes = recipe.likes
    if likes.length > 0
      json_response(likes)
    end
  end

  private
  def recipe_params
    params.require(:recipe).permit(:name, :number, :user_id,ingredients_attributes: [:ingredients], directions_attributes: [:index, :description])
  end
end
