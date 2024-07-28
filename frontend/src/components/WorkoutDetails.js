import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

const WorkoutDetails = ( {workout} ) => {
    const { dispatch } = useWorkoutsContext()

    const handleClick = async () => {
        const response = await fetch('/api/workouts/' + workout._id, {
                method: 'DELETE'
            })  
        const json = await response.json( )

        if (response.ok) {
            dispatch({ type: 'DELETE_WORKOUT', payload: json })
            console.log("new workout added successfully", json)
        }
    }

    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg):</strong> {workout.load} kg</p>
            <p><strong>Reps:</strong> {workout.reps} </p>
            <p>{workout.createdAt}</p>
            <span onClick={handleClick}>Delete</span>
        </div>
    )
}

export default WorkoutDetails;