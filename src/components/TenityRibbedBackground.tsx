"use client";

import React from "react";
import { CinematicAtmosphereBackground, CinematicAtmosphereBackgroundProps } from "./CinematicAtmosphereBackground";

export type TenityRibbedBackgroundProps = CinematicAtmosphereBackgroundProps & {
  theme?: string;
  imageSrc?: string;
};

/**
 * TenityRibbedBackground is now an alias for CinematicAtmosphereBackground.
 * Completely eliminates any vertical slats, louvers, or striped curtain patterns,
 * replacing them with the smooth, cinematic, dark AI-tech diffused atmospheric glows
 * matching Screenshot 1 exactly with cursor-reactive illumination.
 */
export function TenityRibbedBackground(props: TenityRibbedBackgroundProps) {
  return <CinematicAtmosphereBackground side={props.side} opacity={props.opacity} className={props.className} />;
}

export default TenityRibbedBackground;
