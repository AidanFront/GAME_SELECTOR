class RemovePlaytimeFromGames < ActiveRecord::Migration
  def change
    remove_column :games, :playtime, :time
  end
end
