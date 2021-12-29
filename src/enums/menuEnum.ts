/**
 * @description: menu type
 */
export enum MenuTypeEnum {
  // left menu
  SIDEBAR = 'sidebar',
}

export type Mode = 'vertical' | 'vertical-right' | 'horizontal' | 'inline';

// menu mode
export enum MenuModeEnum {
  VERTICAL = 'vertical',
}

export enum MenuSplitTyeEnum {
  NONE,
  TOP,
  LEFT,
}

export enum MixSidebarTriggerEnum {
  HOVER = 'hover',
  CLICK = 'click',
}
