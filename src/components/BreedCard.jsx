function BreedCard({ breed }) {
  const { attributes } = breed;

  return (
    <div className="bg-gray-900 rounded-2xl shadow-lg p-5 hover:scale-105 transition">
      <h2 className="text-xl font-semibold mb-2">{attributes.name}</h2>
      <p className="text-sm mb-3">{attributes.description || "No description available."}</p>
      <ul className="text-sm space-y-1">
        <li>
          <span className="font-bold">Lifespan:</span>{" "}
          {attributes.life?.min} - {attributes.life?.max} years
        </li>
        <li>
          <span className="font-bold">Male Weight:</span>{" "}
          {attributes.male_weight?.min} - {attributes.male_weight?.max} kg
        </li>
        <li>
          <span className="font-bold">Female Weight:</span>{" "}
          {attributes.female_weight?.min} - {attributes.female_weight?.max} kg
        </li>
        <li>
          <span className="font-bold">Hypoallergenic:</span>{" "}
          {attributes.hypoallergenic ? " Yes" : " No"}
        </li>
      </ul>
    </div>
  );
}

export default BreedCard;
