import { ModeToggle } from "./theme-toggle"

const Navbar = () => {
  return (
    <nav className="shadow-md p-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <span className="font-bold">where in the world?</span>
        <ModeToggle />
      </div>
    </nav>
  )
}

export default Navbar