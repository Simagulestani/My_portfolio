import { useEffect, useState } from "react";

function ProjectUpdates() {

  const [updates, setUpdates] =
    useState([]);

  useEffect(() => {

    const interval =
      setInterval(() => {

        setUpdates((prev) => {
          const next = [
            {
              id: Date.now(),
              text:
                "Project updated at " +
                new Date()
                  .toLocaleTimeString()
            },
            ...prev
          ];
          return next.slice(0, 10); // keep only latest 10
        });

      }, 15000);

    return () =>
      clearInterval(interval);

  }, []);

  return (
    <section className="updates" aria-live="polite" aria-atomic="false">

      <h2>Project Updates</h2>

      <ul>
        {updates.map((update) => (
          <li key={update.id}>
            {update.text}
          </li>
        ))}
      </ul>

    </section>
  );
}

export default ProjectUpdates;