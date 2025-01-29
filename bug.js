```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* This route will cause an error because of the nested Route inside another Route with an element prop */}
        <Route path="/users/*" element={<Users />}>
          <Route path=":userId" element={<User />} />
        </Route>
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
  return <div>Users</div>;
}

function User() {
  return <div>User</div>;
}

export default App;
```