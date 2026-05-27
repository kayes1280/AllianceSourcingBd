import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [

  layout("./mainroutes/mainroutes.tsx", [
    index("./routes/home.tsx"),
    route("about", "./component/AboutUs/aboutUs.tsx"),
    route("buying-house", "./component/buyingHouse/buying.tsx"),
    route("factory", "./component/factory&matchinary/homeFactory.tsx"),
    route("partners", "./component/globalParters/homeGlobal.tsx"),
  ])
] satisfies RouteConfig;
