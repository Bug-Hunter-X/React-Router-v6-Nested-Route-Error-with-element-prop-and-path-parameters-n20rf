```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/*" element={<Users />}/>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <div>Home</div>;
}

function About() {
  return <div>About</div>;
}

function Users() {
  const { userId } = useParams();
  return (
    <div>
      {userId ? <User userId={userId} /> : <div>Users</div>}
    </div>
  );
}

function User({ userId }) {
  return <div>User {userId}</div>;
}

export default App;
```