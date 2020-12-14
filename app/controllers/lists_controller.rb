# frozen_string_literal: true

class ListsController < ApplicationController
  before_action :load_list, except: %i[index create]

  def index
    @lists = List.all
    @new_list = List.new
  end

  def show
    @todos = @list.todos
    @new_todo = Todo.new(list: @list)
  end

  def create
    @list = List.new(list_params)
    if @list.save
      render partial: 'lists/list', layout: false, locals: { list: @list }
    else
      render partial: 'lists/list_err', layout: false, locals: { list: @list }
    end
  end

  def update
    if @list.update(list_params)
      render partial: :list, layout: false, locals: { list: @list }
    else
      render partial: :list_err, layout: false, locals: { list: @list }
    end
  end

  def destroy
    @list.destroy
    render json: { msg: 'List removed' }
  end

  private

  def load_list
    @list = List.find(params[:id])
  end

  def list_params
    params.require(:list).permit(:name)
  end
end
