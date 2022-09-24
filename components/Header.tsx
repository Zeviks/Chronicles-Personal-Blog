import Link from "next/link"

const Header = () => {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img className="w-44 object-contain cursor-pointer" src="/images/Logo.png" alt="Logo" />
        </Link>
      </div>
        <div className="hidden md:inline-flex items-center space-x-5">
          <Link href="https://www.natepacheco.dev/#about"><a className="text-white hover:text-slate-400 transition-all">About</a></Link>
          <Link href="https://www.natepacheco.dev/#contact"><a className="text-white hover:text-slate-400 transition-all">Contact</a></Link>
          <Link href="https://www.natepacheco.dev/#projects"><a className="bg-white hover:bg-slate-400 text-fontColor px-4 py-1 rounded-full transition-all">Portfolio</a></Link>
        </div>
    </header>
  )
}

export default Header