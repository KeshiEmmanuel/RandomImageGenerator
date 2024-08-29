interface generatebtnProps {
  input?: string;
  handleGenerateCLick: () => void;
}

function GenerateButton({ input, handleGenerateCLick }: generatebtnProps) {
  return (
    <button
      className="bg-gray-800 text-yellow-200 py-3 px-2 w-[270px] disabled:border-b-4 border-b-4 border-b-yellow-300 transition-all disabled:border-b-gray-600 mx-auto rounded-lg disabled:bg-gray-300 disabled:text-gray-600"
      disabled={!input}
      onClick={handleGenerateCLick}
    >
      Generate
    </button>
  );
}

export default GenerateButton;
