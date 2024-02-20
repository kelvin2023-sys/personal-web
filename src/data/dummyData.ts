// Import assets social media
import instagram from "../assets/icons/social-media/instagram.svg";
import linkedin from "../assets/icons/social-media/linkedin.webp";
import github from "../assets/icons/social-media/github.webp";
import email from "../assets/icons/social-media/email.webp";

// Import assets projects and skills
import villageWeb from "../assets/images/village-web.webp";
import hmtiUntad from "../assets/images/hmti-untad.webp";
import hrev from "../assets/images/hrev.webp";
import snResidence from "../assets/images/sn-residence.webp";

import logoVillageWebsite from "../assets/icons/logo-village-website.png";
import logoHmtiUntad from "../assets/icons/logo-hmti-untad.png";
import logoHrev from "../assets/icons/logo-hrev.png";
import logoSnResidence from "../assets/icons/logo-sn-residence.png";

import laravel from "../assets/icons/tech-stack/laravel-2.svg";
import react from "../assets/icons/tech-stack/react.svg";
import typescript from "../assets/icons/tech-stack/typescript.svg";
import javascript from "../assets/icons/tech-stack/javascript.svg";
import php from "../assets/icons/tech-stack/php-logo-only-letter-2.svg";
import html from "../assets/icons/tech-stack/html-1.svg";
import wordpress from "../assets/icons/tech-stack/wordpress-icon-1.svg";
import tailwind from "../assets/icons/tech-stack/tailwind.svg";
import boostraps from "../assets/icons/tech-stack/bootstrap-4.svg";
import css from "../assets/icons/tech-stack/css-3.svg";
import ci from "../assets/icons/tech-stack/codeigniter-2.svg";
// import firebase from "../assets/icons/tech-stack/firebase.svg";
import vite from "../assets/icons/tech-stack/vite.svg";

// import assets experience
import eduqat from "../assets/icons/company-logo/eduqat.svg";
import seluma from "../assets/images/Seluma.png";
import soon from "../assets/images/soon.png";
import kodingna from "../assets/icons/company-logo/kodingna.svg";
import bangkit from "../assets/icons/company-logo/bangkit.svg";

import pattern1 from "../assets/images/patterns/pattern1.svg";
import pattern2 from "../assets/images/patterns/pattern2.svg";
import pattern3 from "../assets/images/patterns/pattern3.svg";
import pattern4 from "../assets/images/patterns/pattern4.svg";
import { IconH1 } from "@tabler/icons-react";

export const dataNavbar: Navbar[] = [
  {
    id: 0,
    navigate: "Profile",
    navigate_url: "profile",
    offset: -100,
  },
  {
    id: 1,
    navigate: "Projects",
    navigate_url: "projects",
    offset: -105,
  },
  {
    id: 2,
    navigate: "Experience",
    navigate_url: "experience",
    offset: -50,
  },
  {
    id: 3,
    navigate: "Contact",
    navigate_url: "contact",
    offset: 0,
  },
];

export const dataLogoSocialMedia: LogoSocialMedia[] = [
  {
    id: 0,
    logo: linkedin,
    navigate: "https://linkedin.com/in/kelvinadisaputra",
  },
  {
    id: 1,
    logo: instagram,
    navigate: "https://instagram.com/@kelvinadisaputra_",
  },
  {
    id: 2,
    logo: github,
    navigate: "https://github.com/kelvin2023-sys",
  },
  {
    id: 3,
    logo: email,
    navigate: "mailto:kelvinadisaputra2018@gmail.com",
  },
];

export const dataProjectss: Projects[] = [
  // {
  //   id: 0,
  //   img_url: villageWeb,
  //   logo: logoVillageWebsite,
  //   type: "App Platform •",
  //   tech_stack_logo: [react, vite, tailwind],
  //   navigate_url: "https://desa.kembalikedesa.id/?code=720701",
  // },
  // {
  //   id: 1,
  //   img_url: hrev,
  //   logo: logoHrev,
  //   type: "Company Profile •",
  //   tech_stack_logo: [react, typescript, vite, tailwind],
  //   navigate_url: "https://halohrev.com",
  // },
  // {
  //   id: 2,
  //   img_url: hmtiUntad,
  //   logo: logoHmtiUntad,
  //   type: "Landing Page •",
  //   tech_stack_logo: [react, typescript, vite, tailwind],
  //   navigate_url: "https://hmtiuntad.vercel.app/",
  // },
  // {
  //   id: 3,
  //   img_url: snResidence,
  //   logo: logoSnResidence,
  //   type: "Web App •",
  //   tech_stack_logo: [react, tailwind],
  //   navigate_url: "https://sn-residence-dev.vercel.app",
  // },
];

export const dataSkills: string[] = [
  laravel,
  react,
  typescript,
  javascript,
  php,
  html,
  wordpress,
  tailwind,
  boostraps,
  css,
  ci,
  vite,
];

export const dataExperience: Experience[] = [
  {
    id: 0,
    logo_url: seluma,
    pattern: pattern1,
    name: "Diskominfo",
    description: "@diskominfoseluma",
    date: "juni 2020 - Present",
    position: "Frontend Engineer",
    responsibilites: [
      "Membangun website dengan menggunakan elementor adalah salh satu awal dalam terjun di dunia frontend developper",
      "Pada tahun kedua mulai tertarik pada coding dan pengenalan pada Laravel PHP",
      "Membangun website dengan Laravel cukup Menantang dan membutuhkan waktu yang lama untuk belajar Laravel",
    ],
    first_color: "#0C3342",
    second_color: "#054C5B",
    desc_color: "#B6EDF8",
    position_color: "#002D3E",
    border_color: "#329CA9",
  },
  {
    id: 1,
    logo_url: soon,
    pattern: pattern2,
    name: "Coming Soon",
    description: "@coming soon",
    date: "No date - ",
    position: "No Job",
    responsibilites: ["Coming soon well be aright"],
    first_color: "#01271C",
    second_color: "#08573E",
    desc_color: "#C6F8B1",
    position_color: "#033424",
    border_color: "#10AA7A",
  },
];
