import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import ComingSoon from "../assets/undraw_under_construction_-46-pa.svg";

function Bookmark() {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__row">
            <h2 className="font-semibold text-wrap"></h2>
            <h1 className="font-bold text-7xl items-center flex justify-center mt-[84px] mb-[84px] text-wrap">Favorites section COMING SOON!!</h1>
            <img className="max-w-[700px]" src={ComingSoon} />
          </div>
        </div>
      </header>
    </section>
  )
}

export default Bookmark