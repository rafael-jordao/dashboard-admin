import Nav from "./Nav";

export default function Header() {
  return (
    <header className="grid lg:grid-cols-5 px-4 pt-4 items-center gap-2">
      <div className="col-start-2 col-span-2">
        <input placeholder="Procurar" className="rounded-lg shadow-md p-3 mb-3 w-full" type="text" />
      </div>
      <Nav />
    </header>
  )
}