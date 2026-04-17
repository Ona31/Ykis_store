import type { IconType } from "react-icons";
import { FaLaptop, FaTools, FaHeadset, FaTruck } from "react-icons/fa";

export type AboutType = {
  title: string;
  desc: string;
  icon: IconType;
};

export const carAbout = [
  {
    title: "Produits de qualité",
    desc: "Nous proposons des ordinateurs et accessoires fiables.",
    icon: FaLaptop
  },
  {
    title: "Maintenance rapide",
    desc: "Réparation rapide et efficace.",
    icon: FaTools
  },
  {
    title: "Support client",
    desc: "Nous sommes disponibles pour vous aider.",
    icon: FaHeadset
  },
  {
    title: "Livraison rapide",
    desc: "Livraison sécurisée et rapide.",
    icon: FaTruck
  },
];