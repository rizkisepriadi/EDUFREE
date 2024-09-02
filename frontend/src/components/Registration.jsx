import Background1 from "../assets/bgRegistration.svg";
import { InputForm, Submit } from "./Form.module";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignUp } from "../hooks/useSignup";
import { useSnackbar } from "notistack";

export default function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { signup, isLoading, error } = useSignUp();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signup(name, email, password);
      isLoading;
      enqueueSnackbar("Register successful", {
        variant: "success",
        autoHideDuration: 500,
      });
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (err) {
      enqueueSnackbar(err.message || "Registration failed", {
        variant: "error",
        autoHideDuration: 3000,
      });
      console.log(error);
    }
  };

  return (
    <div className="flex bg-base-100 mx-[70px] h-[691px]">
      <div className="flex flex-col text-white relative w-[666px]">
        <img src={Background1} alt="" className="absolute z-0 w-full" />
        <div className="z-10 pl-[75px] pr-[147px] flex flex-col gap-6">
          <h1 className="font-semibold text-[42px] leading-[67.2px] pt-[75px]">
            Selangkah Lebih
            <br />
            Dekat Dengan
            <br />
            Impianmu
          </h1>
          <p className="">
            Sebuah layanan E-Learning gratis yang siap <br />
            membantumu menjadi seorang ahli
          </p>
        </div>
      </div>
      <div className="pl-[102px] pt-[75px]">
        <h1 className="font-semibold text-[28px] pb-4">Daftarkan Dirimu!</h1>
        <p className="text-base font-normal text-[#F4F6FC] pb-12">
          Persiapkan diri untuk masa depan yang penuh <br />
          dengan bintang
        </p>
        <form className="w-[432px]" onSubmit={handleSubmit}>
          <div className="flex gap-4 flex-col">
            <InputForm
              placeholder={"Your Name"}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <InputForm
              placeholder={"Email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputForm
              placeholder={"Password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Submit value={"Submit"} />
        </form>
        <div className="flex justify-center pt-[27px]  text-lg">
          <p>Sudah punya akun?</p>
          <a href="#" className="decoration-solid underline pl-1">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}
