require 'sinatra'
set :bind, '0.0.0.0'
set :public_folder, File.join(File.dirname(__FILE__), 'public')


get '/yo' do
    "<p>heythe time is #{Time.now}</p>"
end


# get '/tasks' do
#     @tasks = ['leslie', 'maria', 'larisa']
#     erb :index
# end

get "/tasks/:task_name" do
    @task_name = params[:task_name]
    binding.pry
    erb :show
end
