import {
  NOT_EKLE,
  NOT_SIL
} from "./actions";

const s10chLocalStorageKey = "s10ch";

const baslangicDegerleri = {
  notlar: [
    {
      id: "75g1IyB8JLehAr0Lr5v3p",
      date: "Fri Feb 03 2023 09:40:27 GMT+0300 (GMT+03:00)",
      body: "Bugün hava çok güzel!|En iyi arkadaşımın en iyi arkadaşı olduğumu öğrendim :)|Kedim iyileşti!",
    },
  ],
};

function localStorageStateYaz(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function localStorageStateOku(key) {
  return JSON.parse(localStorage.getItem(key));
}

function baslangicNotlariniGetir(key) {
  const eskiNotlar = localStorage.getItem(key);
  if (eskiNotlar) {
    return localStorageStateOku(key);
  } else {
    return baslangicDegerleri
  } 
}

export function myReducer(state = baslangicNotlariniGetir(s10chLocalStorageKey), action) {
  switch (action.type) {
    case NOT_EKLE:
      const yeniStateEkle = {
        ...state,
        notlar: [...state.notlar, action.payload]
      };
      localStorageStateYaz(s10chLocalStorageKey, yeniStateEkle);
      return yeniStateEkle;
    
    case NOT_SIL:
      const updatedNotes = state.notlar.filter(note => note.id !== action.payload.id);
      const yeniStateSil = {
        ...state,
        notlar: updatedNotes,
      };
      localStorageStateYaz(s10chLocalStorageKey, yeniStateSil);
      return yeniStateSil;

    default:
      return state;
  }
}
