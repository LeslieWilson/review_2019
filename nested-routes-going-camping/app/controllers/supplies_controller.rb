class SuppliesController < ApplicationController
  def index
      if !params[:camper_id].blank?
    @campers = Camper.find(params[:camper_id])
    @title = "All Supplies:"

    @supplies = @campers.supplies
else
    @title = "all supplies"
    @supplies = Supply.all
  end
end
end