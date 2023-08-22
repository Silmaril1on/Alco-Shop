import argentina from "../../assets/argentina.png";
import australia from "../../assets/australia.png";
import chile from "../../assets/chile.png";
import china from "../../assets/china.png";
import france from "../../assets/france.png";
import germany from "../../assets/germany.png";
import ghana from "../../assets/ghana.png";
import india from "../../assets/india.png";
import italy from "../../assets/italy.png";
import malaysia from "../../assets/malaysia.png";
import mexico from "../../assets/mexico.png";
import morocco from "../../assets/morocco.png";
import nigeria from "../../assets/nigeria.png";
import poland from "../../assets/poland.png";
import singapore from "../../assets/singapore.png";
import southafrica from "../../assets/south-africa.png";
import spain from "../../assets/spain.png";
import uruguay from "../../assets/uruguay.png";
import unitedstates from "../../assets/united-states.png";
import unitedkingdom from "../../assets/united-kingdom.png";
import brasil from "../../assets/brasil.png";

const continentsData = [
  {
    id: 0,
    name: "africa",
    country: [
      { id: 0, name: "ghana", flag: ghana },
      { id: 1, name: "nigeria", flag: nigeria },
      { id: 2, name: "maroc", flag: morocco },
      { id: 3, name: "south africa", flag: southafrica },
    ],
  },
  {
    id: 1,
    name: "americas",
    country: [
      { id: 0, name: "argentina", flag: argentina },
      { id: 1, name: "brasil", flag: brasil },
      { id: 2, name: "chile", flag: chile },
      { id: 3, name: "US", flag: unitedstates },
      { id: 4, name: "mexico", flag: mexico },
      { id: 5, name: "uruguay", flag: uruguay },
    ],
  },
  {
    id: 2,
    name: "europe",
    country: [
      { id: 0, name: "polska", flag: poland },
      { id: 1, name: "espana", flag: spain },
      { id: 2, name: "UK", flag: unitedkingdom },
      { id: 3, name: "france", flag: france },
      { id: 4, name: "deutschland", flag: germany },
      { id: 5, name: "italy", flag: italy },
    ],
  },
  {
    id: 3,
    name: "asia pacific",
    country: [
      { id: 0, name: "australia", flag: australia },
      { id: 1, name: "malaysia", flag: malaysia },
      { id: 2, name: "singapore", flag: singapore },
      { id: 3, name: "india", flag: india },
      { id: 4, name: "china", flag: china },
    ],
  },
];

export default continentsData;
