import { useSyncExternalStore } from "react";
import { modules } from "@/data/modules";

export interface Lesson { path: string; label: string; }
export interface ModuleGroup { title: string; lessons: Lesson[]; }

// Build navigation from Debian module data
export const MODULES: ModuleGroup[] = modules.map((m) => ({
  title: m.category || m.title,
  lessons: [{ path: `/modulo/${m.id}`, label: m.title }],
}));

// Flatten all modules into a flat course list
export const COURSE: (Lesson & { module: string; index: number })[] = [
  { path: "/", label: "Início", module: "Home", index: 0 },
  ...MODULES.flatMap((m) =>
    m.lessons.map((l) => ({ ...l, module: m.title }))
  ).map((l, index) => ({ ...l, index: index + 1 })),
];

export const TOTAL_LESSONS = COURSE.length - 1; // exclude Home

export function lessonAt(path: string) {
  const i = COURSE.findIndex((l) => l.path === path);
  if (i === -1) return null;
  return {
    current: COURSE[i],
    prev: i > 0 ? COURSE[i - 1] : null,
    next: i < COURSE.length - 1 ? COURSE[i + 1] : null,
    position: i + 1,
  };
}

const KEY = "debian-curso-progresso";
const listeners = new Set<() => void>();
function readLS(): string[] {
  try { return JSON.parse(localStorage.getItem(KEY) || "[]"); } catch { return []; }
}
function writeLS(paths: string[]) {
  localStorage.setItem(KEY, JSON.stringify(paths));
  listeners.forEach((fn) => fn());
}
export function toggleDone(path: string) {
  const cur = readLS();
  writeLS(cur.includes(path) ? cur.filter((p) => p !== path) : [...cur, path]);
}
export function isDone(path: string) { return readLS().includes(path); }

function subscribe(fn: () => void) {
  listeners.add(fn);
  window.addEventListener("storage", fn);
  return () => {
    listeners.delete(fn);
    window.removeEventListener("storage", fn);
  };
}

let cache: string[] = [];
let cacheRaw = "";
function snapshot(): string[] {
  const raw = localStorage.getItem(KEY) || "[]";
  if (raw !== cacheRaw) {
    cacheRaw = raw;
    try { cache = JSON.parse(raw); } catch { cache = []; }
  }
  return cache;
}

export function useProgress() {
  const done = useSyncExternalStore(subscribe, snapshot, () => cache);
  return {
    done,
    count: done.length,
    percent: TOTAL_LESSONS > 0 ? Math.round((done.length / TOTAL_LESSONS) * 100) : 0,
    has: (path: string) => done.includes(path),
    toggle: toggleDone,
  };
}
