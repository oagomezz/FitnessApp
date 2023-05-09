class WorkoutsController < ApplicationController
    def index
        workouts = Workout.all
        render json: workouts
    end

    def create
        workout = Workout.create(workout_params)
        render json: workout
    end

    def update
    end
    def destroy
    end
    private
    def workout_params
        params.require(:workout).permit(:muscle_group_name,:exercise_id, :user_id)
    end
end
