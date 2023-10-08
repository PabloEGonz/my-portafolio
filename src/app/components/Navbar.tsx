import { NextPage } from "next";

interface Props {}

const Navbar: NextPage<Props> = ({}) => {
  return (
    <nav className="fixed inset-x-0 top-0 left-0 bg-black p-6">
      <ul className="flex  w-4/6 gap-12 ">
        <li className="text-wood hover:text-light-green">About</li>
        <li className="text-wood hover:text-light-green">Home</li>
        <li className="text-wood hover:text-light-green">Projects</li>
      </ul>
    </nav>
  );
};

export default Navbar;
