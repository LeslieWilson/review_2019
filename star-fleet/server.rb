require 'sinatra'
require_relative 'config/application'

set :bind, '0.0.0.0'  # bind to all interfaces

enable :sessions

# Any classes you add to the models folder will automatically be made available in this server file

get '/' do
  redirect '/starships'
end

get '/starships' do
  # Use a custom Starship class that inherits from ActiveRecord to retrieve your database objects
  # You should be using ActiveRecord CRUD methods to aid you.
  # E.g. Planet.where(planet_type: "gas giant"), etc.
@starships = Ship.all
  erb :'starships/index'

end

get '/crew-members' do
    @crewmembers = CrewMember.all.order(last_name: :asc)
    erb :'crew_members/index'
end


post "/starships/:id" do
    @first_name = params[:first_name]
    @last_name = params[:last_name]
    @specialty_division = params[:specialty_division]
    @starship = Ship.find(params["id"])


    crew_member = CrewMember.new(
    first_name: @first_name,
    last_name:@last_name,
    specialty_division:@specialty_division,
    ship:@starship
    )
    crew_member.save
    redirect '/crew-members'
    # @error = ''
    # if @first_name.nil?
    #     @error = "naw"
    #     erb :'crew_members/index'
    # else
    #     @congrats = "new ship added"
    #     @crewmember = CrewMember.create(params)
        
    # end
end



get "/starships/new" do
    erb :'/starships/new'
end

get '/starships/:id' do
    @starship = Ship.find(params[:id])
    erb :'starships/show'
end

post "/starships/new" do
    @name = params[:name]
    @location = params[:location]
    @ship_class = params[:ship_class]
    @error = ''

    if @name.nil?
        @error = "naw"
        erb :'starships/new'

    else

        @congrats = "new ship added"
        @starship = Ship.create(params)
        erb :'starships/show'
    end
end
