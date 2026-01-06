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
      <div className="fixed bottom-0 left-0 right-0 flex justify-between p-4 lg:hidden z-50">
        <button>
          <img src="/home.svg" className="h-10 w-10" />
        </button>
        <button>
          <img src="/game.svg" className="h-10 w-10" />
        </button>
        <button>
          <img src="/user.svg" className="h-10 w-10" />
        </button>
      </div>

      {/* Desktop Top Nav */}
      <div className=" lg:flex fixed w-full justify-center    py-6 z-50">
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
