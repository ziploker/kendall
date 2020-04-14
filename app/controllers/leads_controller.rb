class LeadsController < ApplicationController

    def create
        lead = Lead.new(event_params)
        if lead.save
          render json: lead
        else
          render nothing: true, status: :bad_request
        end
      end
      
      private
      
      def event_params
        params.require(:event).permit(:name, :phone, :email, :company, :zip, :message)
      end
end
