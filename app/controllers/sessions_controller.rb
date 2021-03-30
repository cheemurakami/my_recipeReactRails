class SessionsController < Devise::SessionsController
  def signed_in
    if user_signed_in?
      render json: {
        user: current_user
      }
    else
      render json: {
        user: nil
      } 
    end
  end
end