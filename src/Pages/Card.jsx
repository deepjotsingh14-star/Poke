import React from "react";

const Card = ({ elem, idx, current, total }) => {
    const offset = (idx - current + total) % total;
        console.log(elem);
        
    if (offset > 2) return null;

    // 🔹 Pehle color object
    const color = {
        water: {
            bg: "url('/noise.svg'), radial-gradient(circle, rgba(0,86,245,1) 0%, rgba(64,131,255,1) 41%)",
            shadow: "0 0 4rem 2rem rgba(64,131,255,0.8)",
        },
        fire: {
            bg: "radial-gradient(circle, rgba(255,94,0,1) 0%, rgba(255,170,64,1) 45%)",
            shadow: "0 0 4rem 2rem rgba(255,120,0,0.8)",
        },
        grass: {
            bg: "radial-gradient(circle, rgba(0,200,83,1) 0%, rgba(100,221,170,1) 45%)",
            shadow: "0 0 4rem 1.5rem rgba(0,200,83,0.8)",
        },
        normal: {
            bg: "radial-gradient(circle, #ddd 0%, #bbb 45%)",
            shadow: "0 0 3rem 1rem rgba(0,0,0,0.2)",
        },
        poison:{
            bg:"radial-gradient(circle,rgba(208, 0, 255, 1) 0%, rgba(192, 97, 255, 1) 52%)",
            shadow:"0 0 5rem 4rem rgba(192, 97, 255, 1)"
        }
    };

    // 🔹 Ab type nikalo
    const type = elem.types?.[0]?.type?.name || "normal";

    // 🔹 Ab safely theme lo
    const theme = color[type] || color.normal;

    return (
        <div
            className="absolute left-0 w-full h-full p-4 rounded-3xl overflow-hidden bg-white border flex flex-col transition-all duration-300 ease-in-out"
            style={{
                transform: `translateY(${-offset * 40}px) scale(${1 - offset * 0.05})`,
                zIndex: 100 - offset,
                   opacity: Math.abs(offset) > 2 ? 0 : 1,
                transition: "transform 0.4s ease, opacity 0.4s ease",
            }}
        >
            {/* IMAGE AREA */}
            <div className="relative h-full   rounded-3xl  w-full flex items-center justify-center">
                <div className="absolute   inset-0 flex items-center justify-center">
                    <div
                        className="h-48 w-48 rounded-full  bg-cover"
                        style={{
                            backgroundImage: theme.bg,
                            boxShadow: theme.shadow,
                            backgroundPosition: "center",
                        }}
                    >       </div>
                    <div className="absolute h-full w-full backdrop-blur-2xl border border-white/30">

                    </div>
                </div>

                <img
                    src={elem.sprites?.other?.dream_world?.front_default}
                    alt={elem.name}
                    className="relative z-10 h-full   object-contain"
                    draggable={false}
                />
            </div>

            {/* INFO AREA */}
            <div className="p-4  absolute h-full w-full"    >
                <h1 className="text-[12vw]   capitalize font-[popbold] font-light   ">{elem.name}</h1>
                <p className="text-sm text-gray-500 capitalize">{elem.types?.[0]?.type?.name}</p>
                <p className="text-sm text-gray-500 capitalize"> {elem.types?.[1]?.type?.name || ""}</p>
            </div>
        </div>
    );
};

export default Card;
