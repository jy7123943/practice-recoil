export enum ACTIVITY_TYPE {
  EDUCATION = 'education',
  RECREATIONAL = 'recreational',
  SOCIAL = 'social',
  DIY = 'diy',
  CHARITY = 'charity',
  COOKING = 'cooking',
  RELAXATION = 'relaxation',
  MUSIC = 'music',
  BUSYWORK = 'busywork',
}

export interface Activity {
  activity: string;
	accessibility: number;
	type: string;
	participants: number;
	price: number;
}
