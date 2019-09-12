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

get '/articles' do
    @articles =[]
    CSV.foreach("articles.csv", headers: true) do |row|
        new_article = Article.new(description, title,url)
        @articles << new_article
    erb :index
end


# version 1- doesn't give you versitle restaurant objects

# get '/articles' do
#
#     @articles = CSV.readlines("articles.csv", headers: true)
#
#   erb :index
# end
#
# get '/new' do
#     erb :new
# end
#
# post '/articles' do
#   article = params['article']
#   File.open('articles.txt', 'a') do |file|
#     file.puts(article)
#   end
#
#   redirect '/articles'
# end
