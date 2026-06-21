export type Metric = {
  id: string;

  value: number;

  /* + */
  suffix?: string;

  /* People touched, Countries reached */
  label: string;
};
