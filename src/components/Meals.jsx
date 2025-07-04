import MealItem from "./MealItem.jsx";
import Error from "./Error.jsx";

import useHttp from "../hooks/useHttp.js";

const requestConfig = {};

export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals!" message={error} />;
  }

  // if (!loadedMeals) {
  //   return <p>No meals found.</p>;
  // }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => {
        return <MealItem key={meal.id} meal={meal} />;
      })}
    </ul>
  );
}
