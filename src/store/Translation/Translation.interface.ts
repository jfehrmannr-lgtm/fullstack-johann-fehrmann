import type { ITranslation } from "../../components/Transaltion/translation.interface";

export interface ITranslationStore {
  translation: ITranslation;

  setTranslation: (translation: ITranslation) => void
}