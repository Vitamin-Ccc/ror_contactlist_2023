class Api::ListsController < ApplicationController
  before_action :set_list, only: [:show, :update, :distroy]
  # Model Name List
  def index
    render json: List.all
  end

  def show
    render json: @list
  end

  def create
    @list = List.new(list_params)
    if @list.save
      render json: @list
    else
      render json: { errors: @list.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @list.update(list_params)
      render json: @list
    else
      render json: { errors: @list.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @list.destroy
    render json: { message: "List deleted" }

  end

  private
    def list_params
      params.require(:list).permit(:lname, :desc)
    end

    def set_list
      @list = List.find(params[:id])
    end
end
