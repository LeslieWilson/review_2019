require "sinatra"
require "pg"
require "pry" if development? || test?
require "sinatra/reloader" if development?
require_relative "./app/models/article"

set :bind, '0.0.0.0'  # bind to all interfaces
set :views, File.join(File.dirname(__FILE__), "app", "views")

configure :development do
  set :db_config, { dbname: "news_aggregator_development" }
end

configure :test do
  set :db_config, { dbname: "news_aggregator_test" }
end

def db_connection
  begin
    connection = PG.connect(Sinatra::Application.db_config)
    yield(connection)
  ensure
    connection.close
  end
end


get '/articles' do
    @articles =  Article.all


    end

    binding.pry
    erb :index
end


get '/articles/:id' do
    @article  = article.find()

    query_result =  db_connection do |conn|
        conn.exec(
        "SELECT title, description, url FROM articles WHERE id = #{params.id}"
        )
        @article = query_result.to_a[0]

    erb :show
end

# Put your News Aggregator server.rb route code here
