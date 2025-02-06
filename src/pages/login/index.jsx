import { InputField, CheckboxField } from "@/components/formFields";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SpinLoader from "@/components/loader/spinLoader";
import { getFormValues } from "@/utills/formValidation";
import { loginUser } from "@/globalStates/actions/authAction";
import { setFormFieldErrors } from "@/globalStates/actions/formAction";
import { useNavigate } from "react-router-dom";
import { setAuthToken } from "@/globalStates/actions/authAction";
import ImageElement from "@/components/ImageElement";

const LoginPage = () => {
  const formDetails = useSelector((state) => state?.FormDetails);
  const isLoading = useSelector((state) => state?.loader?.isLoading);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const handleChange = (e) => {
    let { name } = e.target;
    if (formDetails.errors.length) {
      let errorFieldName = formDetails.errors.map((item) => item.field);
      if (errorFieldName.includes(name)) {
        let remaingErrors = formDetails.errors.filter(
          (errorField) => errorField.field !== name
        );
        dispatch(setFormFieldErrors(remaingErrors));
      }
    }
  };

  const toggleIcon = () => {
    setShowPassword((pre) => !pre);
  };

  const login = (details) => {
    dispatch(setAuthToken(details));
    navigate("/");
  };

  const handleLogin = (e) => {
    let { isValid, data, errors } = getFormValues(e, "login");
    if (isValid) {
      let userDetails = new FormData();
      Object.keys(data).forEach((key) => {
        userDetails.append(key, data[key]);
      });
      dispatch(loginUser(userDetails)).then((response) => {
        if (response.status === 200) {
          let details = {
            token: response?.data?.data.token,
            role: response.data?.data?.role || "admin",
          };
          login(details);
        } else {
          e.target.scrollIntoView({ top: 0, behavior: "smooth" });
          setError(response.response.data.message);
        }
      });
    } else {
      dispatch(setFormFieldErrors(errors));
    }
  };
  return (
    <div className=" relative m-auto  h-full border border-[#BBBDC8] rounded-lg me-0.5 bg-white overflow-x-hidden flex flex-col lg:flex-row">
      <div className="bg-sky-100 w-full flex justify-center items-center">
        <div className="w-1/2 h-full hidden lg:block">
          <ImageElement
            src="https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg?w=826"
            alt="Placeholder Image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
          <h1 className="text-2xl font-semibold mb-4">Login</h1>
          <form
            className="px-4 sm:px-6 md:px-8 flex flex-col gap-5"
            name="login_form"
            autoComplete
            id="login_id"
            onSubmit={handleLogin}
          >
            {error && (
              <div className="bg-red-100 py-3 px-2 w-full rounded-md border-2 border-rose-600 text-red-700">
                <span>{error}</span>
              </div>
            )}
            <div
              className="credentials flex flex-col gap-4 md:gap-6"
              onChange={handleChange}
            >
              <InputField
                label="Email"
                name="email"
                type="email"
                placeholder="Enter email"
                autoComplete
              />
              <InputField
                label="Password"
                rightIcon={
                  showPassword ? (
                    <EyeSlashIcon onClick={toggleIcon} />
                  ) : (
                    <EyeIcon onClick={toggleIcon} />
                  )
                }
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
              />

              <div className="extra_btn flex justify-between flex-auto">
                <CheckboxField
                  name="rememberMe"
                  labelClass="text-[#17181C] font-bold"
                >
                  Remember Me
                </CheckboxField>
              </div>

              <div className="submit_btn">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center text-center justify-center gap-4 font-semibold"
                >
                  <SpinLoader isLoading={isLoading} />
                  Log in
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
