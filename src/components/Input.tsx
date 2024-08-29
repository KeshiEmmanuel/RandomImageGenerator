interface inputPropsType {
  input?: string | undefined;
  setInput: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export default function Input({ setInput }: inputPropsType) {
  return (
    <>
      <input
        type="text"
        placeholder="Enter your Name"
        className="w-[400px] px-2 py-3 rounded-md mx-auto bg-gray-300 my-10 text-gray-900 outline-none"
        onChange={(e) => setInput(e.target.value)}
      />
    </>
  );
}
