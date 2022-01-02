import IProfileCard from "../../types/interface/ProfileCard";
import { DropPin } from "../../assets/icons/DropPin";
import Image from "next/image";
import { Tag } from "./Tag";

export const ProfileCard = ({ src, name, title, city, tags }: IProfileCard) => {
  return (
    <div className="w-96 h-80 flex flex-col space-y-2.5 justify-center items-center bg-white rounded-sm text-center">
      <Image
        className="rounded-full mb-1.5"
        src={"https://picsum.photos/200"}
        height={64}
        width={64}
        layout="fixed"
      />
      <div className="text-xl">{name}</div>
      <div className="text-base">{title}</div>
      <ProfileCity city={city} />
      <ProfileList tags={tags} />
    </div>
  );
};

const ProfileCity = ({ city }: any) => {
  return (
    <div className="flex justify-center items-center">
      <DropPin />
      <div className="ml-2.5 text-sm">{city}</div>
    </div>
  );
};

const ProfileList = ({ tags }: any) => {
  return (
    <div className="flex flex-row space-x-2.5 flex-wrap justify-center items-center">
      {tags.map((tag: any, index: number) => (
        <Tag key={index} title={tag} />
      ))}
    </div>
  );
};
