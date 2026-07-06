import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "debian-curso-progresso";
const EVENT = "debian-progresso-mudou";

function read(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    const arr = JSON.parse(raw);
    return Array.isArray(arr) ? new Set(arr) : new Set();
  } catch {
    return new Set();
  }
}

function write(set: Set<string>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]));
  } catch {
    /* ignora quota/privacidade */
  }
  window.dispatchEvent(new Event(EVENT));
}

/**
 * Progresso do curso, reativo entre componentes e abas.
 * Guarda os ids dos módulos concluídos em localStorage.
 */
export function useProgress() {
  const [completed, setCompleted] = useState<Set<string>>(read);

  useEffect(() => {
    const sync = () => setCompleted(read());
    window.addEventListener(EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const isDone = useCallback((id: string) => completed.has(id), [completed]);

  const toggle = useCallback((id: string) => {
    const next = read();
    if (next.has(id)) next.delete(id);
    else next.add(id);
    write(next);
  }, []);

  const setDone = useCallback((id: string, done: boolean) => {
    const next = read();
    if (done) next.add(id);
    else next.delete(id);
    write(next);
  }, []);

  const reset = useCallback(() => write(new Set()), []);

  return { completed, count: completed.size, isDone, toggle, setDone, reset };
}

export default useProgress;
