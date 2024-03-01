import { techItems } from "./TechStackList";

const TechList = () => {
  return (
    <ul className="list-none mt-2 ml-2 dark:text-zinc-400 text-zinc-600 space-y-3">
      {techItems.map((tech, index) => (
        <li key={index} className="flex items-center">
          <a
            className="font-medium inline-flex items-center justify-start gap-x-1 dark:text-blue-400 text-blue-500 underline"
            href={tech.url}
            rel="noreferrer noopener"
            target="_blank"
          >
            <img
              alt={tech.name}
              loading="lazy"
              width="17"
              height="17"
              decoding="async"
              data-nimg="1"
              className="mr-2"
              src={tech.imageSrc}
              style={{ color: "transparent" }}
            />
            <p>{tech.name}</p>
          </a>{" "}
          -<p className="ml-1">{tech.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default TechList;
