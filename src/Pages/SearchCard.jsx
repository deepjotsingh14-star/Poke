import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import CardPages from "./CardPages";

const SearchCard = () => {
  const [allPokemon, setAllPokemon] = useState([]); // only names & urls
  const [loading, setLoading] = useState(true);
  const [params] = useSearchParams();

  const search = params.get("query")?.toLowerCase() || "";

  // 🔥 Fetch all names once
  const fetchAllPokemon = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=1000`
      );
      setAllPokemon(res.data.results); // only name + url
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllPokemon();
  }, []);

  // 🔥 Filter names instantly on client
  const filteredPokemon = allPokemon.filter(p =>
    p.name.startsWith(search)
  );

  return (
    <div className="w-full p-2 bg-blue-500   ">
      <div className="w-full grid lg:grid-cols-5 grid-cols-2 lg:gap-[2rem]  gap-1      "     >
        {loading ? (
          <p>Loading Pokémon...</p>
        ) : filteredPokemon.length > 0 ? (
          filteredPokemon.map((pokemon, idx) => (
            <CardPages
              key={pokemon.name}
              props={{ pokemon, idx }} // pass props object
            />
          ))
        ) : (
          <p>No Pokémon Found</p>
        )}
 
           </div>
    </div>
  );
};

export default SearchCard;
// import { useSearchParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import React from "react";
// import CardPages from "./CardPages";

// const ITEMS_PER_PAGE = 10;

// const SearchCard = () => {
//   const [allPokemon, setAllPokemon] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

//   const [params] = useSearchParams();
//   const search = params.get("query")?.toLowerCase() || "";

//   // Fetch all Pokémon once
//   const fetchAllPokemon = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get(
//         `https://pokeapi.co/api/v2/pokemon?limit=1000`
//       );
//       setAllPokemon(res.data.results);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAllPokemon();
//   }, []);

//   // Reset visible cards when search changes
//   useEffect(() => {
//     setVisibleCount(ITEMS_PER_PAGE);
//   }, [search]);

//   // Filter Pokémon
//   const filteredPokemon = allPokemon.filter(p =>
//     p.name.startsWith(search)
//   );

//   // Show only visible items
//   const visiblePokemon = filteredPokemon.slice(0, visibleCount);

//   return (
//     <div className="w-full p-2 mb-30 bg-blue-500">
//       <div className="w-full grid lg:grid-cols-5 grid-cols-2  lg:gap-[2rem] gap-1">
//         {loading ? (
//           <p>Loading Pokémon...</p>
//         ) : visiblePokemon.length > 0 ? (
//           visiblePokemon.map((pokemon, idx) => (
//             <CardPages
//               key={pokemon.name}
//               props={{ pokemon, idx }}
//             />
//           ))
//         ) : (
//           <p>No Pokémon Found</p>
//         )}
//       </div>

//       {/* Show More Button */}
//       {!loading && visibleCount < filteredPokemon.length && (
//         <div className="flex justify-center ">
//           <button
//             onClick={() =>
//               setVisibleCount(prev => prev + ITEMS_PER_PAGE)
//             }
//             className="px-4 py-2 bg-white text-blue-600 font-semibold rounded hover:bg-gray-200"
//           >
//             Show more suggestions
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchCard;
