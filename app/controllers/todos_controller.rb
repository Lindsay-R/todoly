class TodosController < ApplicationController

  def index
    #usecase for initial loading of todos... fetches existing todos from db

    #todos = Todo.all
    # render json: todos
    ##making a responce for the browser, could be respond_to or redirect


  @todo =Todo.new

    @todos = Todo.order(:todo_item)

    respond_to do |format|
      format.html
      format.json { render :json => @todos }
    end

  end

  def create
    #creating todos in the data base, ajax post the todo data to this action
    #to see what's happening use "rails console" in terminal

    # todo = Todo.new
    # todo.todo_item = "homework"
    # todo.save
    # render json: todo

    # todo = Todo.new(params[:todo_item])
    # todo.save
    # render json: todo
    #validaions????


    @todo = Todo.new(
      :todo_item => params[:todo_item]
    )
    if @todo.save
      render json: @todo
    end

  end

  def delete
    #removes the todo from the db
    todo = Todo.find params[:id]
    todo.destroy

    render json: todo
  end

end