import Image from "next/image";

export default function Main() {

    return (

        <>

            <div className="w-full flex flex-wrap justify-center">

                <div className="w-full flex justify-center my-5"><p className="text-3xl text-black font-bold  border-b pb-5 px-5 rounded-3xl text-center">loremopojgpejrgerg;ergme;rmg;ermg;erg</p></div>
                <Image src="/assete/next.svg" width={200} height={250} alt="main" />

            </div>

            <div>
                <h4 className="text-text-3xl text-black font-bold  pb-5 px-5 my-5 text-center">hello world</h4>
            </div>

        </>

    )

}
