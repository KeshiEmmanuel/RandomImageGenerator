import { useEffect, useState } from "react";
import { RandomImageGenerator } from "../utils/FetchRandomImages";
import Image from "./Image";
import { PhotosType } from "../types/PhotoTypes";
import GenerateButton from "./GenerateButton";
import Loading from "./Loading";
import Input from "./Input";
import { useNavigate } from "react-router-dom";

type GeneratorPropsTypes = {
  setInput: React.Dispatch<React.SetStateAction<string | undefined>>;
  input?: string | undefined;
};

export default function Generator({ setInput, input }: GeneratorPropsTypes) {
  const navigate = useNavigate();

  const [images, setImages] = useState<PhotosType>([]);

  const [selectedImageID, setSelectedImageID] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    async function FetchRandomImages() {
      const data = await RandomImageGenerator();
      setImages(data);
      setLoading(false);
    }
    FetchRandomImages();
  }, []);

  console.log(images);

  function handleGenerateCLick() {
    if (selectedImageID && input) {
      console.log(selectedImageID);
      return navigate(`/thankyouphoto/${selectedImageID}`);
    }
  }
  return (
    <section className="flex flex-col justify-center p-10">
      <div className="flex gap-2 flex-wrap justify-center items-center ">
        {loading ? (
          <Loading />
        ) : (
          images.map((image) => (
            <Image
              key={image.id}
              {...image}
              setSelectedImageID={setSelectedImageID}
            />
          ))
        )}
      </div>
      <Input setInput={setInput} />
      <GenerateButton input={input} handleGenerateCLick={handleGenerateCLick} />
    </section>
  );
}
