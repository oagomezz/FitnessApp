import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Form, FormGroup, Input, Label, Button } from "reactstrap"

const WorkoutEdit = ({ updateWorkout, workouts }) => {
    const { id } = useParams()
    let currentWorkout = workouts.find((workout) => workout.id === +id)

    const [editWorkout, setEditWorkout] = useState({
        muscle_group_name: currentWorkout.muscle_group_name
})
    const handleChange = (e) => {
        setEditWorkout({ ...editWorkout, [e.target.name]: e.target.value})
    }
    const handleSubmit = () => {
        updateWorkout(editWorkout, currentWorkout.id)
    }
return(
    <Form>
  <FormGroup>
    <Label for="muscle_group_name">Name</Label>
    <Input type="text" name="muscle_group_name" onChange={handleChange} value={currentWorkout.muscle_group_name}/>
  </FormGroup>
  <Button onClick={handleSubmit} name="submit">
    Submit Updated Workout!
  </Button>
</Form>
)
} 
export default WorkoutEdit