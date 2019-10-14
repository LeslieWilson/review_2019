Rails.application.routes.draw do
  root 'static_pages#index'

  namespace :api do
      resource :fortune, only: [:show, :create]
  end
end
