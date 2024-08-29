import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FetchImage } from "../utils/FetchRandomImages";
import { PhotoType } from "../types/PhotoTypes";
type ThankYouPageProps = {
  input: string | undefined;
};

export default function ThankYouPage({ input }: ThankYouPageProps) {
  const { id } = useParams();
  const [image, setImage] = useState<PhotoType>();

  useEffect(() => {
    async function fetchSelectedImage() {
      const data = await FetchImage(id);
      console.log(data);

      console.log(data);
      setImage(data);
    }
    fetchSelectedImage();
  }, [id]);

  return (
    <section className="flex items-center justify-center flex-col mt-20 relative">
      <h1 className="absolute top-2 text-gray-300 font-bold text-lg uppercase">
        Thank you
      </h1>
      <img
        src={image?.urls.full}
        className="w-[20%]  object-cover "
        alt={image?.alt_description}
      />
      <p className="absolute bottom-5 text-gray-300 text-xl font-bold uppercase">
        {input}
      </p>

      <button className="bg-gray-800 text-yellow-200 px-5 py-3 rounded-lg absolute bottom-0 right-5">
        <Link to={"/"}>Go back to Home Screen</Link>
      </button>
    </section>
  );
}
