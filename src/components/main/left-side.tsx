import Header from "./header";
import Hero from "./hero";
import Footer from "./footer";


export default function LeftSide() {
  return (
    <div className="flex flex-col h-full border-r border-line justify-between">
      <Header />
      <Hero />
      <Footer />
    </div>
  )
}
