import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Card from "./Card.jsx";

const SWIPE_THRESHOLD = 60;

const CardData = () => {
  const [redata, setRedata] = useState([]);
  const [current, setCurrent] = useState(0);
  const startY = useRef(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % redata.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + redata.length) % redata.length);
  };

  // 🔹 TOUCH
  const handleTouchStart = (e) => {
    startY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const endY = e.changedTouches[0].clientY;
    handleSwipe(endY);
  };

  // 🔹 MOUSE
  const handleMouseDown = (e) => {
    startY.current = e.clientY;
  };

  const handleMouseUp = (e) => {
    handleSwipe(e.clientY);
  };

  const handleSwipe = (endY) => {
    const diff = endY - startY.current;
    if (Math.abs(diff) < SWIPE_THRESHOLD) return;
    diff < 0 ?   next() : prev();
  };

  const fetchData = async () => {
    const offset = Math.floor(Math.random() * 100);
    const list = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=6`
    );

    const allData = await Promise.all(
      list.data.results.map(async (poke) => {
        const res = await axios.get(poke.url);
        return res.data;
      })
    );

    setRedata(allData);
    setCurrent(0);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex relative lg:hidden py-8 px-4 flex-col gap-4  bg-black items-center h-[80%] w-full pt-4">
       <h1 className='mb-8 text-white text-[10vw] font-[popbold]'>POKEMON CARDS</h1>
      <div
        className="relative h-[80%] w-full pt-4   lg:hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
  transition-transform duration-300 ease-in-out
      >
        {redata.map((elem, idx) => (
          <Card
            key={elem.id}
            elem={elem}
            idx={idx}
            current={current}
            total={redata.length}
          />
        ))}
      </div>
    </div>
  );
};

export default CardData;
