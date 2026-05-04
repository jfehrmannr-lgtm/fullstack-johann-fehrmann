import type { ITranslation } from "./translation.interface";
import ReactCountryFlag from "react-country-flag";

export const translationOptions: ITranslation[] = [
  {
    value: "es",
    label: (
      <div className="flex items-center gap-2">
        <ReactCountryFlag countryCode="CL" svg style={{ width: 20, height: 20 }} />
        <span>Español</span>
      </div>
    ),
  },
  {
    value: "en",
    label: (
      <div className="flex items-center gap-2">
        <ReactCountryFlag countryCode="US" svg style={{ width: 20, height: 20 }} />
        <span>English</span>
      </div>
    ),
  },
];