require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'csv'
require_relative 'app/models/article.rb'
set :bind, '0.0.0.0'

get "/" do
    redirect "/articles"
end


# version 2

# get '/articles' do
#     @articles = []
#     CSV.foreach("articles.csv", headers: true) do |row|
#         @articles << row
#     end
#
#         erb :index
#     end

# get '/articles' do
#     @articles =[]
#     CSV.foreach("articles.csv", headers: true) do |row|
#         new_article = Article.new(
#             row["description"],
#             row["title"],
#             row["URL"]
#             )
#         @articles << new_article
#     end
#     erb :index
# end


# version 1- doesn't give you versitle restaurant objects

get '/articles' do

    @articles = CSV.readlines("articles.csv")

  erb :index
end

get '/articles/new' do
    erb :new
end

post "/articles/new" do
    @title = params["article_title"]
    @url = params["article_url"]
    @description = params["article_description"]

if @title == "" || @url==""||@description == ""
    @error = "please fill out forms correctly"
    erb :new
else

    CSV.open("articles.csv", "a") do |csv|
        csv << [title,url,description]
    end
    redirect "/articles"
end

end

# post '/articles' do
#   article = params['article']
#   File.open('articles.txt', 'a') do |file|
#     file.puts(article)
#   end
#
#   redirect '/articles'
# end
