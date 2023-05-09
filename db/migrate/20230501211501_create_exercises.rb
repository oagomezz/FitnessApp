class CreateExercises < ActiveRecord::Migration[7.0]
  def change
    create_table :exercises do |t|
      t.string :name
      t.integer :repetitions
      t.integer :sets
      t.integer :workout_id

      t.timestamps
    end
  end
end
