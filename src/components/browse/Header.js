import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [showCard, setShowCard] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="flex items-center justify-between bg bg-gradient-to-b from-gray-950 p-2">
      <div className="flex items-center ml-2">
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
          className="h-14 w-32"
        />
        <ul className="flex gap-4 ml-7 text-white">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">TV Shows</li>
          <li className="cursor-pointer">Movies</li>
          <li className="cursor-pointer">New & Popular</li>
          <li className="cursor-pointer">My List</li>
          <li className="cursor-pointer">Browse by Languages</li>
        </ul>
      </div>
      <div className="flex text-white gap-3 pr-6">
        <div className="w-8">
          <span>🔍</span>
        </div>
        <span>Children</span>
        <span>🔔</span>
        <div
          className="flex items-center gap-1 relative  cursor-pointer"
          onClick={() => setShowCard(!showCard)}
        >
          <img
            className="rounded-md"
            src="https://occ-0-4189-3646.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"
          />
          <span className="">🔽</span>
          {/* conditonal card */}
        </div>
        {showCard && (
          <div className="absolute top-16 right-10 w-48 p-4 bg-black opacity-90">
            <div className="flex gap-3 items-center mb-5">
              <img
                className="rounded-md"
                src="https://occ-0-4189-3646.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"
              />
              <p>{user?.displayName}</p>
            </div>
            <p
              onClick={userSignOut}
              className="hover:underline cursor-pointer text-sm"
            >
              Sign out of Netflix
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
