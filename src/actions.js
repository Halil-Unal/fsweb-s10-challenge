import axios from "axios";

export const NOT_EKLE = "NOT_EKLE"
export const NOT_SIL = "NOT_SIL"

export const notEkle = (not) => {
  return { type: NOT_EKLE, payload: not }
}

export const notSil = (not) => {
  return { type: NOT_SIL, payload: not }
}

export const notEkleAPI = (yeniNot) => (dispatch) => {
  axios
    .post("https://httpbin.org/anything", yeniNot)
    .then((res) => {
      if (res.status === 200) {
        const data = (res.data.json);
        dispatch({ type: NOT_EKLE, payload: data });
      }
    })
    .catch((error) => console.log(error));
}

export const notSilAPI = (id) => (dispatch) => {
  axios
    .delete("https://httpbin.org/anything", { data: { id } })
    .then((res) => {
      if (res.status === 200) {
        const data = JSON.parse(res.data.data);
       // const data = (res.data.json);
        dispatch({ type: NOT_SIL, payload: data });
      }
    })
    .catch((error) => console.log(error));
}

