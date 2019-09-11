require "sinatra"

require "pry" if development? || test?
require "sinatra/reloader" if development?

set :bind, '0.0.0.0'  # bind to all interfaces



get "/tasks/:task_name" do
  @task_name = params[:task_name]
  erb :show
end

post "/tasks" do
  task = params["task_name"]
  File.open("tasks.txt", "a") do |file|
    file.puts(task)
  end
  redirect "/tasks"
end

get "/tasks" do
  @tasks = File.readlines("tasks.txt")
  erb :index
end
