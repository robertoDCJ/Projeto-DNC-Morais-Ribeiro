


type Member ={
    [key: string]: string;
};

export const Members = ({member} : {member : Member}) => {
  return (
    <div className="w-full max-w-screen-xl p-4">
      <div className="grid grid-row-2 md:grid-cols-2 text-black">
        <div className="grid place-items-center">
          <img
            src={member.image}
            alt={`Imagen de ${member.name} `}
            style={{ width: "436px" }}
          />
        </div>
        <div className="mt-5 p-3">
          <h1 className="font-Alegreya font-bold text-2xl border-b-2 mb-5 border-black">
            {member.name} 
          </h1>
          <div className="flex flex-col gap-3 md:grid  md:grid-cols-2 break-all">
            <h1 className="font-Lato font-medium text-3xl">
            {member.profession}
            </h1>
            <div className="grid gap-3 font-Lato font-medium text-zinc-500">
              <div className="flex gap-3">
                <img src="/SocialMediaIcons/Location.svg" alt="Location Icon" />
                {member.location}
              </div>

              <a className="flex gap-3 underline">
                <img src="/SocialMediaIcons/Email.svg" alt="Email Icon" />
                {member.email}
              </a>
    
              <a href={member.linkedin}
                className="flex gap-3">
                <img src="/SocialMediaIcons/Linkedin.svg" alt="Linkedin Icon" />
                {member.linkedin}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
