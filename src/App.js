import {Provider} from "react-redux"
import Landing from "./components/Landing";
import store from "./Reducer/store"
function App() {
  return (
    <Provider store={store}>
      <Landing/>
    </Provider>
  );
}

export default App;
