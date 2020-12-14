Rails.application.routes.draw do
  root 'lists#index'
  resources :lists do
    resources :todos
  end
end
