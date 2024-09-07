import { nav } from "../lib/Constance";
import { Link } from "react-router-dom";
import { Heart, Search, ShoppingCart, User2 } from "lucide-react";
import { UserButton, useUser } from "@clerk/clerk-react";

function Navigation() {
  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <nav className="flex gap-2 justify-around mx-5 h-[60px] items-center bg-transparent">
      <ul>
        <li className="text-4xl font-serif capitalize">Logo</li>
      </ul>
      <ul className="flex gap-10 h-full items-center">
        {nav.map((label) => (
          <Link
            key={label.name}
            to={label.url}
            className="text-xl capitalize font-semibold font-mono relative navAnimation hover:after:absolute after:w-full after:h-0.5 after:bg-white after:left-0 after:-bottom-1 "
          >
            {label.label}
          </Link>
        ))}
      </ul>
      <ul className="flex items-center justify-center gap-3">
        {/* <li className="bg-white/50 rounded-lg p-1">
          <Search />
        </li>
        <li className="bg-white/50 rounded-lg p-1">
          <Heart />
        </li> */}
        {isSignedIn ? (
          <li className="bg-white/50 rounded-lg p-1 mt-2">
            <UserButton />
          </li>
        ) : (
          <Link to={"/login"} className="bg-white/50 rounded-lg p-1">
            <User2 />
          </Link>
        )}

        <Link to={"/cart"} className="bg-white/50 rounded-lg p-1">
          <ShoppingCart />
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
