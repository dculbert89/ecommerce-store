import Link from "next/link";

import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "@/components/navbar-actions";
// import { ThemeToggle } from "./theme-toggle";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex flex-wrap sm:flex-nowrap h-16 items-center">
          <Link
            href="/"
            className="ml-0 sm:ml-0 gap-x-2 text-center sm:text-left"
          >
            <p className="font-bold text-xl text-center sm:text-left">
              Great Apparel Inc
            </p>
          </Link>
          <MainNav data={categories} />
          <div className="flex space-x-4 absolute right-8 ">
            <NavbarActions />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
