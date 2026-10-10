import Link from "next/link"

const arr = ["zahra", "dara", "para", "khara"]
export default function Header() {

    return (

        <>

            <ul className="flex gap-5 *:text-2xl *:text-black *:cursor-pointer">

                <li><Link href="">home</Link></li>
                <li>about</li>
                <li>more</li>

            </ul>

            <div className="flex gap-5 flex-wrap w-50 bg-amber-500 h-50 *:text-2xl">
                {arr.map((val, i) => {

                    return (
                        <p className="text-black " key={i}>{val}</p>
                    )

                })}
            </div>

        </>

    )

}