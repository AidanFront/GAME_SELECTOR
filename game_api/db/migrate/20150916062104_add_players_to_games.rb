class AddPlayersToGames < ActiveRecord::Migration
  def change
    add_column :games, :minplayers, :integer
    add_column :games, :maxplayers, :integer
  end
end
