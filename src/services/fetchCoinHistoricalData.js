import axiosInstance from "../helpers/axiosInstance";

export async function fetchCoinHistoricalData(
  coinId,
  days,
  interval,
  currency = "usd"
) {
  try {
    const responce = await axiosInstance.get(
      `/coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}&interval=${interval}` //
    );
    return responce.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
