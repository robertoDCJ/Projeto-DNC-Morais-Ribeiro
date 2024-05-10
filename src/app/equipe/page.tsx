import { FormAddMember, Members } from "@/components";
import db from "@/lib/db";
import { auth } from "../../../auth";

export default async function Equipe() {
  const members = await db.member.findMany();
  const session = await auth();

<<<<<<< HEAD
=======
export default function Equipe() {
  const [img, setImg] = useState<string | File>("");
  const { register, handleSubmit } = useForm<Member>({});
  const [fotoURL, setFotoURL] = useState<string | null>(
    "/ImgMembers/Background.svg"
  );
  const [handdleAddMember, setHanddleAddMember] = useState<boolean>(false);
  const [members, setMembers] = useState<Member[]>([]);
  const [message, setMessage] = useState<string | null>("");

  //Get members
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch("/api/member");
        if (response.ok) {
          const data = await response.json();
          setMembers(data);
        } else {
          console.error("error ao obter os membros", response.statusText);
        }
      } catch (error) {
        console.error("Error ao obter os membros:", error);
      }
    };
    fetchMembers();
  }, []);

  //Add members
  const onSubmit = handleSubmit(async (data) => {
    const form = new FormData();
    form.append("name", data.name);
    form.append("profession", data.profession);
    form.append("location", data.location);
    form.append("email", data.email);
    form.append("linkedin", data.linkedin);
    form.append("image", img);

      const response = await fetch("/api/member", {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.msg);
        setTimeout(() => {
          setMessage("");
        }, 3000);
      } else {
        const data = await response.json();
        setMessage(data.error);
        setTimeout(() => {
          setMessage("");
        }, 3000);
      }
 
  });

  //Render and conversion seleted image
  const handleSelectedImage = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.currentTarget.files;
    if (files && files.length > 0) {
      const imageSelected = files[0];
      setImg(imageSelected);
      setFotoURL(URL.createObjectURL(imageSelected));
    }
  };
>>>>>>> main
  return (
    <div className="relative">
      <div
        className="grid place-items-center  bg-cover  bg-top "
        style={{
          backgroundImage: "url('/ImgSobreNos/Equipe.svg')",
          height: "659px",
        }}
      >
        <div className="grid grid-cols-2 place-items-center w-full max-w-screen-xl">
          <h1 className="font-Alegreya font-bold text-5xl">Equipe</h1>
        </div>
      </div>
      <div
        className="grid place-items-center"
        style={{ backgroundColor: "white" }}
      >
        {session && (
          <div className="w-full px-4 py-1">
            <FormAddMember />
          </div>
        )}
        {members.map((member, index) => (
          <Members
            key={member.id}
            image={member.image}
            id={member.id}
            name={member.name}
            profession={member.profession}
            location={member.location}
            email={member.email}
            linkedin={member.linkedin}
            line={index == 0 ? false : true}
          />
        ))}
      </div>
    </div>
  );
}
