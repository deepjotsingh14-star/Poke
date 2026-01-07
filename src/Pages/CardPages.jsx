import React, { useEffect, useState } from "react";
import axios from "axios";

const CardPages = ({ props }) => {
  const { pokemon } = props;
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await axios.get(pokemon.url);
      setDetails(res.data);
    };
    fetchDetails();
  }, [pokemon.url]);

  if (!details) return <p>Loading card...</p>;
  const color = {
    water: {
      bg: "radial-gradient(circle, rgba(0,86,245,1) 0%, rgba(64,131,255,1) 41%)",
      shadow: "0 0 4rem 4rem rgba(64,131,255,0.8)",
    },
    fire: {
      bg: "  radial-gradient(circle, rgba(255,94,0,1) 0%, rgba(255,170,64,1) 45%)",
      shadow: "0 0 4rem 4rem rgba(255,120,0,0.8)",
    },
    grass: {
      bg: "  radial-gradient(circle, rgba(0,200,83,1) 0%, rgba(100,221,170,1) 45%)",
      shadow: "0 0 4rem 4rem rgba(0,200,83,0.8)",
    },
    normal: {
      bg: "  radial-gradient(circle, #ddd 0%, #bbb 45%)",
      shadow: "0 0 4  rem 4rem rgba(0,0,0,0.2)",
    },
    poison: {
      bg: "radial-gradient(circle,rgba(208, 0, 255, 1) 0%, rgba(192, 97, 255, 1) 52%)",
      shadow: "0 0 4rem 4rem rgba(192, 97, 255, 1)"
    }
  };
  const type = details.types?.[0]?.type?.name || "normal";

  // 🔹 Ab safely theme lo
  const theme = color[type] || color.normal;
  return (
    <div className="  lg:h-90 h-70 relative  bg-[#F9F8F6]  rounded-2xl lg:rounded-3xl overflow-hidden ">
      <div className="h-full absolute z-2  p-3 flex  w-full  ">

        <h1 className="font-[popbold] text-2xl first-letter:uppercase ">{details.name}</h1>

      </div>
      <div className="relative h-full rounded-3xl  w-full flex items-center justify-center">
        <div className="absolute w-full h-full flex justify-center items-center  ">
          <div
            className="lg:h-28 lg:w-28 h-18 w-18    rounded-full  bg-cover"
            style={{
              backgroundImage: theme.bg,
              boxShadow: theme.shadow,
              backgroundPosition: "center",
            }}
          >
          </div>
          {/* <div className="h-full a w-full absolute  mix-blend-overlay  "
            style={{
              backgroundImage: `url('/noise.svg')`,
            }}
          ></div>
          <div className="absolute h-full w-full backdrop-blur-sm border border-white/30"  >

          </div> */}
        </div>
        <img
          src={details.sprites?.other?.home?.front_default}
          alt={details.name}
          className="relative z-10 h-full   object-contain"
          draggable={false}
        />
      </div>
    </div>
  );
};

export default CardPages;
