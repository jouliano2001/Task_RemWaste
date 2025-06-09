
import axios from 'axios';

export interface SkipOption {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}

export const fetchSkipOptions = async (): Promise<SkipOption[]> => {
  const url = `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`;
  const response = await axios.get<SkipOption[]>(url);
  return response.data;
};
