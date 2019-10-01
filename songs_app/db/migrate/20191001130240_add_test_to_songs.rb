class AddTestToSongs < ActiveRecord::Migration[5.2]
  def change
      add_column :songs, :test, :string
  end
end
