import { CREATOR_NOTE_DOC_ID } from "@/app/paths";
import type { AppId } from "@/i18n/types";
import { catalogApps } from "@/landing/apps";

export type DocsDocId = typeof CREATOR_NOTE_DOC_ID | AppId;

export const APP_DOC_IDS: readonly AppId[] = catalogApps.map((app) => app.id);

export function isDocsDocId(value: string): value is DocsDocId {
  return (
    value === CREATOR_NOTE_DOC_ID ||
    APP_DOC_IDS.includes(value as AppId)
  );
}

export function docsPath(docId: DocsDocId = CREATOR_NOTE_DOC_ID) {
  return `/docs/${docId}`;
}
