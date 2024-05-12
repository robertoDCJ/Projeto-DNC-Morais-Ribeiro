import db from "@/lib/db";
import Image from "next/image";

export const Artigo = async ({
  title,
  text,
  member,
  image,
  line,
}: {
  title: string;
  text: string;
  member: string;
  image: string;
  line: number;
}) => {
  const author = await db.member.findUnique({
    where: { id: member as string },
    include: { Post: true },
  });

  return (
    <div className="relative flex flex-col items-center justify-center text-gray-800 max-w-3xl mb-5 box-content">
      <Image
        className="mb-5"
        src={image}
        alt="ERROR"
        width={500}
        height={500}
      />
      <h2 className="font-bold text-center text-2xl mb-3">{title}</h2>
      <div className="flex flex-row justify-center items-baseline gap-4">
        <div className="h-12 w-12 relative top-8 rounded-full bg-red-500"></div>
        <div className="flex flex-col mb-5">
          <h3 className="text-center font-semibold text-xl mb-1">
            Autor: {author?.name}
          </h3>
          <h4>{author?.profession}</h4>
        </div>
      </div>
      <p
        className="text-xl leading-relaxed text-wrap text-justify"
        style={{ whiteSpace: "break-spaces" }}
      >
        {text}
      </p>
      {line >= 0 ? (
        <div className="w-full h-1 rounded-full bg-gray-300 border border-gray-300 m-20"></div>
      ) : null}
    </div>
  );
};
