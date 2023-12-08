import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { mockBarData as data } from "../data/mockData";


const mockDataBookingHistory = [
  // ... (your booking history data)
  
    {
      id: 1,
      name: "Jon Snow",
      email: "jonsnow@gmail.com",
      phone: "(665)121-5454",
      BookingId: 123512,
      date: "03/21/2022",
      origin: "Kokkola",
      destination: "Helsinki",
    },
    {
      id: 2,
      name: "Cersei Lannister",
      email: "cerseilannister@gmail.com",
      phone: "(421)314-2288",
      BookingId: 123512,
      date: "03/21/2022",
      origin: "Kokkola",
      destination: "Tampere",
      
    },
    {
      id: 3,
      name: "Jaime Lannister",
      email: "jaimelannister@gmail.com",
      phone: "(422)982-6739",
      address: "3333 Want Blvd, Estanza, NAY 42125",
      BookingId: 4132513,
      date: "03/21/2022",
      origin: "Helsinki",
      destination: "Darmstadt",
    },
    {
      id: 4,
      name: "Anya Stark",
      email: "anyastark@gmail.com",
      phone: "(921)425-6742",
      address: "1514 Main Street, New York, NY 22298",
      BookingId: 123512,
      date: "03/21/2022",
      origin: "Vassa",
      destination: "Helsinki",
    },
    {
      id: 5,
      name: "Daenerys Targaryen",
      email: "daenerystargaryen@gmail.com",
      phone: "(421)445-1189",
      address: "11122 Welping Ave, Tenting, CD 21321",
      BookingId: 123512,
      date: "03/21/2022",
      origin: "Kokkola",
      destination: "Seinajoki",
    },
    {
      id: 6,
      name: "Ever Melisandre",
      email: "evermelisandre@gmail.com",
      phone: "(232)545-6483",
      address: "1234 Canvile Street, Esvazark, NY 10001",
      BookingId: 123512,
      date: "03/21/2022",
      origin: "Helsinki",
      destination: "Frankfurt",
    },
    {
      id: 7,
      name: "Ferrara Clifford",
      email: "ferraraclifford@gmail.com",
      phone: "(543)124-0123",
      address: "22215 Super Street, Everting, ZO 515234",
      BookingId: 123512,
      date: "03/21/2022",
      origin: "Helsinki",
      destination: "Stockolm",
    },
    {
      id: 8,
      name: "Rossini Frances",
      email: "rossinifrances@gmail.com",
      phone: "(222)444-5555",
      zipCode: "44215",
      BookingId: 512315,
      date: "03/21/2022",
      origin: "Kokkola",
      destination: "Helsinki",
    },
    {
      id: 9,
      name: "Harvey Roxie",
      email: "harveyroxie@gmail.com",
      phone: "(444)555-6239",
      address: "51234 Avery Street, Cantory, ND 212412",
      BookingId: 928397,
      date: "03/21/2022",
      origin: "Kokkola",
      destination: "Turku",
    },
    {
      id: 10,
      name: "Enteri Redack",
      email: "enteriredack@gmail.com",
      phone: "(222)444-5555",
      address: "4123 Easer Blvd, Wentington, AD 142213",
      BookingId: 533215,
      date: "03/21/2022",
      origin: "Kokkola",
      destination: "Oulu",
    },
    {
      id: 11,
      name: "Steve Goodman",
      email: "stevegoodmane@gmail.com",
      phone: "(444)555-6239",
      address: "51234 Fiveton Street, CunFory, ND 212412",
      BookingId: 92197,
      date: "03/21/2022",
      origin: "Kokkola",
      destination: "Rovaniemi",
    },
    {
      id: 12,
      name: "Steve Goodman",
      email: "stevegoodmane@gmail.com",
      phone: "(444)555-6239",
      address: "51234 Fiveton Street, CunFory, ND 212412",
      BookingId: 92197,
      date: "03/21/2022",
      origin: "Kokkola",
      destination: "Espoo",
    },
    {
      id: 13,
      name: "Steve Goodman",
      email: "stevegoodmane@gmail.com",
      phone: "(444)555-6239",
      address: "51234 Fiveton Street, CunFory, ND 212412",
      BookingId: 92197,
      date: "03/21/2022",
      origin: "Kokkola",
      destination: "Vantaa",
    },
    {
      id: 14,
      name: "Steve Goodman",
      email: "stevegoodmane@gmail.com",
      phone: "(444)555-6239",
      address: "51234 Fiveton Street, CunFory, ND 212412",
      BookingId: 92197,
      date: "03/21/2022",
      origin: "Kokkola",
      destination: "Joensuu",
    },
    {
      id: 15,
      name: "Steve Goodman",
      email: "stevegoodmane@gmail.com",
      phone: "(444)555-6239",
      address: "51234 Fiveton Street, CunFory, ND 212412",
      BookingId: 92197,
      date: "03/21/2022",
      origin: "Kokkola",
      destination: "Porvoo",
    },
    {
      id: 16,
      name: "Steve Goodman",
      email: "stevegoodmane@gmail.com",
      phone: "(444)555-6239",
      address: "51234 Fiveton Street, CunFory, ND 212412",
      BookingId: 92197,
      date: "03/21/2022",
      origin: "Kokkola",
      destination: "Savonlinna",
    },
    {
      id: 17,
      name: "Steve Goodman",
      email: "stevegoodmane@gmail.com",
      phone: "(444)555-6239",
      address: "51234 Fiveton Street, CunFory, ND 212412",
      BookingId: 92197,
      date: "03/21/2022",
      origin: "Kokkola",
      destination: "Helsinki",
    },
    {
      id: 18,
      name: "Steve Goodman",
      email: "stevegoodmane@gmail.com",
      phone: "(444)555-6239",
      address: "51234 Fiveton Street, CunFory, ND 212412",
      BookingId: 92197,
      date: "03/21/2022",
      origin: "Kokkola",
      destination: "Rauma",
    },
    
    {
      id: 19,
      name: "Steve Goodman",
      email: "stevegoodmane@gmail.com",
      phone: "(444)555-6239",
      address: "51234 Fiveton Street, CunFory, ND 212412",
      BookingId: 92197,
      date: "03/21/2022",
      origin: "Kokkola",
      destination: "Jyvaskyla",
    },
    {
      id: 20,
      name: "Steve Goodman",
      email: "stevegoodmane@gmail.com",
      phone: "(444)555-6239",
      address: "51234 Fiveton Street, CunFory, ND 212412",
      BookingId: 92197,
      date: "03/21/2022",
      origin: "Kokkola",
      destination: "Helsinki",
    },
  ];

const aggregatedData = mockDataBookingHistory.reduce((acc, booking) => {
  const { origin } = booking;
  if (!acc[origin]) {
    acc[origin] = {
      country: origin, // Assuming the origin represents the country in your case
      [origin.toLowerCase()]: 1,
      [`${origin.toLowerCase()}Color`]: `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`, // Generating a random color
    };
  } else {
    acc[origin][origin.toLowerCase()] += 1;
  }
  return acc;
}, {});

const transformedData = Object.values(aggregatedData);
console.log(transformedData);


const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveBar
      data={data}
      theme={{
        // added
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
      }}
      keys={["darmstadt", "tampere", "vassa", "kokkola", "seinäjoki", "helsinki"]}
      indexBy="country"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", "1.6"]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Destination", // changed
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Origin", // changed
        legendPosition: "middle",
        legendOffset: -40,
      }}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
      }}
    />
  );
};

export default BarChart;
