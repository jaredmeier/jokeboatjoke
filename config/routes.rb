Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :episodes, only: [:index, :show, :create], param: :name do
      resources :jokes, only: [:create, :update, :destroy]
    end
  end
end
