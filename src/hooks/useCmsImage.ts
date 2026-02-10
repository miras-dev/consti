"use client";

import { createContext, useContext } from "react";

export interface CmsImageMap {
  [imageId: string]: string;
}

export const CmsImageContext = createContext<CmsImageMap>({});

export function useCmsImage(imageId: string, defaultSrc: string): string {
  const overrides = useContext(CmsImageContext);
  return overrides[imageId] || defaultSrc;
}
