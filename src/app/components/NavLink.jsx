import Link from "next/link" ;

const NavLink = ({ href , title}) => {
    return (
        <Link
         href={href}
         className="block py-2 pl-3 pr-4 text-[#bcd6e8] sm:text-xl rounded md:p-0 hover:text-rose-500"
         >
            {title}
        </Link>
    );
};


export default NavLink ;