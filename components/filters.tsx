import React from "react";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import Link from "next/link";
import { FilterParams } from "@/lib/types";

const formFilter = {
  name: "Forma",
  code: "form",
  global_name: "Form",
  display_mode: "0",
  type: "multiselect",
  position: "16",
  options: [
    {
      name: "kapsulovaný",
      slug: "kapsulovany",
      value: "4846",
      count: 427,
    },
    {
      name: "práškový",
      slug: "praskovy",
      value: "4849",
      count: 322,
    },
    {
      name: "tabletkovaný",
      slug: "tabletkovany",
      value: "4852",
      count: 110,
    },
    {
      name: "tekutý",
      slug: "tekuty",
      value: "4855",
      count: 54,
    },
    {
      name: "potraviny",
      slug: "potraviny-6121",
      value: "6121",
      count: 14,
    },
    {
      name: "šumivé tablety",
      slug: "sumive-tablety",
      value: "166009",
      count: 8,
    },
    {
      name: "cmúľacie tablety",
      slug: "cmulacie-tablety",
      value: "166012",
      count: 7,
    },
  ],
};

const manufacturerFilter = {
  name: "Značka",
  code: "manufacturer",
  global_name: "Manufacturer",
  display_mode: "0",
  type: "multiselect",
  position: "2",
  options: [
    {
      name: "GymBeam",
      slug: "gymbeam",
      value: "166532",
      count: 398,
    },
    {
      name: "NOW Foods",
      slug: "now-foods-166674",
      value: "166674",
      count: 115,
    },
    {
      name: "OstroVit",
      slug: "ostrovit",
      value: "166618",
      count: 97,
    },
    {
      name: "ActivLab",
      slug: "activlab",
      value: "166537",
      count: 44,
    },
    {
      name: "Applied Nutrition",
      slug: "applied-nutrition",
      value: "166587",
      count: 25,
    },
    {
      name: "The Protein Works",
      slug: "the-protein-works",
      value: "166632",
      count: 25,
    },
    {
      name: "Universal Nutrition",
      slug: "universal-nutrition",
      value: "166528",
      count: 24,
    },
    {
      name: "Nutrend",
      slug: "nutrend",
      value: "166524",
      count: 23,
    },
    {
      name: "BeastPink",
      slug: "beastpink",
      value: "166591",
      count: 22,
    },
    {
      name: "Amix",
      slug: "amix",
      value: "166506",
      count: 16,
    },
    {
      name: "Optimum Nutrition",
      slug: "optimum-nutrition",
      value: "166530",
      count: 16,
    },
    {
      name: "VanaVita",
      slug: "vanavita",
      value: "166590",
      count: 15,
    },
    {
      name: "Megabol",
      slug: "megabol",
      value: "166512",
      count: 14,
    },
    {
      name: "Stacker2",
      slug: "stacker2",
      value: "166622",
      count: 14,
    },
    {
      name: "Reflex Nutrition",
      slug: "reflex-nutrition",
      value: "166697",
      count: 14,
    },
    {
      name: "Goldfield",
      slug: "goldfield",
      value: "166519",
      count: 12,
    },
    {
      name: "Mammut Nutrition",
      slug: "mammut-nutrition",
      value: "166753",
      count: 12,
    },
    {
      name: "VemoHerb",
      slug: "vemoherb",
      value: "166592",
      count: 11,
    },
    {
      name: "Purasana",
      slug: "purasana",
      value: "166724",
      count: 10,
    },
    {
      name: "PVL",
      slug: "pvl",
      value: "166522",
      count: 9,
    },
    {
      name: "ProSupps",
      slug: "prosupps",
      value: "166565",
      count: 9,
    },
    {
      name: "BSN",
      slug: "bsn",
      value: "166533",
      count: 8,
    },
    {
      name: "MuscleTech",
      slug: "muscletech",
      value: "166540",
      count: 5,
    },
    {
      name: "Nutrex",
      slug: "nutrex",
      value: "166507",
      count: 4,
    },
    {
      name: "Cellucor",
      slug: "cellucor",
      value: "166550",
      count: 4,
    },
    {
      name: "Mars",
      slug: "mars-166613",
      value: "166613",
      count: 4,
    },
    {
      name: "Wolfberry",
      slug: "wolfberry",
      value: "166642",
      count: 4,
    },
    {
      name: "Science in Sport",
      slug: "science-in-sport",
      value: "166804",
      count: 4,
    },
    {
      name: "Möller's",
      slug: "moller-s",
      value: "167620",
      count: 4,
    },
    {
      name: "JNX",
      slug: "jnx",
      value: "166555",
      count: 3,
    },
    {
      name: "PRO!BRANDS",
      slug: "pro-brands",
      value: "166663",
      count: 3,
    },
    {
      name: "Ghost",
      slug: "ghost",
      value: "166665",
      count: 3,
    },
    {
      name: "XBEAM",
      slug: "xbeam",
      value: "167266",
      count: 3,
    },
    {
      name: "Diet Food",
      slug: "diet-food",
      value: "166557",
      count: 2,
    },
    {
      name: "NOCCO",
      slug: "nocco",
      value: "166628",
      count: 2,
    },
    {
      name: "Go On Nutrition",
      slug: "go-on-nutrition",
      value: "166748",
      count: 2,
    },
    {
      name: "X-Gamer",
      slug: "x-gamer",
      value: "166752",
      count: 2,
    },
    {
      name: "G Fuel",
      slug: "g-fuel",
      value: "166754",
      count: 2,
    },
    {
      name: "BPI Sports",
      slug: "bpi-sports",
      value: "166566",
      count: 1,
    },
    {
      name: "XTEND",
      slug: "xtend",
      value: "166643",
      count: 1,
    },
    {
      name: "English Tea Shop",
      slug: "english-tea-shop",
      value: "166695",
      count: 1,
    },
    {
      name: "Amazing Grass",
      slug: "amazing-grass-166699",
      value: "166699",
      count: 1,
    },
    {
      name: "Ölmühle Solling",
      slug: "olmuhle-solling",
      value: "166707",
      count: 1,
    },
    {
      name: "Bodylab24",
      slug: "bodylab24",
      value: "166728",
      count: 1,
    },
    {
      name: "Redcon1",
      slug: "redcon1",
      value: "166729",
      count: 1,
    },
  ],
};

type Filters = {
  filters: Array<any>;
  params?: FilterParams;
};

const Filters = ({ filters, params }: Filters) => {
  //   const manufacturerFilter = filters.find(
  //     (filter) => filter.code === "manufacturer"
  //   );
  //   const formFilter = filters.find((filter) => filter.code === "form");
  const manufacturerOptions = manufacturerFilter.options;
  const formOptions = formFilter.options;

  return (
    <>
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger> {manufacturerFilter.name}</AccordionTrigger>
          <AccordionContent>
            {manufacturerOptions.map((filter) => (
              <Link
                href={{
                  pathname: "/products",
                  query: { ...params, manufacturer: filter.value },
                }}
                className=""
                key={filter.value}
              >
                <Button
                  className="m-2"
                  variant={
                    params?.manufacturer === filter.value
                      ? "secondary"
                      : "default"
                  }
                >
                  {filter.name}
                </Button>
              </Link>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger> {formFilter.name}</AccordionTrigger>
          <AccordionContent>
            {formOptions.map((filter) => (
              <Link
                href={{
                  pathname: "/products",
                  query: { ...params, form: filter.value },
                }}
                className=""
                key={filter.value}
              >
                <Button
                  className="m-2"
                  variant={
                    params?.form === filter.value ? "secondary" : "default"
                  }
                >
                  {filter.name}
                </Button>
              </Link>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      {(params?.form || params?.manufacturer) && (
        <Link
          href={{
            pathname: "/products",
            query: {},
          }}
          className=""
        >
          <Button className="m-2" variant={"outline"}>
            Zrusit filtre
          </Button>
        </Link>
      )}
    </>
  );
};

export default Filters;
