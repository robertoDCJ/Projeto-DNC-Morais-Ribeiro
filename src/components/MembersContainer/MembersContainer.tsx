import { Members } from "@/components";

export const MembersContainer = async ({
  id,
  image,
  name,
  profession,
  location,
  email,
  linkedin,
  line,
  session,
}: {
  id: string;
  image: string;
  name: string;
  profession: string;
  location: string;
  email: string;
  linkedin: string;
  line: boolean;
  session: string | undefined;
}) => {
  return (
    <Members
      key={id}
      image={image}
      id={id}
      name={name}
      profession={profession}
      location={location}
      email={email}
      linkedin={linkedin}
      line={line}
      session={session}
    />
  );
};
