class Api::JokesController < ApplicationController
    def show
        # @episode = Episode.find_by(name: params[:name])
        # @jokes = @episode.jokes.order(updated_at: :desc)
        # if @episode
        #     render :show
        # else
        #     render json: ["Episode does not exist"], status: 400
        # end
    end
    
    def create
        # @episode = Episode.new(name: generate_name)
        # if @episode.save
        #     @jokes = @episode.jokes
        #     render :show
        # else
        #     render json: @episode.errors.full_messages, status: 401
        # end
    end

    private

    def joke_params
        
    end
end