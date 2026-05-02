const customDeliveryPlaces = [
{ name: "Ntinda", address: "Ntinda, Kampala", lat: 0.3572, lng: 32.6246 },
  { name: "Bukoto", address: "Bukoto, Kampala", lat: 0.3476, lng: 32.5940 },
  { name: "Kololo", address: "Kololo, Kampala", lat: 0.3317, lng: 32.5920 },
  { name: "Bugolobi", address: "Bugolobi, Kampala", lat: 0.3206, lng: 32.6249 },
  { name: "Kisugu", address: "Kisugu, Kampala", lat: 0.3025, lng: 32.6104 },
  { name: "Muyenga", address: "Muyenga, Kampala", lat: 0.2897, lng: 32.6147 },
  { name: "Kabalagala", address: "Kabalagala, Kampala", lat: 0.2982, lng: 32.6045 },
  { name: "Kansanga", address: "Kansanga, Kampala", lat: 0.3000, lng: 32.6100 },
  { name: "Munyonyo", address: "Munyonyo, Kampala", lat: 0.2400, lng: 32.6250 },
  { name: "Lubowa", address: "Lubowa, Kampala", lat: 0.2750, lng: 32.5580 },

  { name: "Naalya", address: "Naalya, Kampala", lat: 0.3900, lng: 32.6480 },
  { name: "Najjera", address: "Najjera, Wakiso", lat: 0.4014, lng: 32.6053 },
  { name: "Buziga", address: "Buziga, Kampala", lat: 0.2790, lng: 32.6130 },
  { name: "Makindye", address: "Makindye, Kampala", lat: 0.2890, lng: 32.5830 },
  { name: "Wandegeya", address: "Wandegeya, Kampala", lat: 0.3368, lng: 32.5702 },

  { name: "Makerere", address: "Makerere, Kampala", lat: 0.3330, lng: 32.5660 },
  { name: "Mulago", address: "Mulago, Kampala", lat: 0.3390, lng: 32.5730 },
  { name: "Naguru", address: "Naguru, Kampala", lat: 0.3405, lng: 32.6110 },
  { name: "Kyambogo", address: "Kyambogo, Kampala", lat: 0.3590, lng: 32.6300 },
  { name: "Kireka", address: "Kireka, Kampala", lat: 0.3470, lng: 32.6610 },

  { name: "Bweyogerere", address: "Bweyogerere, Wakiso", lat: 0.3510, lng: 32.6770 },
  { name: "Namugongo", address: "Namugongo, Wakiso", lat: 0.3790, lng: 32.6760 },
  { name: "Kira", address: "Kira, Wakiso", lat: 0.3960, lng: 32.6210 },
  { name: "Gayaza", address: "Gayaza, Wakiso", lat: 0.4400, lng: 32.5700 },
  { name: "Kasangati", address: "Kasangati, Wakiso", lat: 0.4300, lng: 32.5900 },

  { name: "Nansana", address: "Nansana, Wakiso", lat: 0.3500, lng: 32.5200 },
  { name: "Kawempe", address: "Kawempe, Kampala", lat: 0.3680, lng: 32.5500 },
  { name: "Bwaise", address: "Bwaise, Kampala", lat: 0.3600, lng: 32.5600 },
  { name: "Kalerwe", address: "Kalerwe, Kampala", lat: 0.3650, lng: 32.5700 },
  { name: "Kazo", address: "Kazo, Kampala", lat: 0.3750, lng: 32.5800 },

  { name: "Kanyanya", address: "Kanyanya, Kampala", lat: 0.3700, lng: 32.5600 },
  { name: "Mpererwe", address: "Mpererwe, Kampala", lat: 0.3800, lng: 32.5600 },
  { name: "Kulambiro", address: "Kulambiro, Kampala", lat: 0.3500, lng: 32.6000 },
  { name: "Kisaasi", address: "Kisaasi, Kampala", lat: 0.3500, lng: 32.5800 },
  { name: "Kamwokya", address: "Kamwokya, Kampala", lat: 0.3350, lng: 32.5850 },

  { name: "Acacia", address: "Acacia Avenue, Kampala", lat: 0.3360, lng: 32.5855 },
  { name: "Nakasero", address: "Nakasero, Kampala", lat: 0.3200, lng: 32.5800 },
  { name: "City Square", address: "City Square, Kampala", lat: 0.3130, lng: 32.5810 },
  { name: "Owino", address: "Owino Market, Kampala", lat: 0.3080, lng: 32.5740 },
  { name: "Kikuubo", address: "Kikuubo, Kampala", lat: 0.3100, lng: 32.5790 },

  { name: "Nakawa", address: "Nakawa, Kampala", lat: 0.3300, lng: 32.6200 },
  { name: "Industrial Area", address: "Industrial Area, Kampala", lat: 0.3200, lng: 32.6100 },
  { name: "Luzira", address: "Luzira, Kampala", lat: 0.3000, lng: 32.6500 },
  { name: "Port Bell", address: "Port Bell, Kampala", lat: 0.2900, lng: 32.6500 },
  { name: "Butabika", address: "Butabika, Kampala", lat: 0.3100, lng: 32.6600 },

  { name: "Nsambya", address: "Nsambya, Kampala", lat: 0.3100, lng: 32.5900 },
  { name: "Katwe", address: "Katwe, Kampala", lat: 0.3000, lng: 32.5800 },
  { name: "Kibuye", address: "Kibuye, Kampala", lat: 0.2900, lng: 32.5800 },
  { name: "Ndeeba", address: "Ndeeba, Kampala", lat: 0.2900, lng: 32.5600 },
  { name: "Rubaga", address: "Rubaga, Kampala", lat: 0.3100, lng: 32.5500 },

  { name: "Mengo", address: "Mengo, Kampala", lat: 0.3050, lng: 32.5600 },
  { name: "Namirembe", address: "Namirembe, Kampala", lat: 0.3050, lng: 32.5500 },
  { name: "Kasubi", address: "Kasubi, Kampala", lat: 0.3200, lng: 32.5500 },
  { name: "Nakulabye", address: "Nakulabye, Kampala", lat: 0.3250, lng: 32.5500 },
  { name: "Makerere Kikoni", address: "Kikoni, Kampala", lat: 0.3300, lng: 32.5600 },

  { name: "Lugogo", address: "Lugogo, Kampala", lat: 0.3380, lng: 32.6100 },
  { name: "Lugogo Bypass", address: "Lugogo Bypass, Kampala", lat: 0.3400, lng: 32.6150 },
  { name: "Kitintale", address: "Kitintale, Kampala", lat: 0.3200, lng: 32.6300 },
  { name: "Mutungo", address: "Mutungo, Kampala", lat: 0.3100, lng: 32.6400 },
  { name: "Mutungo Hill", address: "Mutungo Hill, Kampala", lat: 0.3050, lng: 32.6450 },

  { name: "Bukasa", address: "Bukasa, Kampala", lat: 0.3000, lng: 32.6200 },
  { name: "Ggaba", address: "Ggaba, Kampala", lat: 0.2700, lng: 32.6400 },
  { name: "Bunga", address: "Bunga, Kampala", lat: 0.2600, lng: 32.6200 },
  { name: "Salaama", address: "Salaama, Kampala", lat: 0.2700, lng: 32.5800 },
  { name: "Kiwafu", address: "Kiwafu, Kampala", lat: 0.2750, lng: 32.6000 },

  { name: "Seguku", address: "Seguku, Wakiso", lat: 0.2500, lng: 32.5500 },
  { name: "Kajjansi", address: "Kajjansi, Wakiso", lat: 0.2200, lng: 32.5500 },
  { name: "Abayita Ababiri", address: "Abayita Ababiri, Wakiso", lat: 0.2000, lng: 32.5500 },
  { name: "Entebbe Road", address: "Entebbe Road, Kampala", lat: 0.2800, lng: 32.5600 },
  { name: "Zana", address: "Zana, Kampala", lat: 0.2700, lng: 32.5600 },

  { name: "Nateete", address: "Nateete, Kampala", lat: 0.3000, lng: 32.5300 },
  { name: "Mutundwe", address: "Mutundwe, Kampala", lat: 0.2800, lng: 32.5400 },
  { name: "Nalumunye", address: "Nalumunye, Wakiso", lat: 0.2600, lng: 32.5400 },
  { name: "Bunamwaya", address: "Bunamwaya, Kampala", lat: 0.2900, lng: 32.5400 },
  { name: "Kyengera", address: "Kyengera, Wakiso", lat: 0.3000, lng: 32.5000 },

  { name: "Bulenga", address: "Bulenga, Wakiso", lat: 0.3100, lng: 32.4800 },
  { name: "Mityana Road", address: "Mityana Road, Kampala", lat: 0.3200, lng: 32.5000 },
  { name: "Sentema", address: "Sentema, Wakiso", lat: 0.3400, lng: 32.4700 },
  { name: "Wakiso Town", address: "Wakiso Town, Wakiso", lat: 0.4000, lng: 32.4700 },
  { name: "Kakiri", address: "Kakiri, Wakiso", lat: 0.4100, lng: 32.4000 },

  { name: "Busega", address: "Busega, Kampala", lat: 0.3200, lng: 32.5300 },
  { name: "Namungoona", address: "Namungoona, Kampala", lat: 0.3300, lng: 32.5400 },
  { name: "Lubya", address: "Lubya, Kampala", lat: 0.3200, lng: 32.5400 },
  { name: "Kasubi Nabulagala", address: "Nabulagala, Kampala", lat: 0.3300, lng: 32.5400 },
  { name: "Bombo Road", address: "Bombo Road, Kampala", lat: 0.3600, lng: 32.5600 },

  { name: "Matugga", address: "Matugga, Wakiso", lat: 0.4300, lng: 32.5300 },
  { name: "Kanyanya Estates", address: "Kanyanya Estates, Kampala", lat: 0.3700, lng: 32.5550 },
  { name: "Kawanda", address: "Kawanda, Wakiso", lat: 0.4000, lng: 32.5200 },
  { name: "Gayaza Road", address: "Gayaza Road, Kampala", lat: 0.3900, lng: 32.5600 },
  { name: "Ttula", address: "Ttula, Kampala", lat: 0.3600, lng: 32.5600 },

  { name: "Kitebi", address: "Kitebi, Kampala", lat: 0.3000, lng: 32.5400 },
  { name: "Kisenyi", address: "Kisenyi, Kampala", lat: 0.3100, lng: 32.5700 },
  { name: "Old Kampala", address: "Old Kampala, Kampala", lat: 0.3100, lng: 32.5700 },
  { name: "Namirembe Road", address: "Namirembe Road, Kampala", lat: 0.3100, lng: 32.5600 },
  { name: "Balintuma", address: "Balintuma, Kampala", lat: 0.3000, lng: 32.5700 },

  { name: "Clock Tower", address: "Clock Tower, Kampala", lat: 0.3000, lng: 32.5800 },
  { name: "Kibuye Roundabout", address: "Kibuye, Kampala", lat: 0.2900, lng: 32.5800 },
  { name: "Nsambya Hospital", address: "Nsambya, Kampala", lat: 0.3100, lng: 32.5900 },
  { name: "American Embassy", address: "Nsambya, Kampala", lat: 0.3000, lng: 32.6000 },
  { name: "Ggaba Road", address: "Ggaba Road, Kampala", lat: 0.3000, lng: 32.6000 },

  { name: "Lukuli", address: "Lukuli, Kampala", lat: 0.2800, lng: 32.5900 },
  { name: "Zion Estate", address: "Zion Estate, Kampala", lat: 0.2800, lng: 32.6000 },
  { name: "Tank Hill", address: "Tank Hill, Kampala", lat: 0.2850, lng: 32.6100 },
  { name: "Munyonya Beach", address: "Munyonyo, Kampala", lat: 0.2400, lng: 32.6300 },
  { name: "Speke Resort", address: "Munyonyo, Kampala", lat: 0.2450, lng: 32.6300 },

  { name: "Lweza", address: "Lweza, Wakiso", lat: 0.2600, lng: 32.5700 },
  { name: "Kigo", address: "Kigo, Wakiso", lat: 0.2500, lng: 32.5500 },
  { name: "Kawuku", address: "Kawuku, Wakiso", lat: 0.2700, lng: 32.6200 },
  { name: "Bwerenga", address: "Bwerenga, Wakiso", lat: 0.2600, lng: 32.6400 },
  { name: "Kajjansi Airfield", address: "Kajjansi, Wakiso", lat: 0.2200, lng: 32.5500 },

  { name: "Metroplex", address: "Naalya, Kampala", lat: 0.3900, lng: 32.6500 },
  { name: "Quality Shopping Village", address: "Naalya, Kampala", lat: 0.3900, lng: 32.6480 },
  { name: "Capital Shoppers Nakawa", address: "Nakawa, Kampala", lat: 0.3300, lng: 32.6200 },
  { name: "Forest Mall Lugogo", address: "Lugogo, Kampala", lat: 0.3380, lng: 32.6100 },
  { name: "Game Store Lugogo", address: "Lugogo, Kampala", lat: 0.3380, lng: 32.6100 },

    { name: "Acacia Mall", address: "Kololo, Kampala", lat: 0.3360, lng: 32.5850 },
  { name: "Garden City", address: "Nakawa, Kampala", lat: 0.3200, lng: 32.6000 },
  { name: "Oasis Mall", address: "Nakasero, Kampala", lat: 0.3200, lng: 32.5800 },
  { name: "Arena Mall", address: "Nsambya, Kampala", lat: 0.3000, lng: 32.5900 },
  { name: "Freedom City", address: "Namasuba, Kampala", lat: 0.2800, lng: 32.5700 },

  { name: "Kibuye Trading Center", address: "Kibuye, Kampala", lat: 0.2900, lng: 32.5800 },
  { name: "Namasuba", address: "Namasuba, Wakiso", lat: 0.2700, lng: 32.5700 },
  { name: "Kyaliwajjala", address: "Kyaliwajjala, Wakiso", lat: 0.3700, lng: 32.6400 },
  { name: "Namulanda", address: "Namulanda, Wakiso", lat: 0.2300, lng: 32.5600 },
  { name: "Kitende", address: "Kitende, Wakiso", lat: 0.2400, lng: 32.5600 },

  { name: "Seguku Katale", address: "Seguku, Wakiso", lat: 0.2500, lng: 32.5500 },
  { name: "Zzana Roundabout", address: "Zzana, Kampala", lat: 0.2700, lng: 32.5600 },
  { name: "Clock Tower Roundabout", address: "Kampala", lat: 0.3000, lng: 32.5800 },
  { name: "Kibuye Market", address: "Kibuye, Kampala", lat: 0.2900, lng: 32.5800 },
  { name: "Nakasero Market", address: "Nakasero, Kampala", lat: 0.3200, lng: 32.5800 },

  { name: "Usafi Market", address: "Kampala", lat: 0.3100, lng: 32.5800 },
  { name: "St Balikuddembe Market", address: "Kampala", lat: 0.3080, lng: 32.5740 },
  { name: "Kalerwe Market", address: "Kalerwe, Kampala", lat: 0.3650, lng: 32.5700 },
  { name: "Nakawa Market", address: "Nakawa, Kampala", lat: 0.3300, lng: 32.6200 },
  { name: "Wandegeya Market", address: "Wandegeya, Kampala", lat: 0.3368, lng: 32.5702 },

  { name: "Makerere Main Gate", address: "Makerere, Kampala", lat: 0.3330, lng: 32.5660 },
  { name: "Mulago Hospital", address: "Mulago, Kampala", lat: 0.3390, lng: 32.5730 },
  { name: "Naguru Hospital", address: "Naguru, Kampala", lat: 0.3405, lng: 32.6110 },
  { name: "International Hospital Kampala", address: "Namuwongo, Kampala", lat: 0.3100, lng: 32.6100 },
  { name: "Case Hospital", address: "Nakasero, Kampala", lat: 0.3200, lng: 32.5800 },

  { name: "Kololo Airstrip", address: "Kololo, Kampala", lat: 0.3340, lng: 32.5920 },
  { name: "Uganda Museum", address: "Kitante, Kampala", lat: 0.3340, lng: 32.5750 },
  { name: "National Theatre", address: "Kampala", lat: 0.3200, lng: 32.5900 },
  { name: "Parliament", address: "Kampala", lat: 0.3200, lng: 32.5800 },
  { name: "State House Nakasero", address: "Nakasero, Kampala", lat: 0.3200, lng: 32.5800 },

  { name: "Lubiri", address: "Mengo, Kampala", lat: 0.3000, lng: 32.5600 },
  { name: "Kabaka's Lake", address: "Ndeeba, Kampala", lat: 0.2900, lng: 32.5600 },
  { name: "Namirembe Cathedral", address: "Namirembe, Kampala", lat: 0.3050, lng: 32.5500 },
  { name: "Rubaga Cathedral", address: "Rubaga, Kampala", lat: 0.3100, lng: 32.5500 },
  { name: "Gaddafi Mosque", address: "Old Kampala, Kampala", lat: 0.3100, lng: 32.5700 },

  { name: "Kampala Serena Hotel", address: "Kampala", lat: 0.3200, lng: 32.5900 },
  { name: "Sheraton Hotel", address: "Kampala", lat: 0.3200, lng: 32.5900 },
  { name: "Protea Hotel", address: "Kololo, Kampala", lat: 0.3300, lng: 32.5900 },
  { name: "Fairway Hotel", address: "Kampala", lat: 0.3200, lng: 32.5800 },
  { name: "Speke Hotel", address: "Kampala", lat: 0.3200, lng: 32.5800 },

  { name: "Uganda Golf Club", address: "Kololo, Kampala", lat: 0.3300, lng: 32.5900 },
  { name: "Lugogo Cricket Oval", address: "Lugogo, Kampala", lat: 0.3380, lng: 32.6100 },
  { name: "MTN Arena", address: "Lugogo, Kampala", lat: 0.3380, lng: 32.6100 },
  { name: "Namboole Stadium", address: "Bweyogerere, Wakiso", lat: 0.3470, lng: 32.6500 },
  { name: "Makerere Sports Ground", address: "Makerere, Kampala", lat: 0.3330, lng: 32.5660 },

// Hotels (corrected)

{ name: "Kampala Serena Hotel", address: "Kintu Road, Kampala", lat: 0.313611, lng: 32.589681 },

{ name: "Sheraton Kampala Hotel", address: "Ternan Avenue, Kampala", lat: 0.314708, lng: 32.588998 },

{ name: "Speke Hotel", address: "Nile Avenue, Kampala", lat: 0.313947, lng: 32.582204 },

{ name: "Fairway Hotel", address: "Kafu Road, Kampala", lat: 0.317868, lng: 32.581095 },

{ name: "Protea Hotel Kololo", address: "Kololo, Kampala", lat: 0.330473, lng: 32.590987 },

{ name: "Forest Cottages", address: "Naguru, Kampala", lat: 0.341166, lng: 32.612325 },

{ name: "Arcadia Suites", address: "Kololo, Kampala", lat: 0.333227, lng: 32.590412 },

{ name: "Golf Course Hotel", address: "Kololo, Kampala", lat: 0.329018, lng: 32.590214 },

{ name: "Dolphin Suites", address: "Bugolobi, Kampala", lat: 0.320332, lng: 32.624936 },

{ name: "Le Petit Village Hotel", address: "Bugolobi, Kampala", lat: 0.318934, lng: 32.623957 },

{ name: "Latitude 0 Degrees", address: "Makindye, Kampala", lat: 0.279716, lng: 32.600441 },

{ name: "Cassia Lodge", address: "Buziga, Kampala", lat: 0.279532, lng: 32.612836 },

{ name: "Speke Resort Munyonyo", address: "Munyonyo, Kampala", lat: 0.244746, lng: 32.629773 },

{ name: "Lake Victoria Serena Resort", address: "Kigo, Wakiso", lat: 0.249826, lng: 32.551268 },

{ name: "Imperial Royale Hotel", address: "Nakasero, Kampala", lat: 0.315168, lng: 32.580561 },

  //Apartment//
    { name: "Kololo Heights Apartments", address: "Kololo, Kampala", lat: 0.3320, lng: 32.5900 },
  { name: "Bukoto Heights", address: "Bukoto, Kampala", lat: 0.3470, lng: 32.5950 },
  { name: "Naguru Sky Apartments", address: "Naguru, Kampala", lat: 0.3410, lng: 32.6120 },
  { name: "Bugolobi Village Apartments", address: "Bugolobi, Kampala", lat: 0.3200, lng: 32.6250 },
  { name: "Muyenga Luxury Apartments", address: "Muyenga, Kampala", lat: 0.2897, lng: 32.6147 },

  { name: "Kansanga Apartments", address: "Kansanga, Kampala", lat: 0.3000, lng: 32.6100 },
  { name: "Kiwatule Residences", address: "Kiwatule, Kampala", lat: 0.3600, lng: 32.6100 },
  { name: "Naalya Apartments", address: "Naalya, Kampala", lat: 0.3900, lng: 32.6480 },
  { name: "Kira Executive Apartments", address: "Kira, Wakiso", lat: 0.3960, lng: 32.6210 },
  { name: "Najjera Heights", address: "Najjera, Wakiso", lat: 0.4014, lng: 32.6053 },

  { name: "Luzira Apartments", address: "Luzira, Kampala", lat: 0.3000, lng: 32.6500 },
  { name: "Ntinda Complex Apartments", address: "Ntinda, Kampala", lat: 0.3572, lng: 32.6246 },
  { name: "Kisaasi Heights", address: "Kisaasi, Kampala", lat: 0.3500, lng: 32.5800 },
  { name: "Bunga Apartments", address: "Bunga, Kampala", lat: 0.2600, lng: 32.6200 },
  { name: "Seguku Apartments", address: "Seguku, Wakiso", lat: 0.2500, lng: 32.5500 },

  //Gas Station//

    { name: "Shell Ntinda", address: "Ntinda, Kampala", lat: 0.3570, lng: 32.6250 },
  { name: "Shell Lugogo", address: "Lugogo, Kampala", lat: 0.3380, lng: 32.6100 },
  { name: "Shell Bwaise", address: "Bwaise, Kampala", lat: 0.3600, lng: 32.5600 },
  { name: "Shell Kabalagala", address: "Kabalagala, Kampala", lat: 0.2980, lng: 32.6040 },
  { name: "Shell Munyonyo", address: "Munyonyo, Kampala", lat: 0.2400, lng: 32.6250 },

  { name: "Total Energies Nakawa", address: "Nakawa, Kampala", lat: 0.3300, lng: 32.6200 },
  { name: "Total Ntinda", address: "Ntinda, Kampala", lat: 0.3570, lng: 32.6240 },
  { name: "Total Kireka", address: "Kireka, Kampala", lat: 0.3470, lng: 32.6610 },
  { name: "Total Busega", address: "Busega, Kampala", lat: 0.3200, lng: 32.5300 },
  { name: "Total Entebbe Road", address: "Entebbe Road, Kampala", lat: 0.2800, lng: 32.5600 },

  { name: "Stabex Kololo", address: "Kololo, Kampala", lat: 0.3300, lng: 32.5900 },
  { name: "Stabex Muyenga", address: "Muyenga, Kampala", lat: 0.2890, lng: 32.6140 },
  { name: "Stabex Kisaasi", address: "Kisaasi, Kampala", lat: 0.3500, lng: 32.5800 },
  { name: "Hass Bunga", address: "Bunga, Kampala", lat: 0.2600, lng: 32.6200 },
  { name: "Hass Najjera", address: "Najjera, Wakiso", lat: 0.4014, lng: 32.6053 },

  //SUpermarkets//
  { name: "Shoprite Lugogo", address: "Lugogo Mall, Kampala", lat: 0.3380, lng: 32.6100 },
  { name: "Carrefour Lugogo", address: "Lugogo Mall, Kampala", lat: 0.3380, lng: 32.6100 },
  { name: "Capital Shoppers Nakawa", address: "Nakawa, Kampala", lat: 0.3300, lng: 32.6200 },
  { name: "Quality Supermarket Naalya", address: "Naalya, Kampala", lat: 0.3900, lng: 32.6480 },
  { name: "Mega Standard Supermarket", address: "Kisementi, Kampala", lat: 0.3360, lng: 32.5850 },

  { name: "Fraîne Supermarket", address: "Ntinda, Kampala", lat: 0.3570, lng: 32.6240 },
  { name: "Tuskys (former locations)", address: "Various Kampala", lat: 0.3200, lng: 32.5800 },
  { name: "Café Javas Market (CJ’s mini marts)", address: "Various Kampala", lat: 0.3200, lng: 32.5900 },
  { name: "Kenjoy Supermarket", address: "Bukoto, Kampala", lat: 0.3476, lng: 32.5940 },
  { name: "Best Buy Supermarket", address: "Ntinda, Kampala", lat: 0.3572, lng: 32.6246 },

  { name: "Fresh Cuts Supermarket", address: "Kololo, Kampala", lat: 0.3300, lng: 32.5900 },
  { name: "Kampala Boulevard Shops", address: "Kampala Road", lat: 0.3130, lng: 32.5810 },
  { name: "Oasis Mall Supermarket", address: "Nakasero, Kampala", lat: 0.3200, lng: 32.5800 },
  { name: "Arena Mall Supermarket", address: "Nsambya, Kampala", lat: 0.3000, lng: 32.5900 },
  { name: "Freedom City Supermarket", address: "Namasuba, Kampala", lat: 0.2800, lng: 32.5700 },

  { name: "Gangu", address: "Gangu, Kampala", lat: 0.2476, lng: 32.5638 },
{ name: "Kibiri", address: "Kibiri, Kampala", lat: 0.2563, lng: 32.5659 },
{ name: "Masajja", address: "Masajja, Kampala", lat: 0.2471, lng: 32.5467 },
{ name: "Kigo", address: "Kigo, Wakiso", lat: 0.2205, lng: 32.5632 },
{ name: "Kaz Beach", address: "KK Beach (Kaz Beach), Bunga", lat: 0.2608, lng: 32.6362 },

{ name: "Mirembe Villas", address: "Mirembe Villas, Buziga", lat: 0.2743, lng: 32.6271 },
{ name: "Serena Heights", address: "Serena Heights, Kigo", lat: 0.2217, lng: 32.5608 },
{ name: "Baki Close", address: "Baki Close, Buziga", lat: 0.2725, lng: 32.6248 },

{ name: "Bunga Market", address: "Bunga Market, Kampala", lat: 0.2644, lng: 32.6370 },
{ name: "Bunga Zebra", address: "Bunga Zebra, Ggaba Road", lat: 0.2636, lng: 32.6355 },

{ name: "Executive Apartment", address: "Executive Apartments, Buziga", lat: 0.2730, lng: 32.6259 },
{ name: "Kalungu", address: "Kalungu, Kampala (Makindye)", lat: 0.2811, lng: 32.5972 },

{ name: "Soya", address: "Soya, Kampala", lat: 0.2784, lng: 32.6035 },
{ name: "Water Pump", address: "Water Pump, Buziga", lat: 0.2702, lng: 32.6265 },

{ name: "Upper Buziga", address: "Upper Buziga, Kampala", lat: 0.2768, lng: 32.6283 },
{ name: "Upper Konge", address: "Upper Konge, Buziga", lat: 0.2739, lng: 32.6217 },
{ name: "Lower Konge", address: "Lower Konge, Buziga", lat: 0.2710, lng: 32.6198 },

{ name: "Mugendage", address: "Mugendage, Kampala", lat: 0.2694, lng: 32.6173 },
{ name: "Old Kaboja", address: "Old Kaboja, Buziga", lat: 0.2665, lng: 32.6185 },
{ name: "New Kaboja", address: "New Kaboja, Buziga", lat: 0.2681, lng: 32.6202 },

{ name: "Lukuli", address: "Lukuli, Kampala", lat: 0.2926, lng: 32.5993 },
{ name: "Kirudu Hospital", address: "Kirudu Hospital, Kampala", lat: 0.3040, lng: 32.5895 },

{ name: "Kabuma", address: "Kabuma, Kampala", lat: 0.2887, lng: 32.6030 },
{ name: "Lwasa", address: "Lwasa, Wakiso", lat: 0.2142, lng: 32.5136 },
{ name: "Boston", address: "Boston, Buziga/Konge area", lat: 0.2752, lng: 32.6234 }
];

