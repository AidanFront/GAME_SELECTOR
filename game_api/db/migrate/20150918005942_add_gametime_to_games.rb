class AddGametimeToGames < ActiveRecord::Migration
  def change
    add_column :games, :gametime, :integer
  end
end
