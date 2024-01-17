import Image from "next/image";
import React from "react";
import {CountryData} from "@/app/components/countryTabs";

type CountryFlagProps = Pick<CountryData, "alpha2">;

function CountryFlag({alpha2}: CountryFlagProps) {
    return (
        <div style={{height: "25px", width: "40px"}}>
            <Image src={`/country-flags/${alpha2.toLowerCase()}.svg`}
                   alt={alpha2} width={16} height={9}
                   layout={"responsive"}/>
        </div>
    )
}

export default CountryFlag