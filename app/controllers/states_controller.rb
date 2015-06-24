class StatesController < ApplicationController

  def index
      @statuses = []
      TweetStream::Client.new.track('css') do |status, client|
        @statuses << status.text
        client.stop if @statuses.length >= 3
        # how rails handles a ajax request, how do i see the region, handle arguments that are past through
        # render :json => @statuses
      end

      #params make endpoint that handles tweets, define a route where we send that ajax request to
      #make into json object, so I can grab it when I do the ajax call

      # @response = TweetStream.new(region)
      #instantiate class(state, keyword)
      #make response object an instance variable
      #access instance variable in view
    end
end
