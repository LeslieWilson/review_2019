class CreateFortunes < ActiveRecord::Migration[5.1]
  def change
    create_table :fortunes do |t|
      t.string :text, null: false
    end
  end
end
