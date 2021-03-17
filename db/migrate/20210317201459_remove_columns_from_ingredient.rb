class RemoveColumnsFromIngredient < ActiveRecord::Migration[6.0]
  def change
    remove_column :ingredients, :qty, :integer
    remove_column :ingredients, :unit, :string
    rename_column :ingredients, :name, :ingredients
  end
end
