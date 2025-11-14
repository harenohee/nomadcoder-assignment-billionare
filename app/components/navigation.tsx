import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
  return (
    <div className="bg-gray-400 p-2">
      <Link href="/">
        <Image
          className="dark:invert"
          src="/home.svg"
          alt="logo"
          width={50}
          height={50}
          priority
        />
      </Link>
    </div>
  );
};

export default Navigation;
