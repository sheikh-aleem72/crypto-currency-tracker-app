import Alert from "../Alert/Alert";
import { Chart } from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";

function CoinInfo({ currency, days, historicData, setDays, setCoinInterval }) {
  Chart.register(CategoryScale);

  if (!historicData) {
    return <Alert message={"No data is available"} type="warning" />;
  }

  const chartDays = [
    {
      label: "24 Hours",
      value: 1,
    },
    {
      label: "7 Days",
      value: 7,
    },
    {
      label: "30 Days",
      value: 30,
    },
    {
      label: "1 Year",
      value: 365,
    },
  ];

  function handleDaysChange(e) {
    console.log(e.target.options[e.target.selectedIndex].value);
    const daysSelected = e.target.options[e.target.selectedIndex].value;
    if (daysSelected == 1) {
      setCoinInterval("");
    } else {
      setCoinInterval("daily");
    }

    setDays(e.target.options[e.target.selectedIndex].value);
  }

  return (
    <div className="flex flex-col w-full mt-6 p-6 justify-center items-center">
      <div className="h-[50vh] w-full">
        <Line
          data={{
            labels: historicData.prices.map((coinPrice) => {
              let date = new Date(coinPrice[0]);
              let time =
                date.getHours() > 12
                  ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                  : `${date.getHours()}:${date.getMinutes()} AM`;
              return days === 1 ? time : date.toLocaleDateString();
            }),
            datasets: [
              {
                label: `Price (past ${
                  days === 1 ? "day" : "days"
                }) in ${currency.toUpperCase()}`,
                data: historicData.prices.map((coinPrice) => coinPrice[1]),
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            elements: {
              point: {
                radius: 0,
              },
            },
          }}
        />
      </div>

      <div className="flex justify-center mt-4">
        <select
          className="select select-primary max-w-xs"
          onChange={handleDaysChange}
        >
          {chartDays.map((day, index) => {
            return (
              <option
                selected={days == day.value}
                key={index}
                value={day.value}
              >
                {day.label}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default CoinInfo;
