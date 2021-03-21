class AddNumberOfServingsToRecipe < ActiveRecord::Migration[6.0]
  def change
    add_column :recipes, :number, :integer
  end
end
