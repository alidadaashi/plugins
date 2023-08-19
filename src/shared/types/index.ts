export interface tab {
  title: string;
  icon: 'icon-marketing' | 'icon-finance' | 'icon-people';
  active?: string[];
  disabled?: string[];
  inactive?: string[];
}

export interface plugin {
  title: string;
  description: string;
}
