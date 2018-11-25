Rails.application.routes.draw do
  get 'static/pages'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :create]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:index, :show, :create, :update, :destroy]
    resources :likes, only: [:create, :show, :destroy]
    resources :comments, only: [:index, :create, :edit, :destroy]
  end
end
