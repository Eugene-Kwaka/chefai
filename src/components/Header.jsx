import { GiCook } from "react-icons/gi" // Import a chef/cook icon

export default function Header() {
    return (
        <header>
            <GiCook size={40} color="#000000" /> {/* Adjust size and color as needed */}
            <h1>Chef Dally</h1>
        </header>
    )
}
