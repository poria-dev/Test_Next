
const og = {
    fullname: "poria",
    lastname: "rezaee",
    age: 20,
    about:"hello im pooria i think can do it every think  ....."
}
export default function Endsec() {
    return (
        <>

            <div className="flex flex-wrap gap-10 *:text-black *:font-bold">

                <h5>{og.fullname}</h5>
                <p>{og.about}</p>
                <span>{og.age}</span>

            </div>

        </>

    )
}