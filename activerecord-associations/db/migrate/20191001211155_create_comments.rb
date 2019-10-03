class CreateComments < ActiveRecord::Migration
  def change
      create_table :comments do |t|
      t.integer :article_id, null: false
      t.text :body, null: false

      t.timestampfs null: false
    end
  end
end
