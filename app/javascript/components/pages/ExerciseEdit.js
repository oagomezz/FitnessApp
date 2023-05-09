import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, FormGroup, Input, Label, Button } from "reactstrap"

const ExerciseEdit = ({ updateExercise, exercises }) => {
    const { exerciseId } = useParams()
    let currentExercise = exercises?.find((exercise) => exercise.id === +exerciseId)
    const [editExercise, setEditExercise] = useState({
        name: currentExercise.name,
        sets: currentExercise.sets,
        repetitions: currentExercise.repetitions,
        weight: currentExercise.weight
})
    const handleChange = (e) => {
        setEditExercise({ ...editExercise, [e.target.name]: e.target.value})
    }
    const navigate = useNavigate()
    const handleSubmit = () => {
        updateExercise(editExercise, currentExercise.id)
        navigate(`/workoutshow/${currentExercise.workout_id}`)
    }
return(
    <Form>
  <FormGroup>
    <Label for="name">Name</Label>
    <Input type="text" name="name" onChange={handleChange} value={currentExercise.name}/>
  </FormGroup>
  <FormGroup>
    <Label for="sets">Sets</Label>
    <Input type="text" name="sets" onChange={handleChange} value={currentExercise.sets}/>
  </FormGroup>
  <FormGroup>
    <Label for="repetitions">Reps</Label>
    <Input type="text" name="repetitions" onChange={handleChange} value={currentExercise.repetitions}/>
  </FormGroup>
  <FormGroup>
    <Label for="weight">Weight</Label>
    <Input type="text" name="weight" onChange={handleChange} value={currentExercise.weight}/>
  </FormGroup>
  <Button onClick={handleSubmit} name="submit">
    Submit Exercise
  </Button>
</Form>
)
} 
export default ExerciseEdit