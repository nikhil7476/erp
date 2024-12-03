import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Sidebar({ isOpen, toggleSidebar }) {
    return (
        <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
            <button className="hamburger" onClick={toggleSidebar}>
                <GiHamburgerMenu />
            </button>
            {isOpen && (
                <ul>
                    <li><Link href="/" title="Dashboard">Dashboard</Link></li>
                    <li><Link href="/home" title="Home">Home</Link></li>
                    <li><Link href="/master-entry" title="Master Entry">Master Entry</Link></li>
                    <li><Link href="/students" title="Students">Students</Link></li>
                </ul>
            )}
        </div>
    );
}
