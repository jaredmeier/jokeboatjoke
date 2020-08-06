Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :episodes, only: [:show, :create, :update], param: :name
  end
end
