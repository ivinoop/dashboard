# Welcome to the dashboard application

## Features - 

  - A clean layout to display organizational cards
  - Switch between tabs to sort cards accordingly
  - Search for cards using the unique card name and display results dynamically
  - Inifinite scrolling to display more cards, with results capped to 10 cards per page view

## Visit app -

> [Netlify Link](https://6236b1e605f6a755693c8f44--volo-dash.netlify.app/)

## Instructions to to run app on local machine -

- Clone this repo -

  > [GitHub Repo](https://github.com/ivinoop/dashboard)

  > Command - `git clone repo-link`

- Run the following commands -

  - To install all required dependencies
  ```js
  npm run i
  ```
  - To run the app in your browser
  ```js
  npm run start
  ```

## Mock API created through -

> [MockAPI](https://mockapi.io/)

## Template for mock API -

```json
{
  "name": "$name.firstName",
  "budget_name": "Software subscription",
  "owner_id": "$datatype.number",
  "spent": {
    "value": "$datatype.number",
    "currency": "SGD"
  },
  "available_to_spend": {
    "value": "$datatype.number",
    "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "$date.month",
  "limit": 100,
  "status": "active",
  "id": "$phone.phoneNumber"
}
```

## Sample data

<details>
  <summary>Click to open</summary>

  ```json
[
 {
  "name": "Ladarius",
  "budget_name": "Software subscription",
  "owner_id": 12345,
  "spent": {
   "value": 78642,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 84621,
   "currency": "SGD"
  },
  "card_type": "subscription",
  "expiry": "July",
  "limit": 100,
  "status": "active",
  "id": "1"
 },
 {
  "name": "Margarete",
  "budget_name": "Software subscription",
  "owner_id": 12345,
  "spent": {
   "value": 17897,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 89175,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "March",
  "limit": 100,
  "status": "active",
  "id": "2"
 },
 {
  "name": "Gilberto",
  "budget_name": "Software subscription",
  "owner_id": 69951,
  "spent": {
   "value": 29157,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 43228,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "March",
  "limit": 100,
  "status": "blocked",
  "id": "3"
 },
 {
  "name": "Lewis",
  "budget_name": "Software subscription",
  "owner_id": 28091,
  "spent": {
   "value": 61602,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 66169,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "May",
  "limit": 100,
  "status": "active",
  "id": "4"
 },
 {
  "name": "Cullen",
  "budget_name": "Software subscription",
  "owner_id": 91193,
  "spent": {
   "value": 55897,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 67173,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "June",
  "limit": 100,
  "status": "active",
  "id": "5"
 },
 {
  "name": "Darrel",
  "budget_name": "Software subscription",
  "owner_id": 22716,
  "spent": {
   "value": 41339,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 66153,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "July",
  "limit": 100,
  "status": "active",
  "id": "6"
 },
 {
  "name": "Cathrine",
  "budget_name": "Software subscription",
  "owner_id": 32384,
  "spent": {
   "value": 57324,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 15446,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "July",
  "limit": 100,
  "status": "active",
  "id": "7"
 },
 {
  "name": "Esperanza",
  "budget_name": "Software subscription",
  "owner_id": 75364,
  "spent": {
   "value": 96666,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 62750,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "August",
  "limit": 100,
  "status": "active",
  "id": "8"
 },
 {
  "name": "Rudolph",
  "budget_name": "Software subscription",
  "owner_id": 34829,
  "spent": {
   "value": 47209,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 56777,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "March",
  "limit": 100,
  "status": "active",
  "id": "9"
 },
 {
  "name": "Georgiana",
  "budget_name": "Software subscription",
  "owner_id": 90900,
  "spent": {
   "value": 99216,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 22585,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "November",
  "limit": 100,
  "status": "active",
  "id": "10"
 },
 {
  "name": "Israel",
  "budget_name": "Software subscription",
  "owner_id": 96643,
  "spent": {
   "value": 69386,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 25881,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "June",
  "limit": 100,
  "status": "active",
  "id": "11"
 },
 {
  "name": "Calista",
  "budget_name": "Software subscription",
  "owner_id": 9020,
  "spent": {
   "value": 95955,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 91136,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "June",
  "limit": 100,
  "status": "active",
  "id": "12"
 },
 {
  "name": "Fredrick",
  "budget_name": "Software subscription",
  "owner_id": 26973,
  "spent": {
   "value": 55076,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 46188,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "February",
  "limit": 100,
  "status": "active",
  "id": "13"
 },
 {
  "name": "Eve",
  "budget_name": "Software subscription",
  "owner_id": 398,
  "spent": {
   "value": 98365,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 44207,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "June",
  "limit": 100,
  "status": "active",
  "id": "14"
 },
 {
  "name": "Anya",
  "budget_name": "Software subscription",
  "owner_id": 16569,
  "spent": {
   "value": 29661,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 11522,
   "currency": "SGD"
  },
  "card_type": "subscription",
  "expiry": "February",
  "limit": 100,
  "status": "active",
  "id": "15"
 },
 {
  "name": "Antonette",
  "budget_name": "Software subscription",
  "owner_id": 43454,
  "spent": {
   "value": 30689,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 33156,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "March",
  "limit": 100,
  "status": "active",
  "id": "16"
 },
 {
  "name": "Kareem",
  "budget_name": "Software subscription",
  "owner_id": 7364,
  "spent": {
   "value": 71704,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 2816,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "July",
  "limit": 100,
  "status": "active",
  "id": "17"
 },
 {
  "name": "Travis",
  "budget_name": "Software subscription",
  "owner_id": 68925,
  "spent": {
   "value": 4787,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 46011,
   "currency": "SGD"
  },
  "card_type": "subscription",
  "expiry": "October",
  "limit": 100,
  "status": "active",
  "id": "18"
 },
 {
  "name": "Donnie",
  "budget_name": "Software subscription",
  "owner_id": 41426,
  "spent": {
   "value": 32991,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 99771,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "August",
  "limit": 100,
  "status": "active",
  "id": "19"
 },
 {
  "name": "Casey",
  "budget_name": "Software subscription",
  "owner_id": 80718,
  "spent": {
   "value": 86066,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 75108,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "May",
  "limit": 100,
  "status": "active",
  "id": "20"
 },
 {
  "name": "Johnpaul",
  "budget_name": "Software subscription",
  "owner_id": 29075,
  "spent": {
   "value": 81897,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 34298,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "February",
  "limit": 100,
  "status": "active",
  "id": "21"
 },
 {
  "name": "Harmony",
  "budget_name": "Software subscription",
  "owner_id": 26647,
  "spent": {
   "value": 4176,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 24448,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "December",
  "limit": 100,
  "status": "active",
  "id": "22"
 },
 {
  "name": "Keara",
  "budget_name": "Software subscription",
  "owner_id": 4981,
  "spent": {
   "value": 92976,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 83322,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "May",
  "limit": 100,
  "status": "active",
  "id": "23"
 },
 {
  "name": "Marcel",
  "budget_name": "Software subscription",
  "owner_id": 20106,
  "spent": {
   "value": 85013,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 45575,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "January",
  "limit": 100,
  "status": "active",
  "id": "24"
 },
 {
  "name": "Crystal",
  "budget_name": "Software subscription",
  "owner_id": 85765,
  "spent": {
   "value": 21680,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 15098,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "June",
  "limit": 100,
  "status": "active",
  "id": "25"
 },
 {
  "name": "Chris",
  "budget_name": "Software subscription",
  "owner_id": 45262,
  "spent": {
   "value": 57715,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 80440,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "July",
  "limit": 100,
  "status": "active",
  "id": "26"
 },
 {
  "name": "Frederique",
  "budget_name": "Software subscription",
  "owner_id": 56017,
  "spent": {
   "value": 45143,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 12528,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "April",
  "limit": 100,
  "status": "active",
  "id": "27"
 },
 {
  "name": "Emilio",
  "budget_name": "Software subscription",
  "owner_id": 65733,
  "spent": {
   "value": 43177,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 93023,
   "currency": "SGD"
  },
  "card_type": "subscription",
  "expiry": "October",
  "limit": 100,
  "status": "active",
  "id": "28"
 },
 {
  "name": "Rosalee",
  "budget_name": "Software subscription",
  "owner_id": 78427,
  "spent": {
   "value": 4692,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 43868,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "December",
  "limit": 100,
  "status": "active",
  "id": "29"
 },
 {
  "name": "Antoinette",
  "budget_name": "Software subscription",
  "owner_id": 70553,
  "spent": {
   "value": 49464,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 27043,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "February",
  "limit": 100,
  "status": "active",
  "id": "30"
 },
 {
  "name": "Darren",
  "budget_name": "Software subscription",
  "owner_id": 14502,
  "spent": {
   "value": 32658,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 42888,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "January",
  "limit": 100,
  "status": "active",
  "id": "31"
 },
 {
  "name": "Marvin",
  "budget_name": "Software subscription",
  "owner_id": 60555,
  "spent": {
   "value": 270,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 27934,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "April",
  "limit": 100,
  "status": "active",
  "id": "32"
 },
 {
  "name": "Rodolfo",
  "budget_name": "Software subscription",
  "owner_id": 2996,
  "spent": {
   "value": 43055,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 13417,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "February",
  "limit": 100,
  "status": "active",
  "id": "33"
 },
 {
  "name": "Marion",
  "budget_name": "Software subscription",
  "owner_id": 46992,
  "spent": {
   "value": 61657,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 91289,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "December",
  "limit": 100,
  "status": "active",
  "id": "34"
 },
 {
  "name": "Kayli",
  "budget_name": "Software subscription",
  "owner_id": 12399,
  "spent": {
   "value": 55062,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 89263,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "December",
  "limit": 100,
  "status": "active",
  "id": "35"
 },
 {
  "name": "Edgardo",
  "budget_name": "Software subscription",
  "owner_id": 53125,
  "spent": {
   "value": 54965,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 41203,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "December",
  "limit": 100,
  "status": "active",
  "id": "36"
 },
 {
  "name": "Joan",
  "budget_name": "Software subscription",
  "owner_id": 50765,
  "spent": {
   "value": 20567,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 63777,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "February",
  "limit": 100,
  "status": "active",
  "id": "37"
 },
 {
  "name": "Justina",
  "budget_name": "Software subscription",
  "owner_id": 89164,
  "spent": {
   "value": 55350,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 43587,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "July",
  "limit": 100,
  "status": "active",
  "id": "38"
 },
 {
  "name": "Alan",
  "budget_name": "Software subscription",
  "owner_id": 29103,
  "spent": {
   "value": 28294,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 7225,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "April",
  "limit": 100,
  "status": "active",
  "id": "39"
 },
 {
  "name": "Misty",
  "budget_name": "Software subscription",
  "owner_id": 33102,
  "spent": {
   "value": 68560,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 9246,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "December",
  "limit": 100,
  "status": "active",
  "id": "40"
 },
 {
  "name": "Jordy",
  "budget_name": "Software subscription",
  "owner_id": 29591,
  "spent": {
   "value": 35558,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 46993,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "October",
  "limit": 100,
  "status": "active",
  "id": "41"
 },
 {
  "name": "Mathias",
  "budget_name": "Software subscription",
  "owner_id": 84048,
  "spent": {
   "value": 63921,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 68100,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "March",
  "limit": 100,
  "status": "active",
  "id": "42"
 },
 {
  "name": "Eldridge",
  "budget_name": "Software subscription",
  "owner_id": 9040,
  "spent": {
   "value": 1215,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 39232,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "April",
  "limit": 100,
  "status": "active",
  "id": "43"
 },
 {
  "name": "Betsy",
  "budget_name": "Software subscription",
  "owner_id": 53113,
  "spent": {
   "value": 68503,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 74243,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "December",
  "limit": 100,
  "status": "active",
  "id": "44"
 },
 {
  "name": "Matt",
  "budget_name": "Software subscription",
  "owner_id": 81785,
  "spent": {
   "value": 98985,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 93855,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "April",
  "limit": 100,
  "status": "active",
  "id": "45"
 },
 {
  "name": "Lucie",
  "budget_name": "Software subscription",
  "owner_id": 64427,
  "spent": {
   "value": 96736,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 19052,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "January",
  "limit": 100,
  "status": "active",
  "id": "46"
 },
 {
  "name": "Leon",
  "budget_name": "Software subscription",
  "owner_id": 44180,
  "spent": {
   "value": 69964,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 5994,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "November",
  "limit": 100,
  "status": "active",
  "id": "47"
 },
 {
  "name": "Xavier",
  "budget_name": "Software subscription",
  "owner_id": 1697,
  "spent": {
   "value": 10088,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 97077,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "March",
  "limit": 100,
  "status": "active",
  "id": "48"
 },
 {
  "name": "Beth",
  "budget_name": "Software subscription",
  "owner_id": 20046,
  "spent": {
   "value": 14376,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 88877,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "May",
  "limit": 100,
  "status": "active",
  "id": "49"
 },
 {
  "name": "Franz",
  "budget_name": "Software subscription",
  "owner_id": 87326,
  "spent": {
   "value": 94129,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 5978,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "November",
  "limit": 100,
  "status": "active",
  "id": "50"
 },
 {
  "name": "Raheem",
  "budget_name": "Software subscription",
  "owner_id": 45732,
  "spent": {
   "value": 22500,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 77965,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "May",
  "limit": 100,
  "status": "active",
  "id": "51"
 },
 {
  "name": "Aaliyah",
  "budget_name": "Software subscription",
  "owner_id": 5132,
  "spent": {
   "value": 19168,
   "currency": "SGD"
  },
  "available_to_spend": {
   "value": 25711,
   "currency": "SGD"
  },
  "card_type": "burner",
  "expiry": "April",
  "limit": 100,
  "status": "active",
  "id": "52"
 }
]
```
</details>


