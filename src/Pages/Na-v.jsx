import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    navigate(`/search?query=${search}`);


  };

  return (
    <>
      {/* Mobile Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 flex flex-col justify-between gap-2 p-4 lg:hidden z-50">
        <div>               
             <form
          onSubmit={handleSubmit}
          className="flex backdrop-blur-md  border border-white/30  justify-between  border p-1 rounded-full"
        >
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="px-4 py-2  w-full   rounded  outline-none"
          />
          <button type="submit">
            <img className="w-8 h-8" src="/magnifying-glass.svg" />
          </button>
        </form></div>
        <div className=" w-full flex justify-evenly">
          <button>
            <img src="/home.svg" className="h-8 w-8" />
          </button>
          <button>
            <img src="/game.svg" className="h-8 w-8" />
          </button>
          <button>
            <img src="/user.svg" className="h-8 w-8" />
          </button>
        </div>
      </div>

      {/* Desktop Top Nav */}
      <div className=" lg:flex fixed w-full justify-center  hidden  py-6 z-50">
        <div className="flex gap-12 items-center">
          <Link to="/" className="hidden lg:block">
            <img className="w-8 h-8" src="/home.svg" />
          </Link>

          <form
            onSubmit={handleSubmit}
            className="flex border p-1 rounded-full"
          >
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="px-4 py-2 rounded w-64 outline-none"
            />
            <button type="submit">
              <img className="w-8 h-8" src="/magnifying-glass.svg" />
            </button>
          </form>

          <Link to="/game" className="hidden lg:block">
            <img className="w-8" src="/game.svg" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
