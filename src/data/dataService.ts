import type { IconType } from "react-icons";
import { FaShoppingCart, FaTools, FaHandsHelping, FaCheckCircle } from "react-icons/fa";
export type ServiceType = {
  title: string;
  desc: string;
  icon: IconType;
  points: {
    text: string;
    icon: IconType;
  }[];
};

export const servicesData = [
  {
    title: "Vente de produits informatiques",
    desc: "Nous proposons des ordinateurs, accessoires et bientôt des téléphones de qualité, adaptés à tous les besoins.",
    icon: FaShoppingCart,
    points: [
      { text: "Produits fiables et testés", icon: FaCheckCircle },
      { text: "Prix accessibles pour tous", icon: FaCheckCircle },
      { text: "Large choix d’accessoires", icon: FaCheckCircle },
      { text: "Disponibilité rapide", icon: FaCheckCircle },
    ],
  },
  {
    title: "Maintenance & Installation",
    desc: "Nous assurons la réparation, l’installation et l’optimisation de vos appareils pour garantir performance et sécurité.",
    icon: FaTools,
    points: [
      { text: "Réparation rapide de PC", icon: FaCheckCircle },
      { text: "Installation Windows et logiciels", icon: FaCheckCircle },
      { text: "Optimisation des performances", icon: FaCheckCircle },
      { text: "Diagnostic complet des pannes", icon: FaCheckCircle },
    ],
  },
  {
    title: "Assistance & Accompagnement",
    desc: "Nous vous accompagnons dans le choix et l’utilisation de vos équipements avec un support personnalisé.",
    icon: FaHandsHelping,
    points: [
      { text: "Conseils d’achat adaptés", icon: FaCheckCircle },
      { text: "Support technique rapide", icon: FaCheckCircle },
      { text: "Accompagnement personnalisé", icon: FaCheckCircle },
      { text: "Aide après-vente", icon: FaCheckCircle },
    ],
  },
];