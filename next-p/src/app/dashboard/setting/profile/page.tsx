import Link from "next/link"

const profile = ()=>{
    return(
        <>
        <div>This is Company Profile </div><br></br>
        <Link href="./">Home</Link>
        <Link href="./Dashboard">Dashboard</Link>
        <Link href="./dashboard/setting">Setting</Link>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur omnis explicabo corporis unde aut dolore. Commodi quisquam qui similique, excepturi distinctio nostrum iusto in ad esse voluptate blanditiis ex tenetur?
        </p>
        
        
        </>
    
    )

}

export default profile