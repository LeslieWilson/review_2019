class CampersController < ApplicationController

  def index
      if !params[:campsite_id].blank?
        @campsite = Campsite.find(params[:campsite_id])
        @title = "All Campers:"

        @campers = @campsite.campers
    else
        @title = "all campers"
        @campers = Camper.all
      end
    end
end
