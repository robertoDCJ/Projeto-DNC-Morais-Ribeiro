import db from "@/lib/db";

export const Artigo = async ({
  title,
  text,
  member,
}: {
  title: String;
  text: String;
  member: String;
}) => {
  const author = await db.member.findUnique({
    where: { id: member as string },
    include: { Post: true },
  });
  //Argument od type 'String' is not assignable to parameter of type
  return (
    <div className="flex flex-col items-center justify-center text-gray-800 max-w-3xl p-4 mb-5">
      <h2 className="font-bold text-2xl mb-4">{title}</h2>
      <div className="flex flex-rom justify-center items-center">
        <div className="h-12 w-12 rounded-full bg-red-500"></div>
        <div className="flex flex-col">
          <h3 className="text-center font-semibold text-xl mb-4">
            {author?.name}
          </h3>
          <h4>{author?.profession}</h4>
        </div>
      </div>
      <p
        className="text-xl leading-relaxed"
        style={{ whiteSpace: "break-spaces" }}
      >
        {text}
      </p>
    </div>
  );
};
