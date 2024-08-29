import { PhotoType } from "../types/PhotoTypes";

export default function Image({ id, urls }: PhotoType) {
  return (
    <section className="mt-10">
      <img
        src={urls.full}
        className="w-[500px] h-[500px] object-cover rounded-md"
      />
    </section>
  );
}
