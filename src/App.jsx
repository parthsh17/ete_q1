import { useEffect, useState } from "react";
import axios from "axios";
import BreedCard from "./components/breedcard";

function App() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    axios.get("https://dogapi.dog/api/v2/breeds")
      .then((res) => setBreeds(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-black text-white min-h-screen"> 
      {/* dark black background */}
      <div className="container mx-auto p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold"> Dog Breed Explorer</h1>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {breeds.map((breed) => (
            <BreedCard key={breed.id} breed={breed} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
