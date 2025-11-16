import React, { useEffect, useState } from "react";

interface Link {
  href: string;
  label: string;
}

const links: Link[] = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/blog", label: "blog" },
  { href: "/reading", label: "reading" },
  { href: "/archive", label: "archive" },
  { href: "/contact", label: "contact" },
];

const NavBar: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>("");

  useEffect(() => {
    // Inicializa la ruta al cargar
    const updatePath = () => setCurrentPath(window.location.pathname);

    updatePath();
    // Escucha cambios de historial (ClientRouter)
    window.addEventListener("popstate", updatePath);

    return () => {
      window.removeEventListener("popstate", updatePath);
    };
  }, []);

  return (
    <nav className="portfolio-nav">
      <button
        id="theme-toggle"
        aria-label="Toggle theme"
        className="theme-toggle"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </button>

      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className={`nav-link ${currentPath === link.href ? "active" : ""}`}
          aria-current={currentPath === link.href ? "page" : undefined}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
};

export default NavBar;
