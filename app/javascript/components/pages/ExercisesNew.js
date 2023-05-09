import React, { useState } from 'react';
import { Form, FormGroup, Input, Label, Button } from "reactstrap"

const ExerciseNew = ({ createExercise }) => {
    const [newExercise, setNewExercise] = useState({
        name: "",
        sets: "",
        repetitions: "",
        weight: ""
})
    const handleChange = (e) => {
        setNewExercise({ ...newExercise, [e.target.name]: e.target.value})
    }
    const handleSubmit = () => {
        createExercise(newExercise)
    }
return(
    <Form>
  <FormGroup>
    <Label for="name">Name</Label>
    <Input type="text" name="name" onChange={handleChange} value={newExercise.name}/>
  </FormGroup>
  <FormGroup>
    <Label for="sets">Sets</Label>
    <Input type="text" name="sets" onChange={handleChange} value={newExercise.sets}/>
  </FormGroup>
  <FormGroup>
    <Label for="repetitions">Reps</Label>
    <Input type="text" name="repetitions" onChange={handleChange} value={newExercise.repetitions}/>
  </FormGroup>
  <FormGroup>
    <Label for="weight">Weight</Label>
    <Input type="text" name="weight" onChange={handleChange} value={newExercise.weight}/>
  </FormGroup>
  <Button onClick={handleSubmit} name="submit">
    Submit Exercise
  </Button>
</Form>
)
} 
export default ExerciseNew