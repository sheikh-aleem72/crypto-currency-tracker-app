import axiosInstance from "../helpers/axiosInstance";

export async function fetchCoinData(currency = "usd") {
  try {
    const responce = await axiosInstance.get(
      `/coins/markets?vs_currency=${currency}&order=market_cap_desc` //
    );
    return responce.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
