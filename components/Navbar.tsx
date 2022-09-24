import LogInOutButton from "./LogInOutButton";


const Navbar = (): JSX.Element => {
  return (
    <nav className='bg-stone-800 p-2 text-center w-full flex justify-between px-10'>
      <h1 className='text-xl font-thin text-stone-300'>Papyr.it</h1>
      <LogInOutButton />
    </nav>
  );
}

export default Navbar;