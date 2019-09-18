require "sinatra"
require "sinatra/reloader" if development?
require "pry" if development? || test?
require 'csv'

set :bind, '0.0.0.0'  # bind to all interfaces

get '/' do
    redirect '/groceries'
end

get '/groceries' do
    @groceries = CSV.readlines("grocery_list.csv", headers: true)
    erb :index
end

post  "/groceries/" do
    @name = params["name"]

    if @name == ""
        @error = "please fill out forms correctly"
        @groceries = CSV.readlines("grocery_list.csv", headers: true)
        erb :index
    else
        CSV.open("grocery_list.csv", "a", headers: true) do |csv|
            csv << [@name]
        end
        redirect "/groceries"
    end
end
