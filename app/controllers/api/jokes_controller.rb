class Api::JokesController < ApplicationController
    def create
      @joke = Joke.new(joke_params)
      
      @episode = Episode.find_by(name: params[:episode_name])
      @joke.episode_id = @episode.id

      if @joke.save
          render :show
      else
          render json: @joke.errors.full_messages, status: 401
      end
    end

    def update
      @joke = Joke.find_by(id: params[:id])
      if !@joke
          render json: ["Joke does not exist"], status: 400
      elsif @joke.update(joke_params)
          render :show
      else
          render json: @joke.errors.full_messages, status: 401
      end
    end

    def destroy
      @joke = Joke.find_by(id: params[:id])
      if @joke
        @joke.destroy
        render :show
      else
        render json: ["Joke does not exist"], status: 400
      end
    end

    private

    def joke_params
        params.require(:joke).permit(:setup, :punchline, :categories)
    end
end