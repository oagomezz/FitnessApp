import React from 'react';
import Home from './pages/Home'
import FitnessLog from './pages/FitnessLog';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Navigation from './components/Navigation';
import ExerciseList from './pages/Exercises';
import History from './pages/History';
import Header from './components/Header'
import { mockWorkout } from '../mockData'
import { mockExercise } from '../mockData'
import WorkoutShow from './pages/WorkoutShow';
import WorkoutNew from './pages/WorkoutNew';
import ExerciseNew from './pages/ExercisesNew';
import WorkoutEdit from './pages/WorkoutEdit';
import ExerciseEdit from './pages/ExerciseEdit';
import ExerciseShow from  './pages/ExerciseShow'

const App = (props) => {
  const createExercise = (exercise) => {
    console.log(exercise)
  }
  const createWorkout = (workout) => {
    console.log(workout)
  }
  const updateWorkout = (workout, id) => {
    console.log("workout", workout)
    console.log("id", id)
  }
  const updateExercise = (exercise, id) => {
    console.log("exercise", exercise)
    console.log("id", id)
  }
  return (
   <BrowserRouter>
        <Header {...props} /> 
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workoutshow/:workoutId/:exerciseId" element={<ExerciseShow currentUser={props.current_user.id} exercises={mockExercise} workouts={mockWorkout}/>} />
          <Route path="/workoutshow/:workoutId/newexercise" element={<ExerciseNew createExercise={createExercise} />} />
          <Route path="/newworkout" element={<WorkoutNew createWorkout={createWorkout} />} />
          <Route path="/workoutedit/:id" element={<WorkoutEdit updateWorkout={updateWorkout} workouts={mockWorkout}/>} />
          <Route path="workoutshow/:workoutId/exerciseedit/:exerciseId" element={<ExerciseEdit updateExercise={updateExercise} exercises={mockExercise}/>} />
          <Route path="/log" element={<FitnessLog />} />
          <Route path="/exercises" element={<ExerciseList />} />
          <Route path="/workoutshow/:workoutId/" element={<WorkoutShow workouts={mockWorkout} currentUser={props.current_user.id} exercises={mockExercise}/>} />
          <Route path="/history" element={<History exercises={mockExercise} workouts={mockWorkout} />} />
        </Routes>
   </BrowserRouter>
  )
}

export default App