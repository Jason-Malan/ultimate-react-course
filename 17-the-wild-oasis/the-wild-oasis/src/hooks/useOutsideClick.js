import { useEffect, useRef } from "react";

export default function useOutsideClick(
  handler,
  listenCapturing = true,
  timeout = null
) {
  const ref = useRef();

  useEffect(() => {
    const callWithTimeout = (callback) => {
      setTimeout(() => {
        callback();
      }, timeout);
    };

    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        timeout ? callWithTimeout(handler) : handler();
      }
    }

    document.addEventListener("click", handleClick, listenCapturing);

    return () => document.removeEventListener("click", handleClick);
  }, [handler, listenCapturing, timeout]);

  return ref;
}
