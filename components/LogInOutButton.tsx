import { useSession, signIn, signOut } from "next-auth/react";

const LogInOutButton = (): JSX.Element => {
  const { data: session, status } = useSession();

  console.log(status);
  

  if (session) {
    console.log(session);
    return (
      <div className="flex items-center space-x-10">
        <div className="flex items-center space-x-2">
          {session.user?.image && (
            <img className="h-8 w-8 rounded-full border-2 border-stone-900" src={session.user?.image} alt="profile picture" />
          )}
          <p className="text-stone-300">{session.user?.name}</p>
        </div>
        <button className="log-in-out-btn" onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  }

  return (
    <div>
      <button className="log-in-out-btn" onClick={() => signIn()}>Sign In</button>
    </div>
  );
}

export default LogInOutButton;