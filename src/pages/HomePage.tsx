import Generator from "../components/Generator";

type HomePageType = {
  setInput: React.Dispatch<React.SetStateAction<string | undefined>>;
  input: string | undefined;
};
function HomePage({ setInput, input }: HomePageType) {
  return (
    <>
      <Generator setInput={setInput} input={input} />
    </>
  );
}

export default HomePage;
