import { useSelector } from "react-redux";

function Navbar() {
  const { user } = useSelector((store) => store.user);
  return (
    <>
      <section className="p-5">
        {" "}
        <div className="border-2 w-[100px] h-[100px] rounded-2xl grid place-items-center">
          <div>
            <h1>{user.displayName}</h1>
            <img
              className="rounded-[50%] ml-4"
              src={user.photoURL}
              alt="Qobiljon"
              width={30}
              height={30}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
