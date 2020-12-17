# frozen_string_literal: true

class TodosController < ApplicationController
  before_action :load_list
  before_action :load_todo, only: %i[update destroy]

  def index
    @todos = @list.todos
  end

  def create
    @todo = @list.todos.build(todo_params)
    if @todo.save
      render partial: 'todos/todo', layout: false, locals: { todo: @todo }
    else
      render partial: 'todos/todo_err', layout: false, locals: { todo: @todo }
    end
  end

  def update
    if @todo.update(todo_update_params)
      render partial: 'todos/todo', layout: false, locals: { todo: @todo }
    else
      render partial: 'todos/todo_err', layout: false, locals: { todo: @todo }
    end
  end

  def destroy
    @todo.destroy
    render json: { msg: 'Todo removed' }
  end

  private

  def load_list
    @list = List.find(params[:list_id])
  end

  def load_todo
    @todo = @list.todos.find(params[:id])
  end

  def todo_params
    params.require(:todo).permit(:text)
  end

  def todo_update_params
    params.require(:todo).permit(:completed)
  end
end
