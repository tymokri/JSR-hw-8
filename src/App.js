import "./App.css";
import Carousel from "./components/Carousel";

function App() {
    const slides = [
        {id: 1, src: "https://images.unsplash.com/photo-1670406208570-44740a419f4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1037&q=80"},
        {id: 2, src: "https://images.unsplash.com/photo-1670502657450-210052d83fe5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80"},
        {id: 3, src: "https://images.unsplash.com/photo-1670411323413-d16b52c15b37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"}
    ]

    // const slides = [
    //     {id: 1, src: "../assets/img1.jpg"},
    //     {id: 2, src: "../assets/img2.jpg"},
    //     {id: 3, src: "./assets/img3.jpg"}
    // ]

  return (
    <div className="App">
      <Carousel images={slides}/>
    </div>
  );
}

export default App;
