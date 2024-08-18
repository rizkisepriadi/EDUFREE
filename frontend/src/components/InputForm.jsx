// eslint-disable-next-line react/prop-types
export default function InputForm({ placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="bg-transparent border-[1.5px] border-[rgba(255, 255, 255, 0.10)] placeholder-[#F4F6FC] placeholder:opacity-50 text-base py-[18px] px-12 rounded-lg  w-full"
    />
  );
}
