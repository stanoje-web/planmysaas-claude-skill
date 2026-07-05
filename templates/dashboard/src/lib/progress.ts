import { itemsForPhase, phases } from "../config/blueprintSchema";
import { isItemDone } from "./loadBlueprint";

export function phaseCompletion(phaseId: string) {
  const phaseItems = itemsForPhase(phaseId);
  const done = phaseItems.filter((i) => isItemDone(i.file)).length;
  return { done, total: phaseItems.length };
}

export function overallCompletion() {
  let done = 0;
  let total = 0;
  for (const phase of phases) {
    const c = phaseCompletion(phase.id);
    done += c.done;
    total += c.total;
  }
  return { done, total };
}
