import { StaticImageData } from "next/image";
import chicagoResume from '../../public/templates/images/Chicago-Resume-Template-Dark-Blue-Hub.png'
import classicResume from '../../public/templates/images/Classic-Resume-Template-Brick-Red-Hub.png'
import empireStateResume from '../../public/templates/images/Empire-State-Resume-Template-Turquoise-Hub.png'
import executiveResume from '../../public/templates/images/Executive-Resume-Template-Hub.png'
import professionalResume from '../../public/templates/images/Professional-Minimalist-Resume-Template-Blue-Hub.png'
import googleDocsResume from '../../public/templates/images/Swiss-Google-Docs-Resume-Template-Hub.png'
import windsorResume from '../../public/templates/images/Windsor-Creative-Resume-Template-Blue-Hub.png'
import fashionableResume from '../../public/templates/images/fashionable-creative-resume-template-green-hub.png'
import funPhotoResume from '../../public/templates/images/fun-photo-resume-template-hub.png'
import functionalResume from '../../public/templates/images/functional-resume-template.png'
import generalResume from '../../public/templates/images/general-resume-template.png'
import itResume from '../../public/templates/images/it-resume-template.png'
import minimalistResume from '../../public/templates/images/minimalist-resume-template.png'
import techColorfulResume from '../../public/templates/images/tech-colorful-resume-template-blue-yellow-hub.png'
import twoColoumnResume from '../../public/templates/images/two-column-resume-template-violet-blue-hub.png'


export type templates_cards = {
  imgSrc: string | StaticImageData;
  name: string;
  description: string;
};

export const CREATIVE_TEMPLATES: templates_cards[] = [
  {
    imgSrc:
chicagoResume,
    name: "copenhagen",
    description:
      "Fluid and energetic, this template makes a statement with creativity and style.",
  },
  {
    imgSrc:
classicResume,
    name: "copenhagen",
    description:
      "Fluid and energetic, this template makes a statement with creativity and style.",
  },
  {
    imgSrc:
empireStateResume,
    name: "copenhagen",
    description:
      "Fluid and energetic, this template makes a statement with creativity and style.",
  },
  {
    imgSrc:
executiveResume,
    name: "copenhagen",
    description:
      "Fluid and energetic, this template makes a statement with creativity and style.",
  },
  {
    imgSrc:
professionalResume,
    name: "copenhagen",
    description:
      "Fluid and energetic, this template makes a statement with creativity and style.",
  },
];
export const MODERN_TEMPLATES: templates_cards[] = [
  {
    imgSrc:
googleDocsResume,
    name: "copenhagen",
    description:
      "Fluid and energetic, this template makes a statement with creativity and style.",
  },
  {
    imgSrc:
windsorResume,
    name: "copenhagen",
    description:
      "Fluid and energetic, this template makes a statement with creativity and style.",
  },
  {
    imgSrc:
fashionableResume,
    name: "copenhagen",
    description:
      "Fluid and energetic, this template makes a statement with creativity and style.",
  },
  {
    imgSrc:
funPhotoResume,
    name: "copenhagen",
    description:
      "Fluid and energetic, this template makes a statement with creativity and style.",
  },
  {
    imgSrc:functionalResume,
    name: "copenhagen",
    description:
      "Fluid and energetic, this template makes a statement with creativity and style.",
  },
];
export const PICTURE_TEMPLATES: templates_cards[] = [
  {
    imgSrc:
generalResume,
    name: "copenhagen",
    description:
      "Fluid and energetic, this template makes a statement with creativity and style.",
  },
  {
    imgSrc:
itResume,
    name: "copenhagen",
    description:
      "Fluid and energetic, this template makes a statement with creativity and style.",
  },
  {
    imgSrc:
minimalistResume,
    name: "copenhagen",
    description:
      "Fluid and energetic, this template makes a statement with creativity and style.",
  },
  {
    imgSrc:
techColorfulResume,
    name: "copenhagen",
    description:
      "Fluid and energetic, this template makes a statement with creativity and style.",
  },
  {
    imgSrc:
twoColoumnResume,
    name: "copenhagen",
    description:
      "Fluid and energetic, this template makes a statement with creativity and style.",
  },
];
export const PROFESSIONAL_TEMPLATES: templates_cards[] = [
  {
    imgSrc:
chicagoResume, 
    name: "copenhagen",
    description:
      "Fluid and energetic, this template makes a statement with creativity and style.",
  },
  {
    imgSrc:
minimalistResume,
    name: "copenhagen",
    description:
      "Fluid and energetic, this template makes a statement with creativity and style.",
  },
  {
    imgSrc:
techColorfulResume,
    name: "copenhagen",
    description:
      "Fluid and energetic, this template makes a statement with creativity and style.",
  },
  {
    imgSrc:
twoColoumnResume,
    name: "copenhagen",
    description:
      "Fluid and energetic, this template makes a statement with creativity and style.",
  },
  {
    imgSrc:
googleDocsResume,
    name: "copenhagen",
    description:
      "Fluid and energetic, this template makes a statement with creativity and style.",
  },
];
export const SIMPLE_TEMPLATES: templates_cards[] = [
  {
    imgSrc:
windsorResume,
    name: "copenhagen",
    description:
      "Fluid and energetic, this template makes a statement with creativity and style.",
  },
  {
    imgSrc:
classicResume,
    name: "copenhagen",
    description:
      "Fluid and energetic, this template makes a statement with creativity and style.",
  },
  {
    imgSrc:
executiveResume,
    name: "copenhagen",
    description:
      "Fluid and energetic, this template makes a statement with creativity and style.",
  },
  {
    
    imgSrc:
itResume,
    name: "copenhagen",
    description:
      "Fluid and energetic, this template makes a statement with creativity and style.",
  },
  {
    imgSrc:
funPhotoResume,
    name: "copenhagen",
    description:
      "Fluid and energetic, this template makes a statement with creativity and style.",
  },
];


export const TEMPLATESCARDS: {
  "professional": templates_cards[],
  "modern": templates_cards[],
  "creative": templates_cards[],
  "simple": templates_cards[],
  "picture": templates_cards[],
  "all templates": templates_cards[],
} = {
  "professional": PROFESSIONAL_TEMPLATES,
  "modern" : MODERN_TEMPLATES,
  "creative" : CREATIVE_TEMPLATES,
  "simple" : SIMPLE_TEMPLATES,
  "picture": PICTURE_TEMPLATES,
  "all templates": PROFESSIONAL_TEMPLATES.concat(MODERN_TEMPLATES,CREATIVE_TEMPLATES,SIMPLE_TEMPLATES,PICTURE_TEMPLATES)
}