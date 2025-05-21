import Link from "next/link";

type Props = {
  size?: number;
};

const Logo = ({ size = 24 }: Props) => {
  return (
    <Link href={"/"}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className="inline-block mr-2"
      >
        <rect
          x="4"
          y="4"
          width="56"
          height="56"
          rx="12"
          ry="12"
          stroke="oklch(55.8% .288 302.321)"
          strokeWidth="5"
          fill="none"
        />
        <path
          d="M24 16 V48 Q44 48 44 32 Q44 16 24 16 Z"
          fill="none"
          stroke="oklch(55.8% .288 302.321)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
};

export default Logo;
