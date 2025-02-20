

import { useRouter } from "next/router"
const Home = () => {
    const router = useRouter()
 const clickMeFunction =() => {
    router.push('/about')
 }
    
    return(
        <>
        Home
        <button type="button" onClick={clickMeFunction}>Move</button>
        </>
    )
}

export default Home