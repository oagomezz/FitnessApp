import React, { useState } from 'react';
import { Form, FormGroup, Input, Label, Button } from "reactstrap"

const WorkoutNew = ({ createWorkout }) => {
    const [newWorkout, setNewWorkout] = useState({
        muscle_group_name: ""
})
    const handleChange = (e) => {
        setNewWorkout({ ...newWorkout, [e.target.name]: e.target.value})
    }
    const handleSubmit = () => {
        createWorkout(newWorkout)
    }
return(
    <Form>
  <FormGroup>
    <Label for="muscle_group_name">Name</Label>
    <Input type="text" name="muscle_group_name" onChange={handleChange} value={newWorkout.muscle_group_name}/>
  </FormGroup>
  <Button onClick={handleSubmit} name="submit">
    Submit Workout
  </Button>
</Form>
)
} 
export default WorkoutNew