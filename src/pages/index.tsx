import { signIn, signOut, useSession } from "next-auth/client"

export default function index() {
  const [session] = useSession()

  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return <>
    Not signed in <br/>
    <button onClick={() => {
      signIn("github", {callbackUrl: "http://localhost:3000/Home"})
    }}>Sign in</button>
  </>
}