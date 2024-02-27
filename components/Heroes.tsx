import EasterEgg from "./EasterEgg";
import { Slide } from "./Slide";

export default async function Heroes() {

    const heroes = [
    {
      _id: "1",
      name: "Dan Abramov",
      url: "https://twitter.com/dan_abramov",
      met: false,
    },
    {
      _id: "2",
      name: "Sarah Drasner",
      url: "https://twitter.com/sarah_edo",
      met: false,
    },
    {
      _id: "3",
      name: "Cassidy Williams",
      url: "https://twitter.com/cassidoo",
      met: false,
    },
    {
      _id: "4",
      name: "Kent C. Dodds",
      url: "https://twitter.com/kentcdodds",
      met: false,
    },
    {
      _id: "5",
      name: "Wes Bos",
      url: "https://twitter.com/wesbos",
      met: false,
    },
    {
      _id: "6",
      name: "Chris Biscardi",
      url: "https://twitter.com/chrisbiscardi",
      met: true,
    },
    {
      _id: "7",
      name: "Maggie Appleton",
      url: "https://twitter.com/Mappletons",
      met: false,
    },
    {
      _id: "8",
      name: "Cassie Evans",
      url: "https://twitter.com/cassiecodes",
      met: false,
    },
    {
      _id: "9",
      name: "Jason Lengstorf",
      url: "https://twitter.com/jlengstorf",
      met: false,
    },
    {
      _id: "10",
      name: "Rafael Conde",
      url: "https://twitter.com/rafahari",
      met: false,
    },
];

  return (
    <section className="mt-32 max-w-5xl">
      <Slide delay={0.17}>
        <h2 className="text-4xl mb-4 font-bold tracking-tight">Heroes</h2>
        <p className="dark:text-zinc-400 text-zinc-600 max-w-2xl">
          Inspired by{" "}
          <a
            href="https://rafa.design"
            rel="noreferrer noopener"
            target="_blank"
            className="dark:text-blue-400 text-blue-500 underline"
          >
            Rafael Conde&apos;s
          </a>{" "}
          heroes list, here&apos;s my own curated lineup of code conjurers and
          digital dynamos that I&apos;m absolutely stoked to meet someday.{" "}
          <strong className="font-semibold">
            &quot;In no particular order&quot;
          </strong>
        </p>
      </Slide>

      <ul className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-12 tracking-tight">
        {heroes.map((heroe) => (
          <li
            key={heroe._id}
            className="flex items-center gap-x-2 dark:bg-primary-bg bg-zinc-100 dark:bg-[#27272b66] border dark:border-zinc-800 border-zinc-200 rounded-md px-2 py-2"
          >
            <EasterEgg isMet={heroe.met} />
            <a
              href={heroe.url}
              rel="noreferrer noopener"
              target="_blank"
              className={`font-incognito tracking-wide hover:underline ${
                heroe.met ? "dark:text-green-500 text-green-700" : null
              }`}
            >
              {heroe.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
