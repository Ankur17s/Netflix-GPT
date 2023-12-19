import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../../redux/userSlice";
import { setGptSearch } from "../../redux/gptSlice";
import { language } from "../../utils/constants";
import { setLang } from "../../redux/configSlice";

const Header = () => {
  const [showCard, setShowCard] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showLang = useSelector((store) => store.gpt.toggleGptSearch);

  const handleGptSearchView = () => {
    dispatch(setGptSearch());
  };

  const handleLanguageChange = (e) => {
    const { value } = e.target;
    dispatch(setLang(value));
  };

  const userSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, displayName, email, photoURL } = user;
        dispatch(addUser({ uid, displayName, email, photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
  return (
    <div className="flex items-center justify-between bg-gradient-to-b from-gray-950 p-2 absolute z-10 w-full">
      <div className="flex items-center">
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
          className="h-14 w-32"
        />
        {user && (
          <ul className="flex gap-4 ml-7 text-white">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">TV Shows</li>
            <li className="cursor-pointer">Movies</li>
            <li className="cursor-pointer">New & Popular</li>
            <li className="cursor-pointer">My List</li>
            <li className="cursor-pointer">Browse by Languages</li>
          </ul>
        )}
      </div>
      {user && (
        <div className="flex text-white gap-3 pr-6">
          {showLang && (
            <select
              className="bg-gray-800 text-white px-2 py-2 rounded-lg cursor-pointer outline-none"
              onChange={handleLanguageChange}
            >
              {language.map((language) => (
                <option value={language.id} key={language.id}>
                  {language.name}
                </option>
              ))}
            </select>
          )}
          <div className="w-8">
            <span className="cursor-pointer" onClick={handleGptSearchView}>
              {showLang ? "🏠" : "🔍"}
            </span>
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
          </div>
          {showCard && (
            <div className="absolute top-16 right-10 w-48 p-4 bg-black opacity-90">
              <div className="flex gap-3 items-center mb-5">
                <img
                  className="rounded-md"
                  src="https://occ-0-4189-3646.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"
                />
                <p className="text-white">{user?.displayName}</p>
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
      )}
    </div>
  );
};

export default Header;
