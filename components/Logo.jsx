import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Logo = () => {

  let showLogo;
  const logoStyle = {
    margin: "2vw",
    // backgroundColor: 'red'
  };
  return (
    <div style={logoStyle}>
      <Link href="/">
        
          <Image
            src="/assets/HerewithLogo-Cerulean.svg"
            alt="Herewith Logo"
            width={110}
            height={21.96}
            role="button"
          />
        
      </Link>
    </div>
  );
};

export default Logo;
