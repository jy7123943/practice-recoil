export type ActivityType = 'education'
  | 'recreational'
  | 'social'
  | 'diy'
  | 'charity'
  | 'cooking'
  | 'relaxation'
  | 'music'
  | 'busywork';

export interface Activity {
  activity: string;
	accessibility: number;
	type: string;
	participants: number;
	price: number;
}
