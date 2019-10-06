class CreateArticles < ActiveRecord::Migration[6.0]
  def change
    create_table :articles do |t|
        t.string  :title, null: false
        t.string :url, null: false, length: 1000

        t.timestamps
    end
  end
end

/Users/lesliewilson/launcher_news

/Users/lesliewilson/ignit_mtl
