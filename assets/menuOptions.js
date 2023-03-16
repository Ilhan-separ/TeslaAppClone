import { FontAwesome } from "@expo/vector-icons";

export default [
  {
    name: "Controls",
    iconName: "camera-control",
    href: "/controls",
  },
  {
    name: "Climate",
    iconName: "fan",
    href: "/climate",
  },
  {
    name: "Location",
    icon: () => <FontAwesome name="location-arrow" size={30} color="gray" />,
    href: "/location",
  },
  {
    name: "Summon",
    iconName: "ship-wheel",
    href: "/summon",
  },
  {
    name: "Security",
    iconName: "shield-check",
    href: "/security",
  },
  {
    name: "Updates",
    iconName: "update",
    href: "/updates",
  },
  {
    name: "Pet mode",
    iconName: "dog",
    href: "/pet-mode",
  },
];
