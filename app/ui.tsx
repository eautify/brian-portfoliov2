"use client";

import { Check, Copy, Moon, Sun } from "lucide-react";
import Image from "next/image";
import { createContext, MouseEvent, ReactNode, useCallback, useContext, useEffect, useRef, useState, useSyncExternalStore } from "react";

type Theme = "dark" | "light";
const ThemeContext = createContext<{ theme: Theme; toggleTheme: () => void }>({ theme: "dark", toggleTheme: () => {} });
const themeEvent = "portfolio-theme-change";

function getTheme(): Theme {
  try {
    return localStorage.getItem("portfolio-theme") === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

function subscribeToTheme(onChange: () => void) {
  window.addEventListener(themeEvent, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(themeEvent, onChange);
    window.removeEventListener("storage", onChange);
  };
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(subscribeToTheme, getTheme, (): Theme => "dark");
  const toggleTheme = useCallback(() => {
    const nextTheme: Theme = getTheme() === "dark" ? "light" : "dark";
    try {
      localStorage.setItem("portfolio-theme", nextTheme);
    } catch {
      // Keep the in-memory theme usable when storage is unavailable.
    }
    document.documentElement.classList.toggle("light", nextTheme === "light");
    window.dispatchEvent(new Event(themeEvent));
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const light = theme === "light";
  return <button className="theme-toggle" type="button" aria-label={`Switch to ${light ? "dark" : "light"} theme`} onClick={toggleTheme}>
    {light ? <Moon size={14} /> : <Sun size={14} />}<span>{light ? "LIGHT" : "DARK"}</span>
  </button>;
}

export function AboutModalTrigger() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  function closeOnBackdrop(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) setIsOpen(false);
  }

  return (
    <>
      <button className="button button-primary" type="button" onClick={() => setIsOpen(true)}>
        AWAY FROM KEYBOARD <span aria-hidden="true">↗</span>
      </button>
      <dialog
        className="about-dialog"
        ref={dialogRef}
        aria-labelledby="about-dialog-title"
        onCancel={() => setIsOpen(false)}
        onClose={() => setIsOpen(false)}
        onClick={closeOnBackdrop}
      >
        <div className="about-window-bar">
          <div className="traffic-lights" aria-hidden="true"><i /><i /><i /></div>
          <span>brian@portfolio:~ / away-from-keyboard</span>
          <button className="about-window-close" type="button" aria-label="Close about window" onClick={() => setIsOpen(false)}>×</button>
        </div>
        <div className="about-dialog-body">
          <div className="about-photo-grid" aria-label="Photos of Brian">
            <div className="about-photo about-photo-featured"><Image src="/portrait3.png" alt="Brian on a beach trip" fill sizes="(max-width: 760px) 80vw, 300px" /></div>
            <div className="about-photo"><Image src="/portrait1.png" alt="Brian at his graduation" fill sizes="(max-width: 760px) 38vw, 150px" /></div>
            <div className="about-photo"><Image src="/portrait2.png" alt="Brian in his graduation portrait" fill sizes="(max-width: 760px) 38vw, 150px" /></div>
          </div>
          <div className="about-dialog-copy">
            <p className="about-dialog-kicker"><span>~/</span> OFFLINE MODE</p>
            <h2 id="about-dialog-title">My Life Away<br />from Keyboard<span>.</span></h2>
            <p className="about-dialog-intro">When I step away from the screen, I gravitate toward small rituals that make an ordinary day feel like my own.</p>
            <p className="away-list-heading">A FEW THINGS IN MY ROTATION</p>
            <div className="away-list" aria-label="A few of my favorite things">
              <div><span>COFFEE SHOP HOPPING</span><p>A new spot each time; the view over the city is part of the ritual.</p></div>
              <div><span>IEM</span><p>MOONDROP CHU II - my favorite from the collection.</p></div>
              <div><span>MOUSE</span><p>VXE R1 Pro - the one I keep coming back to.</p></div>
              <div><span>KEYBOARD</span><p>Aula F75 on the desk.</p></div>
              <div><span>SOUNDTRACK</span><p>Jazz, hip-hop, or FlipTop, depending on the mood.</p></div>
              <div><span>OFF-DUTY</span><p>Anime for a good story; Valorant for one more match.</p></div>
            </div>
            <p className="about-dialog-status"><span /> END OF TRANSMISSION</p>
          </div>
        </div>
      </dialog>
    </>
  );
}

export function CopyEmailButton({ email, icon }: { email: string; icon: ReactNode }) {
  const [copied, setCopied] = useState(false);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }
  return <button className="copy-email" type="button" onClick={copyEmail} aria-label={copied ? "Email copied" : `Copy ${email}`}>
    {icon} <span>{copied ? "COPIED" : "EMAIL"}</span>{copied ? <Check size={11} /> : <Copy size={11} />}
  </button>;
}
