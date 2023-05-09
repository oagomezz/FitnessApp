require 'rails_helper'

RSpec.describe "Exercises", type: :request do
  describe "GET /index" do
    it 'gets a list of all the exercises' do
      Exercise.create(
        name: 'Chest Press',
        repetitions: 10,
        sets: 4,
        workout_id: 1
      )
      get '/exercises'

      exercise = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(exercise.length).to eq 1
    end
  end
  describe "POST /create" do
    it "creates an exercise" do
      exercise_params = {
        exercise: {
          name: 'Chest Press',
          repetitions: 10,
          sets: 4,
          workout_id: 1
        }
      }

      post '/exercises', params: exercise_params
      expect(response).to have_http_status(200)
      exercise = Exercise.first
      expect(exercise.name).to eq 'Chest Press'
    end
  end
end
