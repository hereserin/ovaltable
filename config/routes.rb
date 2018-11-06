Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

     resources :photos, only: [:show]

   namespace :api, defaults: {format: :json} do
     resources :users, only: [:create]
     resource :session, only: [:create, :destroy]
     resources :restaurants, only: [:index, :show]
     resources :reservations, only: [:index, :show, :create, :edit, :destroy]
     resources :hours_of_operation, only: [:index]
     resources :photos, only: [:show, :create, :index, :destroy]
     resources :reviews, only: [:create, :index, :destroy]
   end

   root to: 'static_pages#root'




end
