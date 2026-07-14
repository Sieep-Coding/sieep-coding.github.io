import { useState, useEffect } from "react";

const BANNER_KEY = "banner-dismissed-move-to-com";

export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show if not previously dismissed
    if (!localStorage.getItem(BANNER_KEY)) {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    localStorage.setItem(BANNER_KEY, "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="w-full bg-accent dark:bg-dk-accent text-primary dark:text-dk-primary text-sm py-2 px-4 flex items-center justify-center gap-2">
      <span>
        This site is moving to <strong>nickstambaugh.com</strong>, {" "}
        <a
          href="/posts/moving-to-dot-com"
          className="underline underline-offset-2 hover:opacity-75 transition-opacity"
        >
          here's why
        </a>
        .
      </span>
      <button
        onClick={dismiss}
        aria-label="Dismiss announcement"
        className="ml-2 leading-none opacity-60 hover:opacity-100 transition-opacity text-base"
      >
        ×
      </button>
    </div>
  );
}
