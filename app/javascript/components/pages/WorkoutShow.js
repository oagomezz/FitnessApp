import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { Table } from 'reactstrap';

const WorkoutShow = ({ workouts, exercises, currentUser }) => {
    const { workoutId } = useParams()
    let currentWorkout = workouts?.find((workout) => workout.id === +workoutId)
    console.log("LOG***",currentWorkout);
    return(
        <main>
            <>
                <h1>{currentWorkout.muscle_group_name}</h1>
                <NavLink to={`/workoutedit/${currentWorkout.id}`} className="nav-link">
                     Edit Workout
                </NavLink>
                {exercises?.map((exercise,index) => {
        if(currentWorkout.id === exercise.workout_id && currentUser === currentWorkout.user_id && exercise.user_id === currentUser){
            return(
                <Table
                // dark
                // hover
                // responsive
                // striped
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
                            <th>
                                Exercise Info
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">
                                {index}
                            </th>
                            <td>
                                {exercise.name}
                            </td>
                            <td>
                                {exercise.sets}
                            </td>
                            <td>
                                {exercise.repetitions}
                            </td>
                            <td>
                                {exercise.weight}
                            </td>
                            <td>
                            <NavLink to={`/workoutshow/${currentWorkout.id}/${exercise.id}`} className="nav-link">
                                Show Exercise
                            </NavLink>
                            </td>
                            </tr>
                        </tbody>
                    </Table>
                )}})}
            </>
        </main>
    )
}

export default WorkoutShow