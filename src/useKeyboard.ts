import { useEffect } from "react";

export type UseKeyboardOptions = {
  /**
   * The target to listen on.
   * - If you pass a ref object, it uses ref.current.
   * - If you pass an EventTarget (e.g. document or an element), it uses it directly.
   * - If you omit, it defaults to document.
   */
  target?: EventTarget | { current: EventTarget | null };

  /**
   * Exact-key handlers: map key names (event.key) to callbacks.
   * e.g. { Enter: onEnter, ' ': onSpace, Escape: onEscape }
   */
  handlers?: Record<string, (e: KeyboardEvent) => void>;

  /**
   * If you want to catch *any* letter key:
   * (e, key) => void  where key is 'a'-'z' or 'A'-'Z'
   */
  onLetter?: (e: KeyboardEvent, letter: string) => void;
};

/**
 * Attaches a keydown listener to the specified target.
 */
export default function useKeyboard({
  target,
  handlers = {},
  onLetter,
}: UseKeyboardOptions) {
  useEffect(() => {
    const node: EventTarget | null =
      // if it's a ref object, unwrap
      target && "current" in target ? target.current : (target ?? document);

    if (!node || !node.addEventListener) {
      console.warn("[useKeyboard] Invalid target – falling back to document.");
    }

    const listener: EventListener = (e) => {
      if (!(e instanceof KeyboardEvent)) return;
      const key = e.key;

      // 1) Exact-key match
      if (handlers[key]) {
        handlers[key]!(e);
        return;
      }

      // 2) Letter match A–Z
      if (onLetter && /^[a-zA-Z]$/.test(key)) {
        onLetter(e, key);
      }
    };

    // attach
    (node ?? document).addEventListener("keydown", listener);

    // cleanup
    return () => {
      (node ?? document).removeEventListener("keydown", listener);
    };
  }, [target, handlers, onLetter]);
}
