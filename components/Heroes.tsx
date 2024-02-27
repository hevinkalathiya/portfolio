import EasterEgg from "./EasterEgg";
import { Slide } from "./Slide";

const heroes = [
    {
      _id: "1",
      name: "Hitesh Chaudhary",
      url: "https://twitter.com/Hiteshdotcom",
      met: false,
    },
    {
      _id: "2",
      name: "Harkirat Singh",
      url: "https://twitter.com/kirat_tw",
      met: false,
    },
    {
      _id: "3",
      name: "Josh tried coding",
      url: "https://twitter.com/joshtriedcoding",
      met: false,
    },
    {
      _id: "4",
      name: "Code With Antonio",
      url: "https://twitter.com/YTCodeAntonio",
      met: false,
    },
    {
      _id: "5",
      name: "Rohit Negi",
      url: "https://www.youtube.com/@Rohit_Negi",
      met: false,
    },
    {
      _id: "6",
      name: "Piyush Garg",
      url: "https://twitter.com/piyushgarg_dev",
      met: false,
    },
    {
      _id: "7",
      name: "Theo",
      url: "https://twitter.com/t3dotgg",
      met: false,
    },
    {
      _id: "8",
      name: "Akshay Saini",
      url: "https://twitter.com/akshaymarch7",
      met: false,
    },
    {
      _id: "9",
      name: "Vishal Virani",
      url: "https://twitter.com/Vishalvirani91",
      met: false,
    },
    {
      _id: "10",
      name: "Manu Arora",
      url: "https://twitter.com/mannupaaji",
      met: false,
    },
    {
      _id: "10",
      name: "KR💲NA",
      url: "https://www.instagram.com/realkrsna",
      met: false,
    },
];

export default async function Heroes() {
  return (
    <section className="max-w-5xl mb-5">
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
