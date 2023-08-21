export interface tab {
  title: string;
  icon?: 'icon-marketing' | 'icon-finance' | 'icon-people';
  active: string[];
  disabled: string[];
  inactive: string[];
}

export interface plugin {
  title: string;
  description: string;
}
export interface AppState {
  tabs: string[];
  tabdata: Record<string, tab>;
  plugins: Record<string, plugin>;
  updateData: (
    category: 'active' | 'disable',
    status: boolean,
    pluginName?: string
  ) => void;
  setCurrentTab: (tab: string) => void;
}
