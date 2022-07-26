import {Provider} from "react-redux"
import Landing from "./components/Landing";
import store from "./Reducer/store"
import {Route, Routes} from "react-router-dom"
import NutritionPage from "./components/NutritionPage";
import WorkoutPage from "./components/WorkoutPage";
function App() {
  return (
    <Provider store={store}>
      <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/Nutrition" element={<NutritionPage/>}/>
      <Route path="/Workout" element={<WorkoutPage/>}/>
      </Routes>
    </Provider>
  );
}

export default App;
