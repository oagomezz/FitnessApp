class ExercisesController < ApplicationController
    def index
        exercises = Exercise.all
        render json: exercises
    end

    def create
        exercise = Exercise.create(exercise_params)
        render json: exercise
    end

    def update
    end
    def destroy
    end

    private
    def exercise_params
        params.require(:exercise).permit(:name, :repetitions, :sets, :workout_id)
    end
end
