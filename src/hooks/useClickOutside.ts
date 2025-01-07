import { RefObject, useEffect } from "react";

const useOnClickOutside = (
  ref: RefObject<HTMLElement>,
  callback: () => void,
  elements: Array<HTMLElement | null> = []
) => {
  useEffect(
    () => {
      const listener = (event: any) => {
        // Do nothing if clicking ref's element or descendent elements
        const check = elements?.filter((element) => element?.contains(event.target));
        if (ref.current && !ref.current.contains(event.target) && check?.length === 0) callback();
      };
      // document.addEventListener('click', listener, true);
      document.addEventListener("mouseup", listener);
      document.addEventListener("touchend", listener);
      return () => {
        // document.removeEventListener('click', listener, true);
        document.removeEventListener("mouseup", listener);
        document.removeEventListener("touchend", listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, callback, elements]
  );
};

export default useOnClickOutside;
