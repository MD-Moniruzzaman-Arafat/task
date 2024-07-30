import "./App.css";
import Form from "./components/form/Form";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <div className="mx-20 my-10">
          <Form />
        </div>
      </div>
    </>
  );
}

export default App;
