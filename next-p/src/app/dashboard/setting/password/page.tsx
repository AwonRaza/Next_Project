import Link from "next/link"

const pass = ()=>{
    return(
        <>
        <div>
            This is Secure Password....
        </div>
        <Link href="./">Home</Link>
        <Link href="./Dashboard">Dashboard</Link>
        <Link href="./dashboard/setting">Setting</Link>
        <br></br>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A laudantium cupiditate velit accusantium culpa eum numquam magnam, officiis doloribus at? Ducimus nemo mollitia voluptatem perspiciatis voluptates nobis dolor explicabo facilis. </p>
        
        
        
        </>
    )
}



export default pass