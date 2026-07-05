import type { BlueprintMetrics } from "../types";
import metricsJson from "../data/metrics.json";

// The 34 blueprint markdown files live three levels up from this file:
// src/lib/loadBlueprint.ts -> src -> dashboard -> planmysaas-blueprint/*.md
const mdModules = import.meta.glob("../../../*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const contentByFilename = new Map<string, string>();
for (const path in mdModules) {
  const filename = path.split("/").pop();
  if (filename) contentByFilename.set(filename, mdModules[path]);
}

export function getItemContent(file: string): string | null {
  return contentByFilename.get(file) ?? null;
}

export function isItemDone(file: string): boolean {
  return contentByFilename.has(file);
}

export const metrics = metricsJson as unknown as BlueprintMetrics;
