class AddPlaytimeToGames < ActiveRecord::Migration
  def change
    add_column :games, :playtime, :time
  end
end
