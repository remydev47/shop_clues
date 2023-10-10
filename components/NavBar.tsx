import Link from "next/link";
import Image from "next/image";

const navLinks = [
    {src: "/assets/icons/search.svg", alt: "search", },
    {src: "/assets/icons/black-heart.svg", alt: "heart", },
    {src: "/assets/icons/user.svg", alt: "user", }
];

const NavBar = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link href="/" className={styles.link1}>
                    <Image 
                       src="/assets/icons/logo.svg"
                       width={24}
                       height={27}
                       alt="logo"
                    />
                    <p className={styles.p}>
                        Price<span className="text-primary">Clue</span>
                    </p>
                </Link>
                <div className={styles.elements}>
                    {navLinks.map((icon) => (
                        <Image 
                           key={icon.alt}
                           src={icon.src}
                           alt={icon.alt}
                           width={27}
                           height={28}
                           className="object-contain"
                        />
                    ))}
                </div>
            </nav>
        </header>
    )
}

export default NavBar; 

const styles = {
   header: `w-full`,
   link1:`flex items-center gap-1`,
   nav:`nav`,
   p: `nav-logo`,
   elements:`flex items-center gap-5`,
}