/* eslint-disable react/prop-types */
export function InputForm({ placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="bg-transparent border-[1.5px] border-[rgba(255, 255, 255, 0.10)] placeholder-[#F4F6FC] placeholder:opacity-50 text-base py-[18px] px-12 rounded-lg  w-full"
    />
  );
}

export function Submit({ value }) {
  return (
    <input
      type="submit"
      value={value}
      className="btn btn-primary w-full mt-10 font-bold text-lg"
    />
  );
}
