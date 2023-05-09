require 'rails_helper'

RSpec.describe "Workouts", type: :request do
  describe "GET /index" do
    it 'gets a list of all the workouts' do
      Workout.create(
        muscle_group_name: "Chest Day",
        user_id: 1,
        exercise_id: 1
      )

      get '/workouts'

      exercise = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(exercise.length).to eq 1
    end
  end
  describe "POST /create" do
    it "creates an workout" do
      workout_params = {
        workout: {
          muscle_group_name: "Chest Day",
          user_id: 1,
          exercise_id: 1
        }
      }

      post '/workouts', params: workout_params
      expect(response).to have_http_status(200)
      workout = Workout.first
      expect(workout.muscle_group_name).to eq 'Chest Day'
    end
  end
end
