import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

function Login() {
  const { isPanding, login } = useLogin();
  const [errors, setErrors] = useState({});
  const handelSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("password");

    console.log({ email, password });

    const newErrors = {};

    if (!email) newErrors.email = true;
    if (!password) newErrors.password = true;

    setErrors(newErrors);
  };
  return (
    <main>
      <div className=" registration hidden lg:flex h-full grow"></div>
      <div className="registration grow lg:bg-none grid place-items-center ">
        <div className="border-2 py-25 rounded-2xl px-20 bg-slate-900 opacity-[0.8]">
          <h1 className="text-3xl font-bold text-center pb-5">Login</h1>
          <form onSubmit={handelSubmit} className="w-75 pb-3">
            <FormInput
              name="email"
              label="Email"
              type="email"
              placeholder=" For example: mail@gmail.com"
              error={errors.email}
            />
            <FormInput
              name="password"
              label="Password"
              type="password"
              placeholder=" For example: 1234"
              error={errors.password}
            />

            <div className="flex justify-end mt-10">
              <button className="btn btn-primary">Primary</button>
            </div>
          </form>
          <div className="text-center ">
            <span className="opacity-[0.6]"> Sizda Profil Bo'lmasa</span>
            <Link
              className="ml-1.5 link opacity-[0.9] link-secondary"
              to="/siginup"
            >
              Signup
            </Link>
            <br />
            <span className="opacity-[0.6]">
              Orqali Kirishni Tavfsiya qilaman
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
