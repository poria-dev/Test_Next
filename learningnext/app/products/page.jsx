import Link from "next/link";
import Main from "./main";
import Sec1 from "./sec1";
import Endsec from "./sec2";

export default function Product() {
    return (

        <>
            <Sec1 />
            <p className="text-black font-bold my-5">pge org import header components and sec1 ... </p>
            <Main />
            <Endsec />
            <Link href="./../" className="text-4xl text-black font-bold">back home</Link>
        </>

    )
}