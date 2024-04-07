export interface PlaceDto {
  // meta
  id: string;

  // common
  title: string;
  type: string;
  description: string;
  address: string;

  // info
  price: number;
  rating: number;
  popularity: number;

  // extra
  object_type: string;
  metro_station: any;
  is_can_buy: boolean;
  has_audio_guide: boolean;
  russpass_recommendation: any;
}
