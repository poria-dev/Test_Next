import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";


export default function App() {

  return (

    <>

      <Header />
      <h2 className="text-black">hello world</h2>
      <li><Link href="./gallery">click</Link></li>
      <li><Link className="text-2xl text-black" href='./page3'>click page3</Link></li>
      <Link href="./gallery/endpage">click</Link>
      <Image src="/next.svg" width={200} height={200} alt="t"/>
      <Link href='./products' className="text-black text-4xl">click and go products ...</Link>
      <Footer />
      

    </>

  )


}