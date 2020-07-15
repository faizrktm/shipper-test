import { useRef, useEffect } from "react";

/**
 *
 * @param {function} callback
 * @param {array} deps
 * This custom hooks used to prevent useEffect fired on initial mount by using ref
 * It takes callback as basic useEffect callback
 * and deps to subcribe for certain data for effect to be fired.
 */
export default function useNoInitialMount(callback, deps) {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      callback();
    }
  }, deps);
}
