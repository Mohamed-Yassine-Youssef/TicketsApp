import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "./dojo-logo.png";
const NavBar = () => {
  return (
    <nav>
      <Image
        src={Logo}
        alt="Dojo Helpdesk logo"
        width={70}
        placeholder="blur"
        quality={100}
      />
      <h1>Dojo Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tikets">Tickets</Link>
    </nav>
  );
};

export default NavBar;
