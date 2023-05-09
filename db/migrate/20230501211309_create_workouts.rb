class CreateWorkouts < ActiveRecord::Migration[7.0]
  def change
    create_table :workouts do |t|
      t.string :muscle_group_name
      t.integer :user_id
      t.integer :exercise_id

      t.timestamps
    end
  end
end
