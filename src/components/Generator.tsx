import { useEffect, useState } from "react";
import { RandomImageGenerator } from "../utils/FetchRandomImages";
import Image from "./Image";
import { PhotosType } from "../types/PhotoTypes";
import GenerateButton from "./GenerateButton";
import Loading from "./Loading";
import Input from "./Input";
export default function Generator() {
  const [images, setImages] = useState<PhotosType>([]);

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

  return (
    <section className="flex flex-col justify-center">
      <div className="flex gap-2 justify-center items-center">
        {loading ? (
          <Loading />
        ) : (
          images.map((image) => <Image key={image.id} {...image} />)
        )}
      </div>
      <Input />
      <GenerateButton />
    </section>
  );
}
