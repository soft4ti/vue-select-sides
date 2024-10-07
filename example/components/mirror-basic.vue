<template>
  <div class="ex-lib">
    <vue-select-sides
      type="mirror"
      v-model="selected"
      :list="list"
    ></vue-select-sides>
    <div class="ex-result">
      <h4>Result</h4>
      <pre>{{ selected }}</pre>
    </div>
  </div>
</template>

<script>
import { createApp, defineComponent } from "vue";
import vueSelectSides from "../../src/index";
const app = createApp({});
app.use(vueSelectSides, { locale: "pt_BR" });

export default defineComponent({
  components: {
    vueSelectSides,
  },
  data() {
    return {
      selected: [],
      list: [
        {
          value: "afghanistan",
          label: "Afghanistan",
        },
        {
          value: "akrotiri",
          label: "Akrotiri",
        },
        {
          value: "albania",
          label: "Albania",
        },
        {
          value: "algeria",
          label: "Algeria",
        },
        {
          value: "american-samoa",
          label: "American Samoa",
        },
        {
          value: "andorra",
          label: "Andorra",
        },
        {
          value: "angola",
          label: "Angola",
        },
        {
          value: "anguilla",
          label: "Anguilla",
        },
        {
          value: "antarctica",
          label: "Antarctica",
        },
        {
          value: "antigua-and-barbuda",
          label: "Antigua and Barbuda",
        },
        {
          value: "argentina",
          label: "Argentina",
        },
        {
          value: "armenia",
          label: "Armenia",
        },
        {
          value: "aruba",
          label: "Aruba",
        },
        {
          value: "ashmore-and-cartier-islands",
          label: "Ashmore and Cartier Islands",
        },
        {
          value: "australia",
          label: "Australia",
        },
        {
          value: "austria",
          label: "Austria",
        },
        {
          value: "azerbaijan",
          label: "Azerbaijan",
        },
        {
          value: "bahamas-the",
          label: "Bahamas, The",
        },
        {
          value: "bahrain",
          label: "Bahrain",
        },
        {
          value: "bangladesh",
          label: "Bangladesh",
        },
        {
          value: "barbados",
          label: "Barbados",
        },
        {
          value: "bassas-da-india",
          label: "Bassas da India",
        },
        {
          value: "belarus",
          label: "Belarus",
        },
        {
          value: "belgium",
          label: "Belgium",
        },
        {
          value: "belize",
          label: "Belize",
        },
        {
          value: "benin",
          label: "Benin",
        },
        {
          value: "bermuda",
          label: "Bermuda",
        },
        {
          value: "bhutan",
          label: "Bhutan",
        },
        {
          value: "bolivia",
          label: "Bolivia",
        },
        {
          value: "bosnia-and-herzegovina",
          label: "Bosnia and Herzegovina",
        },
        {
          value: "botswana",
          label: "Botswana",
        },
        {
          value: "bouvet-island",
          label: "Bouvet Island",
        },
        {
          value: "brazil",
          label: "Brazil",
        },
        {
          value: "british-indian-ocean-territory",
          label: "British Indian Ocean Territory",
        },
        {
          value: "british-virgin-islands",
          label: "British Virgin Islands",
        },
        {
          value: "brunei",
          label: "Brunei",
        },
        {
          value: "bulgaria",
          label: "Bulgaria",
        },
        {
          value: "burkina-faso",
          label: "Burkina Faso",
        },
        {
          value: "burma",
          label: "Burma",
        },
        {
          value: "burundi",
          label: "Burundi",
        },
        {
          value: "cambodia",
          label: "Cambodia",
        },
        {
          value: "cameroon",
          label: "Cameroon",
        },
        {
          value: "canada",
          label: "Canada",
        },
        {
          value: "cape-verde",
          label: "Cape Verde",
        },
        {
          value: "cayman-islands",
          label: "Cayman Islands",
        },
        {
          value: "central-african-republic",
          label: "Central African Republic",
        },
        {
          value: "chad",
          label: "Chad",
        },
        {
          value: "chile",
          label: "Chile",
        },
        {
          value: "china",
          label: "China",
        },
        {
          value: "christmas-island",
          label: "Christmas Island",
        },
        {
          value: "clipperton-island",
          label: "Clipperton Island",
        },
        {
          value: "cocos-(keeling)-islands",
          label: "Cocos (Keeling) Islands",
        },
        {
          value: "colombia",
          label: "Colombia",
        },
        {
          value: "comoros",
          label: "Comoros",
        },
        {
          value: "congo-democratic-republic-of-the",
          label: "Congo, Democratic Republic of the",
        },
        {
          value: "congo-republic-of-the",
          label: "Congo, Republic of the",
        },
        {
          value: "cook-islands",
          label: "Cook Islands",
        },
        {
          value: "coral-sea-islands",
          label: "Coral Sea Islands",
        },
        {
          value: "costa-rica",
          label: "Costa Rica",
        },
        {
          value: "cote-d'ivoire",
          label: "Cote d'Ivoire",
        },
        {
          value: "croatia",
          label: "Croatia",
        },
        {
          value: "cuba",
          label: "Cuba",
        },
        {
          value: "cyprus",
          label: "Cyprus",
        },
        {
          value: "czech-republic",
          label: "Czech Republic",
        },
        {
          value: "denmark",
          label: "Denmark",
        },
        {
          value: "dhekelia",
          label: "Dhekelia",
        },
        {
          value: "djibouti",
          label: "Djibouti",
        },
        {
          value: "dominica",
          label: "Dominica",
        },
        {
          value: "dominican-republic",
          label: "Dominican Republic",
        },
        {
          value: "ecuador",
          label: "Ecuador",
        },
        {
          value: "egypt",
          label: "Egypt",
        },
        {
          value: "el-salvador",
          label: "El Salvador",
        },
        {
          value: "equatorial-guinea",
          label: "Equatorial Guinea",
        },
        {
          value: "eritrea",
          label: "Eritrea",
        },
        {
          value: "estonia",
          label: "Estonia",
        },
        {
          value: "ethiopia",
          label: "Ethiopia",
        },
        {
          value: "europa-island",
          label: "Europa Island",
        },
        {
          value: "falkland-islands-(islas-malvinas)",
          label: "Falkland Islands (Islas Malvinas)",
        },
        {
          value: "faroe-islands",
          label: "Faroe Islands",
        },
        {
          value: "fiji",
          label: "Fiji",
        },
        {
          value: "finland",
          label: "Finland",
        },
        {
          value: "france",
          label: "France",
        },
        {
          value: "french-guiana",
          label: "French Guiana",
        },
        {
          value: "french-polynesia",
          label: "French Polynesia",
        },
        {
          value: "french-southern-and-antarctic-lands",
          label: "French Southern and Antarctic Lands",
        },
        {
          value: "gabon",
          label: "Gabon",
        },
        {
          value: "gambia-the",
          label: "Gambia, The",
        },
        {
          value: "gaza-strip",
          label: "Gaza Strip",
        },
        {
          value: "georgia",
          label: "Georgia",
        },
        {
          value: "germany",
          label: "Germany",
        },
        {
          value: "ghana",
          label: "Ghana",
        },
        {
          value: "gibraltar",
          label: "Gibraltar",
        },
        {
          value: "glorioso-islands",
          label: "Glorioso Islands",
        },
        {
          value: "greece",
          label: "Greece",
        },
        {
          value: "greenland",
          label: "Greenland",
        },
        {
          value: "grenada",
          label: "Grenada",
        },
        {
          value: "guadeloupe",
          label: "Guadeloupe",
        },
        {
          value: "guam",
          label: "Guam",
        },
        {
          value: "guatemala",
          label: "Guatemala",
        },
        {
          value: "guernsey",
          label: "Guernsey",
        },
        {
          value: "guinea",
          label: "Guinea",
        },
        {
          value: "guinea-bissau",
          label: "Guinea-Bissau",
        },
        {
          value: "guyana",
          label: "Guyana",
        },
        {
          value: "haiti",
          label: "Haiti",
        },
        {
          value: "heard-island-and-mcdonald-islands",
          label: "Heard Island and McDonald Islands",
        },
        {
          value: "holy-see-(vatican-city)",
          label: "Holy See (Vatican City)",
        },
        {
          value: "honduras",
          label: "Honduras",
        },
        {
          value: "hong-kong",
          label: "Hong Kong",
        },
        {
          value: "hungary",
          label: "Hungary",
        },
        {
          value: "iceland",
          label: "Iceland",
        },
        {
          value: "india",
          label: "India",
        },
        {
          value: "indonesia",
          label: "Indonesia",
        },
        {
          value: "iran",
          label: "Iran",
        },
        {
          value: "iraq",
          label: "Iraq",
        },
        {
          value: "ireland",
          label: "Ireland",
        },
        {
          value: "isle-of-man",
          label: "Isle of Man",
        },
        {
          value: "israel",
          label: "Israel",
        },
        {
          value: "italy",
          label: "Italy",
        },
        {
          value: "jamaica",
          label: "Jamaica",
        },
        {
          value: "jan-mayen",
          label: "Jan Mayen",
        },
        {
          value: "japan",
          label: "Japan",
        },
        {
          value: "jersey",
          label: "Jersey",
        },
        {
          value: "jordan",
          label: "Jordan",
        },
        {
          value: "juan-de-nova-island",
          label: "Juan de Nova Island",
        },
        {
          value: "kazakhstan",
          label: "Kazakhstan",
        },
        {
          value: "kenya",
          label: "Kenya",
        },
        {
          value: "kiribati",
          label: "Kiribati",
        },
        {
          value: "korea-north",
          label: "Korea, North",
        },
        {
          value: "korea-south",
          label: "Korea, South",
        },
        {
          value: "kuwait",
          label: "Kuwait",
        },
        {
          value: "kyrgyzstan",
          label: "Kyrgyzstan",
        },
        {
          value: "laos",
          label: "Laos",
        },
        {
          value: "latvia",
          label: "Latvia",
        },
        {
          value: "lebanon",
          label: "Lebanon",
        },
        {
          value: "lesotho",
          label: "Lesotho",
        },
        {
          value: "liberia",
          label: "Liberia",
        },
        {
          value: "libya",
          label: "Libya",
        },
        {
          value: "liechtenstein",
          label: "Liechtenstein",
        },
        {
          value: "lithuania",
          label: "Lithuania",
        },
        {
          value: "luxembourg",
          label: "Luxembourg",
        },
        {
          value: "macau",
          label: "Macau",
        },
        {
          value: "macedonia",
          label: "Macedonia",
        },
        {
          value: "madagascar",
          label: "Madagascar",
        },
        {
          value: "malawi",
          label: "Malawi",
        },
        {
          value: "malaysia",
          label: "Malaysia",
        },
        {
          value: "maldives",
          label: "Maldives",
        },
        {
          value: "mali",
          label: "Mali",
        },
        {
          value: "malta",
          label: "Malta",
        },
        {
          value: "marshall-islands",
          label: "Marshall Islands",
        },
        {
          value: "martinique",
          label: "Martinique",
        },
        {
          value: "mauritania",
          label: "Mauritania",
        },
        {
          value: "mauritius",
          label: "Mauritius",
        },
        {
          value: "mayotte",
          label: "Mayotte",
        },
        {
          value: "mexico",
          label: "Mexico",
        },
        {
          value: "micronesia-federated-states-of",
          label: "Micronesia, Federated States of",
        },
        {
          value: "moldova",
          label: "Moldova",
        },
        {
          value: "monaco",
          label: "Monaco",
        },
        {
          value: "mongolia",
          label: "Mongolia",
        },
        {
          value: "montserrat",
          label: "Montserrat",
        },
        {
          value: "morocco",
          label: "Morocco",
        },
        {
          value: "mozambique",
          label: "Mozambique",
        },
        {
          value: "namibia",
          label: "Namibia",
        },
        {
          value: "nauru",
          label: "Nauru",
        },
        {
          value: "navassa-island",
          label: "Navassa Island",
        },
        {
          value: "nepal",
          label: "Nepal",
        },
        {
          value: "netherlands",
          label: "Netherlands",
        },
        {
          value: "netherlands-antilles",
          label: "Netherlands Antilles",
        },
        {
          value: "new-caledonia",
          label: "New Caledonia",
        },
        {
          value: "new-zealand",
          label: "New Zealand",
        },
        {
          value: "nicaragua",
          label: "Nicaragua",
        },
        {
          value: "niger",
          label: "Niger",
        },
        {
          value: "nigeria",
          label: "Nigeria",
        },
        {
          value: "niue",
          label: "Niue",
        },
        {
          value: "norfolk-island",
          label: "Norfolk Island",
        },
        {
          value: "northern-mariana-islands",
          label: "Northern Mariana Islands",
        },
        {
          value: "norway",
          label: "Norway",
        },
        {
          value: "oman",
          label: "Oman",
        },
        {
          value: "pakistan",
          label: "Pakistan",
        },
        {
          value: "palau",
          label: "Palau",
        },
        {
          value: "panama",
          label: "Panama",
        },
        {
          value: "papua-new-guinea",
          label: "Papua New Guinea",
        },
        {
          value: "paracel-islands",
          label: "Paracel Islands",
        },
        {
          value: "paraguay",
          label: "Paraguay",
        },
        {
          value: "peru",
          label: "Peru",
        },
        {
          value: "philippines",
          label: "Philippines",
        },
        {
          value: "pitcairn-islands",
          label: "Pitcairn Islands",
        },
        {
          value: "poland",
          label: "Poland",
        },
        {
          value: "portugal",
          label: "Portugal",
        },
        {
          value: "puerto-rico",
          label: "Puerto Rico",
        },
        {
          value: "qatar",
          label: "Qatar",
        },
        {
          value: "reunion",
          label: "Reunion",
        },
        {
          value: "romania",
          label: "Romania",
        },
        {
          value: "russia",
          label: "Russia",
        },
        {
          value: "rwanda",
          label: "Rwanda",
        },
        {
          value: "saint-helena",
          label: "Saint Helena",
        },
        {
          value: "saint-kitts-and-nevis",
          label: "Saint Kitts and Nevis",
        },
        {
          value: "saint-lucia",
          label: "Saint Lucia",
        },
        {
          value: "saint-pierre-and-miquelon",
          label: "Saint Pierre and Miquelon",
        },
        {
          value: "saint-vincent-and-the-grenadines",
          label: "Saint Vincent and the Grenadines",
        },
        {
          value: "samoa",
          label: "Samoa",
        },
        {
          value: "san-marino",
          label: "San Marino",
        },
        {
          value: "sao-tome-and-principe",
          label: "Sao Tome and Principe",
        },
        {
          value: "saudi-arabia",
          label: "Saudi Arabia",
        },
        {
          value: "senegal",
          label: "Senegal",
        },
        {
          value: "serbia-and-montenegro",
          label: "Serbia and Montenegro",
        },
        {
          value: "seychelles",
          label: "Seychelles",
        },
        {
          value: "sierra-leone",
          label: "Sierra Leone",
        },
        {
          value: "singapore",
          label: "Singapore",
        },
        {
          value: "slovakia",
          label: "Slovakia",
        },
        {
          value: "slovenia",
          label: "Slovenia",
        },
        {
          value: "solomon-islands",
          label: "Solomon Islands",
        },
        {
          value: "somalia",
          label: "Somalia",
        },
        {
          value: "south-africa",
          label: "South Africa",
        },
        {
          value: "south-georgia-and-the-south",
          label: "South Georgia and the South Sandwich Islands",
        },
        {
          value: "spain",
          label: "Spain",
        },
        {
          value: "spratly-islands",
          label: "Spratly Islands",
        },
        {
          value: "sri-lanka",
          label: "Sri Lanka",
        },
        {
          value: "sudan",
          label: "Sudan",
        },
        {
          value: "suriname",
          label: "Suriname",
        },
        {
          value: "svalbard",
          label: "Svalbard",
        },
        {
          value: "swaziland",
          label: "Swaziland",
        },
        {
          value: "sweden",
          label: "Sweden",
        },
        {
          value: "switzerland",
          label: "Switzerland",
        },
        {
          value: "syria",
          label: "Syria",
        },
        {
          value: "taiwan",
          label: "Taiwan",
        },
        {
          value: "tajikistan",
          label: "Tajikistan",
        },
        {
          value: "tanzania",
          label: "Tanzania",
        },
        {
          value: "thailand",
          label: "Thailand",
        },
        {
          value: "timor-leste",
          label: "Timor-Leste",
        },
        {
          value: "togo",
          label: "Togo",
        },
        {
          value: "tokelau",
          label: "Tokelau",
        },
        {
          value: "tonga",
          label: "Tonga",
        },
        {
          value: "trinidad-and-tobago",
          label: "Trinidad and Tobago",
        },
        {
          value: "tromelin-island",
          label: "Tromelin Island",
        },
        {
          value: "tunisia",
          label: "Tunisia",
        },
        {
          value: "turkey",
          label: "Turkey",
        },
        {
          value: "turkmenistan",
          label: "Turkmenistan",
        },
        {
          value: "turks-and-caicos-islands",
          label: "Turks and Caicos Islands",
        },
        {
          value: "tuvalu",
          label: "Tuvalu",
        },
        {
          value: "uganda",
          label: "Uganda",
        },
        {
          value: "ukraine",
          label: "Ukraine",
        },
        {
          value: "united-arab-emirates",
          label: "United Arab Emirates",
        },
        {
          value: "united-kingdom",
          label: "United Kingdom",
        },
        {
          value: "united-states",
          label: "United States",
        },
        {
          value: "uruguay",
          label: "Uruguay",
        },
        {
          value: "uzbekistan",
          label: "Uzbekistan",
        },
        {
          value: "vanuatu",
          label: "Vanuatu",
        },
        {
          value: "venezuela",
          label: "Venezuela",
        },
        {
          value: "vietnam",
          label: "Vietnam",
        },
        {
          value: "virgin-islands",
          label: "Virgin Islands",
        },
        {
          value: "wake-island",
          label: "Wake Island",
        },
        {
          value: "wallis-and-futuna",
          label: "Wallis and Futuna",
        },
        {
          value: "west-bank",
          label: "West Bank",
        },
        {
          value: "western-sahara",
          label: "Western Sahara",
        },
        {
          value: "yemen",
          label: "Yemen",
        },
        {
          value: "zambia",
          label: "Zambia",
        },
        {
          value: "zimbabwe",
          label: "Zimbabwe",
        },
      ],
    };
  },
});
</script>
