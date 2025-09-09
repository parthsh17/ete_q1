import React from "react";

function BreedTable({ breeds }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-gray-800 rounded-lg shadow">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Description</th>
            <th className="px-4 py-2 text-left">Lifespan</th>
            <th className="px-4 py-2 text-left">Weight (kg)</th>
            <th className="px-4 py-2 text-left">Hypoallergenic</th>
          </tr>
        </thead>
        <tbody>
          {breeds.map((breed) => (
            <tr key={breed.id} className="border-t border-gray-700">
              <td className="px-4 py-2">{breed.attributes.name}</td>
              <td className="px-4 py-2">{breed.attributes.description || "No description available."}</td>
              <td className="px-4 py-2">
                {breed.attributes.life?.min} - {breed.attributes.life?.max} years
              </td>
              <td className="px-4 py-2">
                {breed.attributes.weight?.metric ? `${breed.attributes.weight.metric}` : "N/A"}
              </td>
              <td className="px-4 py-2">
                {breed.attributes.hypoallergenic ? "Yes" : "No"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BreedTable;