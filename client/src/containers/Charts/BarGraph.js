import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
class ItemBarChart extends Component {
  render() {
    let cards = {
      6: ["Kutch-Mueller"],
      5: [
        "Osinski Inc",
        "O'Kon Group",
        "Boehm, West and Oberbrunner",
        "O'Keefe Inc"
      ],
      4: [
        "Leuschke Group",
        "Waters, Lockman and Keebler",
        "Hessel Group",
        "Gerlach Inc",
        "Breitenberg, Waelchi and Murphy"
      ],
      3: [
        "Jacobson, Mertz and Kiehn",
        "Carroll, Lindgren and Schoen",
        "Kunde Group",
        "Luettgen-Kling",
        "Sanford Ltd",
        "Waelchi-Haag",
        "Moore Ltd",
        "Doyle and Sons",
        "Jaskolski-Senger",
        "Schoen, Streich and Wolff",
        "Barrows-Abshire",
        "Weissnat, Lehner and Torp",
        "Okuneva, Reynolds and Buckridge",
        "Ernser, Schroeder and Swaniawski",
        "Schroeder-Blanda",
        "Robel Ltd",
        "Legros-Morissette",
        "Sporer, Gislason and Abshire",
        "Bauch, Beahan and Nienow",
        "Deckow, Lindgren and Moen",
        "Lemke-Jacobs",
        "Prosacco Ltd",
        "Dibbert, Boyle and Hane",
        "Kuphal-Rempel",
        "Mayert and Sons",
        "Little PLC",
        "McLaughlin PLC",
        "Jerde-Hackett",
        "Leuschke Ltd",
        "Roberts-Willms",
        "Schowalter Inc",
        "Collier Ltd",
        "Shanahan-Romaguera",
        "Beatty-Wisozk",
        "Champlin-Bosco",
        "Effertz, Schamberger and Koepp",
        "Dietrich-Ebert",
        "Walsh-Wyman",
        "Veum-Rowe",
        "Kshlerin-Hilll",
        "Hauck-Huel",
        "Osinski Ltd",
        "Koelpin, Stiedemann and Ratke",
        "Roob and Sons",
        "Smitham-Dickinson",
        "Langosh, Hahn and Ullrich",
        "Steuber-Miller",
        "Satterfield and Sons",
        "Olson-Jacobson",
        "Breitenberg-Streich",
        "Schuppe, Mitchell and Hilll",
        "Rutherford-Wisoky",
        "Kuhlman-Carroll",
        "Moore, Daugherty and Fadel",
        "Howell Inc",
        "Fadel-Wilderman",
        "Haag PLC",
        "Waelchi-Wintheiser",
        "Kutch, Altenwerth and Deckow",
        "Heaney, Buckridge and Jast",
        "Lehner PLC",
        "Ziemann, Kutch and Schiller",
        "Dicki LLC",
        "Casper Ltd",
        "Hoeger, Christiansen and Ward",
        "Walsh Ltd",
        "Wisozk, Ferry and Padberg",
        "Dickinson PLC",
        "Berge-Ortiz",
        "Crona, Walter and Rutherford",
        "Mayert-Hane",
        "Schmitt Inc",
        "Friesen and Sons",
        "Homenick, Block and Abernathy",
        "Pagac-Hintz",
        "Howell, Schuppe and Keeling",
        "Bechtelar, Haley and Hahn",
        "Jaskolski-McClure",
        "Marks, Funk and Ullrich",
        "Lemke-Heidenreich",
        "Ortiz-Lesch",
        "Powlowski, Adams and Weimann",
        "Kutch-Nitzsche",
        "Stracke-Adams",
        "Schumm, Toy and Moore",
        "Mraz-Mills",
        "Bauch-Strosin",
        "Krajcik LLC",
        "O'Kon-Hickle",
        "Ullrich, Blanda and Stokes",
        "McCullough-Spencer",
        "Wisozk, Olson and Keebler",
        "Ullrich, Koepp and Ondricka",
        "Beatty-Larson",
        "Hirthe and Sons",
        "Hermann PLC",
        "Williamson, Ratke and Weissnat",
        "Mitchell-Schoen",
        "Bergstrom-Bruen"
      ],
      2: [
        "Hettinger-Parker",
        "Lang-Homenick",
        "Price PLC",
        "Schmeler Group",
        "Wehner, Morissette and Hoppe",
        "Ledner-Hoppe",
        "Hodkiewicz-Gutkowski",
        "Farrell-Powlowski",
        "Welch, Considine and Tremblay",
        "Schmitt-Collier",
        "Ledner, Schmitt and Adams",
        "DuBuque PLC",
        "Satterfield-Halvorson",
        "Huels, Hettinger and Boyer",
        "Rohan, Beer and Murray",
        "Kshlerin, Krajcik and Brown",
        "Greenfelder-Okuneva",
        "Walter Ltd",
        "Jerde, Breitenberg and Cronin",
        "Kuhlman-Parker",
        "Anderson-Hane",
        "Greenfelder Inc",
        "Gusikowski, Lowe and Gutmann",
        "Ernser, O'Keefe and Rice",
        "Pfannerstill, Willms and Rutherford",
        "McKenzie-Hahn",
        "Ondricka, Brakus and Littel",
        "Aufderhar-Hahn",
        "Schaefer LLC",
        "Ratke, Powlowski and Altenwerth",
        "Hand, Kautzer and Kunde",
        "Murphy-Haley",
        "Wuckert-Champlin",
        "White Ltd",
        "Bauch LLC",
        "Leannon LLC",
        "Ferry PLC",
        "Jacobi PLC",
        "Abshire, Sipes and O'Kon",
        "Cronin-Kulas",
        "Bogan, Hyatt and Robel",
        "Christiansen Group",
        "Muller, Will and Kuphal",
        "Watsica LLC",
        "Gaylord and Sons",
        "Torphy Ltd",
        "Wisoky, Murazik and Sawayn",
        "Moore, Blanda and Hyatt",
        "Kihn and Sons",
        "Cassin PLC",
        "Lynch-Keebler",
        "Moen and Sons",
        "Wolff LLC"
      ],
      1: [
        "Russel, Wilderman and Mante",
        "Skiles-Adams",
        "Mayert-Lesch",
        "Corkery PLC",
        "Stracke LLC",
        "Flatley-Harber",
        "Hermiston LLC",
        "Ankunding-Miller",
        "Goodwin-Auer",
        "Streich, Smith and Harris",
        "Stanton Inc",
        "Schiller-Bogan",
        "Carter, Windler and Gerhold",
        "Cruickshank, Pfannerstill and West",
        "Terry LLC",
        "Schamberger, Terry and Jenkins",
        "Padberg LLC",
        "Hettinger, Bartoletti and Aufderhar",
        "Terry PLC",
        "Satterfield, Hane and Jones",
        "Torphy Inc",
        "Schneider, Schuster and Robel",
        "Mraz, Davis and Schultz",
        "Marvin Group",
        "Lynch, Halvorson and Schmitt",
        "Hegmann Ltd",
        "McLaughlin LLC",
        "Feeney-Hayes",
        "Rolfson PLC",
        "Reichert-Rowe",
        "Ankunding Group",
        "Abbott LLC",
        "Morissette-Champlin",
        "Ward, Parisian and O'Reilly",
        "Emard, Witting and DuBuque",
        "Smitham-Kutch",
        "Dare, Barton and Weber"
      ],
      0: []
    };
    let card0 = cards[0];
    let card1 = cards[1];
    let card2 = cards[2];
    let card3 = cards[3];
    let card4 = cards[4];
    let card5 = cards[5];
    let card6 = cards[6];
    let cardList = [card0, card1, card2, card3, card4, card5, card6];
    let options = {
      tooltips: {
        callbacks: {
          label: function(tooltipItem) {
            const indice = tooltipItem.index;
            return cardList[indice];
          }
        }
      },
      responsive: true,

      maintainAspectRatio: true,
      aspectRatio: 1,
      scales: {
        label: [
          {
            fontSize: 18,
            fontFamily: "Krub",
            fontColor: "black"
          }
        ],
        yAxes: [
          {
            ticks: {
              suggestedMax: 6,
              fontFamily: "Krub",
              fontSize: 14,
              fontColor: "black",
              beginAtZero: true,
              min: 0,
              userCallback: function(label) {
                if (Math.floor(label) === label) {
                  return label;
                }
              }
            }
          }
        ],
        xAxes: [
          {
            ticks: {
              fontFamily: "Krub",
              fontSize: 12,
              fontColor: "black"
            }
          }
        ]
      }
    };
    const data = {
      labels: Object.keys(cards),

      datasets: [
        {
          label: "status changes",

          backgroundColor: "red",
          borderColor: "red",
          borderWidth: 1,
          hoverBackgroundColor: "red",
          hoverBorderColor: "red",
          data: [
            cardList[0].length,
            cardList[1].length,
            cardList[2].length,
            cardList[3].length,
            cardList[4].length,
            cardList[5].length,
            cardList[6].length
          ]
        }
      ]
    };
    return <Bar height={300} width={550} data={data} options={options} />;
  }
}

export default ItemBarChart;
