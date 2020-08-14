class Api::EpisodesController < ApplicationController
    def index
        @episodes = Episode.where.not(last_joke_added: nil).order(last_joke_added: :desc).limit(3)
        if @episodes
            render :index
        else
            render json: ["No episodes exist"], status: 400
        end
    end
    
    def show
        @episode = Episode.find_by(name: params[:name])
        @jokes = @episode.jokes.order(updated_at: :desc)
        if @episode
            render :show
        else
            render json: ["Episode does not exist"], status: 400
        end
    end
    
    def create
        @episode = Episode.new(name: generate_name)
        if @episode.save
            @jokes = @episode.jokes
            render :show
        else
            render json: @episode.errors.full_messages, status: 401
        end
    end

    private

    def generate_name
        adj = RandomWord.adjs.to_a.sample.capitalize
        noun = RandomWord.adjs.to_a.sample.split('_').map(&:capitalize).join

        adj + noun
    end
end