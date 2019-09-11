require 'sinatra'
require 'pry'
set :bind, '0.0.0.0'
set :public_folder, File.join(File.dirname(__FILE__), 'public')


get '/yo' do
    "<p>hey the time is #{Time.now}</p>"
end



# get "/tasks/:task_name" do
#     @task_name = params[:task_name]
#     erb :show
# end
#
#
# get '/tasks' do
#   "Hello World"
#   erb :show
# end


get "/tasks" do
  @tasks = ["pay bills", "buy milk", "learn Ruby"]
  erb :index
end

# post "/tasks" do
# binding.pry
#
#     task = params["task_name"]
#     Fille.open("tasks.txt", "a") do |file|
#         file.puts(task)
#     end
#             redirect "/tasks"
# end
