import { useSelector, useDispatch } from "react-redux";
import { increment } from "./store/slices/counterSlice";

import "./App.css";
import { useGetPostsQuery } from "./store/apis/post";

function App() {
  const { data: posts = [], error, isLoading } = useGetPostsQuery();

  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          count is {counter}
        </button>
      </div>
      <hr />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {posts.map((item) => (
            <p key={item.id}>{item.title}</p>
          ))}
        </>
      )}
    </div>
  );
}

export default App;
