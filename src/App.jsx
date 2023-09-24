import { useState } from "react";

import MoviesList from "./pages/movies/MoviesList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <MoviesList />
      </div>
    </>
  );
}

export default App;
