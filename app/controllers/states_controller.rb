class StatesController < ApplicationController
  respond_to :json, :html

  def index
    @statuses = []
    if params[:state]
      TweetStream::Client.new.track(params[:state]) do |status, client|
        @statuses << status.text
        client.stop if @statuses.length >= 1

        # pass the state name
        # to the controller
        # and set that to a variable
        # and use that variable in your string

        # how rails handles a ajax request, how do i see the region, handle arguments that are past through
        # render :json => @statuses
      end
      respond_with @statuses

      #params make endpoint that handles tweets, define a route where we send that ajax request to
      #make into json object, so I can grab it when I do the ajax call

      # @response = TweetStream.new(region)
      #instantiate class(state, keyword)
      #make response object an instance variable
      #access instance variable in view
    end
  end
end
