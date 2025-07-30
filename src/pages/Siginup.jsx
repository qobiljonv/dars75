import { useState } from "react";
import FormInput from "../components/FormInput";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";

function Signup() {
  const { isPanding, signup } = useSignup();
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const displayName = formData.get("displayName");
    const email = formData.get("email");
    const password = formData.get("password");
    const repeatPassword = formData.get("repeatPassword");

    await signup(displayName, email, password, repeatPassword);

    const newErrors = {};

    if (!displayName) newErrors.displayName = true;
    if (!email) newErrors.email = true;
    if (!password) newErrors.password = true;
    if (!repeatPassword) newErrors.repeatPassword = true;

    if (password && repeatPassword && password !== repeatPassword) {
      newErrors.repeatPassword = true;
    }

    setErrors(newErrors);
  };

  return (
    <main>
      <div className="registration hidden lg:flex h-full grow"></div>
      <div className="registration grow lg:bg-none grid place-items-center">
        <div className="py-20 rounded-2xl px-20 bg-slate-900 opacity-[0.8]">
          <h1 className="text-3xl font-bold text-center pb-5">Signup</h1>
          <form onSubmit={handleSubmit} className="w-75 pb-3">
            <FormInput
              name="displayName"
              label="Display Name"
              type="text"
              placeholder="For example: Qobiljon"
              error={errors.displayName}
            />
            <FormInput
              name="email"
              label="Email"
              type="email"
              placeholder="For example: mail@gmail.com"
              error={errors.email}
            />
            <FormInput
              name="password"
              label="Password"
              type="password"
              placeholder="For example: 1234"
              error={errors.password}
            />
            <FormInput
              name="repeatPassword"
              label="Repeat Password"
              type="password"
              placeholder="For example: 1234"
              error={errors.repeatPassword}
            />
            <div className="flex justify-end mt-10">
              {isPanding && (
                <button className="btn btn-primary">Loding...</button>
              )}
              {!isPanding && (
                <button className="btn btn-primary">Signup</button>
              )}
            </div>
          </form>
          <div className="text-center ">
            <span className="opacity-[0.6]"> Sizda Profil Bo'sa</span>
            <Link
              className="ml-1.5 link link-secondary opacity-[0.9]"
              to="/login"
            >
              Login
            </Link>
            <br />{" "}
            <span className="opacity-[0.6]">
              Orqali Kirishni Tavfsiya qilaman
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Signup;
