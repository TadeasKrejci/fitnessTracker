import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

// components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Tracker = () => {
  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };

    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className="container grid grid-cols-2 gap-[100px] mt-20">
      <div className="workouts">
        {workouts?.map((workout) => (
          <WorkoutDetails
            className="col-span-3"
            workout={workout}
            key={workout._id}
          />
        ))}
        {workouts?.length === 0 && (
          <h3 className="text-[4rem]">Tady nic není 💩</h3>
        )}
      </div>
      <WorkoutForm className="col-span-1" />
    </div>
  );
};

export default Tracker;
