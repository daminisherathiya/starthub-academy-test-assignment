import type { Metadata } from "next";

import Link from "next/link";

import { UserCard } from "@/components/UserCard";
import { BASE_URL, COMPANY_NAME, OG_IMAGE_URL } from "@/consts/metadata";
import usersData from "@/data/users.json";
import { User } from "@/types/User";

export const dynamic = "force-dynamic"; // To demonstrate dynamic title and description

const users: User[] = usersData;

export async function generateMetadata(): Promise<Metadata> {
  const randomNumber = Math.floor(Math.random() * 100);

  const title = `Dynamic title - ${randomNumber}`;
  const description = `Dynamic description - ${randomNumber}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: BASE_URL,
      siteName: COMPANY_NAME,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: OG_IMAGE_URL,
          width: 1200,
          height: 630,
          alt: COMPANY_NAME,
        },
      ],
    },
  };
}

export default function Home() {
  return (
    <section className="xl:container mx-auto p-6 sm:p-9 lg:p-12">
      <h1 className="text-3xl font-bold text-center mb-4">Our Users</h1>
      <p className="text-lg sm:text-xl text-gray-600 text-center mb-10 sm:mb-12 max-w-3xl mx-auto">
        Meet our diverse community of users from various backgrounds and
        professions. Our platform brings together talented individuals from all
        walks of life.
      </p>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {users.map((user, index) => (
          <li
            key={index}
            className="transition duration-300 hover:scale-102 focus-within:outline-none- focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 rounded-lg relative"
          >
            <Link
              className="focus:outline-none"
              target="_blank"
              href="https://www.founders.starthub.academy/"
            >
              <UserCard user={user} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
