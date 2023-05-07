import Link from "next/link"

const dashboard = ()=>{
    return(
        <>
        <div>
            This is dashboard........
        </div>

        <Link href="./">Home</Link>
        <Link href="./dashboard/analytics">Analytics</Link>
        <Link href="./dashboard/setting">Setting</Link>
        </>
        )
}


export default dashboard