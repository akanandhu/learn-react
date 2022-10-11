export interface ISegment {
  map(arg0: (obj: any) => JSX.Element): import("react").ReactNode;
  id: number;
  name: string;
  desc: string;
  thumbnail: string;
  client_id: number;
  is_default: boolean;
}

