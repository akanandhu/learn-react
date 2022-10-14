export interface IChapters {
  text: string;
  data: Datum[];
}

interface Datum {
  id: number;
  name: string;
  desc?: string;
  type_id?: number;
  thumbnail?: any;
  price?: any;
  is_paid?: any;
  strike_through_price?: any;
  is_published: number;
  chapters_count: number;
  type?: Type;
}

interface Type {
  id: number;
  name: string;
  desc: string;
}