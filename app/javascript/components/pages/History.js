import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Table, 
} from 'reactstrap';

function History({ exercises, workouts }) {
    const [open, setOpen] = useState("1");
    const toggle = (id) => {
      if (open == id) {
        setOpen();
      } else {
        setOpen(id);
      }
    };
    return ( 
        <main>
            {workouts?.map((workout, index) => {
                return (
                <>
                   <div>
      <Accordion open={open} toggle={toggle} key={index}>
        <AccordionItem>
          <AccordionHeader targetId={index.toString()}>{workout.muscle_group_name}</AccordionHeader>
          <AccordionBody accordionId={index.toString()}>
            {exercises?.map((exercise,index) => {
                if(workout.id === exercise.workout_id){
                return(
                    <>
                    <Table
                        // dark
                        // hover
                        // responsive
                        // striped
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
                            </tr>
                        </tbody>
                    </Table>      
                        </>
                )}
            }
            
            )}
            <NavLink to={`/workoutshow/${workout.id}`} >
                        See More Details
                    </NavLink>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
                </>
                )
            })}
        </main>            
    );
}

export default History;