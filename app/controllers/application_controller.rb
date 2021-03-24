class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  respond_to :html, :json
  private
    def json_response(object, status = :ok)
      render json: object, status: status
    end
end
