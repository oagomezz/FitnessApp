const mockExercise = [
    {name: 'Chest Press', repetitions: 10, sets: 4, workout_id: 1, weight: 225, user_id: 1, id:1},
    {name: 'Deadlift', repetitions: 8, sets: 5, workout_id: 1, weight: 225, user_id: 1, id:2},
    {name: 'Squat', repetitions: 12, sets: 3, workout_id: 1, weight: 225, user_id: 2, id:3},
    {name: 'Bicep Curl', repetitions: 10, sets: 4, workout_id: 1, weight: 35, user_id: 1, id:4},
    {name: 'Shoulder Press', repetitions: 8, sets: 5, workout_id: 1, weight: 55, user_id: 1, id:5},
    {name: 'Lateral Raises', repetitions: 12, sets: 3, workout_id: 1, weight: 20, user_id: 1, id:6}
  ]

const mockWorkout = [
    {muscle_group_name: 'Chest Day', user_id: 1, exercise_id: 1, id: 3},
    {muscle_group_name: 'Pull Day', user_id: 1, exercise_id: 2, id: 1},
    {muscle_group_name: 'Legs Day', user_id: 1, exercise_id: 4, id: 2},
    {muscle_group_name: 'Chest Day', user_id: 1, exercise_id: 4, id: 4},
    {muscle_group_name: 'Pull Day', user_id: 1, exercise_id: 5, id: 5},
    {muscle_group_name: 'Chest Day', user_id: 1, exercise_id: 6, id: 6}
  ]

export {mockWorkout, mockExercise}
