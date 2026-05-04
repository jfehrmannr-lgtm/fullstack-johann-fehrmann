import { create } from "zustand";
import type { ITranslationStore } from "./Translation.interface";
import type { ITranslation } from "../../components/Transaltion/translation.interface";
import ReactCountryFlag from "react-country-flag";

export const TranslationStore = create<ITranslationStore>((set) => ({
  translation: {
      value: "es",
      label: (
        <div className="flex items-center gap-2">
          <ReactCountryFlag countryCode="CL" svg style={{ width: 20, height: 20 }} />
          <span>Español</span>
        </div>
      ),
    },

  setTranslation: (newTranslation: ITranslation) => {
    console.debug("Hello world", newTranslation)
    set({ translation: newTranslation })
  }
}))