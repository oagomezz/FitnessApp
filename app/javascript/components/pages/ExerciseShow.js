import React from 'react';
import { Table } from 'reactstrap';
import { NavLink, useParams } from 'react-router-dom';


const ExerciseShow = ({currentUser, exercises, workouts}) => {
    const { workoutId } = useParams()
    const { exerciseId } = useParams()
    let currentWorkout = workouts?.find((workout) => workout.id === +workoutId)
    let currentExercise = exercises?.find((exercise) => exercise.id === +exerciseId)
    return(
        <>
    {exercises?.map((exercise,index) => {
        if(currentWorkout.id === exercise.workout_id && currentUser === currentWorkout.user_id && exercise.user_id === currentUser && exercise.id === currentWorkout.exercise_id){
            return(
                <>
                <Table
                dark
                hover
                responsive
                striped
                key={index}
                >
                        <thead>
                            <tr>
                            <th>
                                #
                            </th>
                            <th>
                            Exercise
                            </th>
                            <th>
                                Sets
                            </th>
                            <th>
                                Reps
                            </th>
                            <th>
                                Weight
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">
                                {index}
                            </th>
                            <td>
                                {currentExercise.name}
                            </td>
                            <td>
                                {currentExercise.sets}
                            </td>
                            <td>
                                {currentExercise.repetitions}
                            </td>
                            <td>
                                {currentExercise.weight}
                            </td>
                            </tr>
                        </tbody>
                    </Table>
                     <NavLink to={`/workoutshow/${currentWorkout.id}/exerciseedit/${currentExercise.id}`} className="nav-link">
                     Edit Exercise
                    </NavLink>
                 </>
    )}})}
    </>
    )}

export default ExerciseShow