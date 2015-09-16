class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :name
      t.integer :difficulty
      t.integer :strategy
      t.decimal :cost
      t.integer :popularity

      t.timestamps null: false
    end
  end
end
