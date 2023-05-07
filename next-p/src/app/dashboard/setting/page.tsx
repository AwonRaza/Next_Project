import Link from "next/link"


const setting = ()=>{
    return (
        <>
        <div>
            This is Setting....<br></br>

            <Link href="./">Home</Link>
            <Link href="./dashboard">Dashboard</Link>
            <Link href="./dashboard/setting/profile">Profile</Link>
            <Link href="./dashboard/setting/password">Password</Link>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis nam officiis nesciunt ab, esse suscipit error dolores temporibus quidem. Earum quia quis saepe voluptas autem minima inventore doloremque soluta natus?
            </p>

        </div>
        
        
        </>
    )
}


export default setting