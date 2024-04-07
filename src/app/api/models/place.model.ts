export interface PlaceDto {
  // meta
  id: string;
  type: any;

  // common
  title: string;
  description: string;
  address: string;

  // info
  price: number;
  rating: any;
  popularity: any;

  // extra
  object_type: string;
  metro_station: any;
  is_can_buy: boolean;
  has_audio_guide: boolean;
  russpass_recommendation: any;
}
