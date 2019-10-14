class Api::FortunesController < ApiController
protect_from_forgery unless: -> { request.format.json? }

  def show
    render json: { fortune: Fortune.all.sample }
  end

  def create
      fortune = Fortune.new(text:params[:fortune])
      if fortune.save
          render json:  { fortune: fortune }
      else
          render json: {error: fortune.errors.full_messages }, status: :unprocessable_entity
end
end
end
