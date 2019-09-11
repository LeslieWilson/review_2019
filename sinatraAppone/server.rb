require 'sinatra'
require 'sinatra/reloader'
require 'pry'

set :bind, '0.0.0.0'



get '/articles' do
  @articles = File.readlines('articles.txt')
  erb :index
end

get '/new' do
    erb :new
end

post '/articles' do
  article = params['article']
  File.open('articles.txt', 'a') do |file|
    file.puts(article)
  end

  redirect '/articles'
end
