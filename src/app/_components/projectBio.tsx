import Link from "next/link";

const ProjectBio: React.FC = () => {
  return (
    <article className="prose lg:prose-xl text-md w-full font-sans text-white/80">
      <p>
        <Link
          className="text-blue-500/80 no-underline"
          href={""}
          target="_blank"
        >
          Runtime logs{" "}
        </Link>
        is a clone of Vercel's request. They now provide a request-focused
        interface for improved debugging and traffic analysis
      </p>
      <ul className="list-disc">
        <li>
          <strong className="text-white/80">Request Anatomy UI: </strong>{" "}
          Visually trace each request's journey through your application, from
          firewall to function execution.
        </li>
        <li>
          <strong className="text-white/80">Enhanced Log Viewer: </strong> A
          wider view improves readability, consolidating all log lines for a
          single request, including middleware and function calls.
        </li>
      </ul>
    </article>
  );
};

export default ProjectBio;
