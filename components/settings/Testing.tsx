import { currentProfile } from "@/hooks/intial-profile"

const Testing = async () =>{
    const user = await currentProfile()
    return(
        <>
            {user ? (
                <p>loging</p>
            ): (
                <p>not login</p>
            )}
        </>

    )
}

export default Testing;