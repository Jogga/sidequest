import { Link } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link> 
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </nav>
      </div>
  );
}

export default App;
