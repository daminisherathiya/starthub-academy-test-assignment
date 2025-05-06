import Image from "next/image";

import { User } from "@/types/User";

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  return (
    <article
      className="bg-white rounded-lg shadow-md overflow-hidden flex items-center p-4 gap-4 h-full"
      aria-labelledby={`user-name-${user.name.replace(/\s+/g, "-").toLowerCase()}`}
    >
      <Image
        src={user.profilePhoto}
        alt={`${user.name}'s profile photo`}
        width={100}
        height={100}
        className="object-cover rounded-full sm:w-24 sm:h-24 w-16 h-16 shrink-0"
        priority={false}
        loading="lazy"
      />
      <div>
        <h2
          id={`user-name-${user.name.replace(/\s+/g, "-").toLowerCase()}`}
          className="text-xl font-semibold text-gray-800"
        >
          {user.name}
        </h2>
        <p className="mt-2 text-gray-600">{user.description}</p>
      </div>
    </article>
  );
}
