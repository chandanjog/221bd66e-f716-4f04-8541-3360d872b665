import {Tab} from '@headlessui/react'
import {useQuery} from 'react-query';
import axios from 'axios';
import {groupBy} from 'lodash'
import React, {Fragment, useContext} from "react";
import CountryFlag from "@/app/components/countryFlag";
import {CountryContextData} from "@/app/context/countryContext";

export interface CountryData {
    alpha2: string;
    alpha3: string;
    countryCode: string;
    id: number;
    intermediateRegion: string;
    intermediateRegionCode: string;
    isoCode: string;
    name: string;
    region: string;
    regionCode: string;
    subRegion: string;
    subRegionCode: string;
}

interface CountryDto {
    "alpha-2": string;
    "alpha-3": string;
    "country-code": string;
    id: number;
    "intermediate-region": string;
    "intermediate-region-code": string;
    "iso_3166-2": string;
    name: string;
    region: string;
    "region-code": string;
    "sub-region": string;
    "sub-region-code": string;
}

const mapper = function mapper(from: CountryDto[]): CountryData[] {
    return from.map((original) => {
        let transformed: CountryData = {} as CountryData;
        transformed.alpha2 = original["alpha-2"];
        transformed.alpha3 = original["alpha-3"];
        transformed.countryCode = original["country-code"];
        transformed.id = original.id;
        transformed.intermediateRegion = original["intermediate-region"];
        transformed.intermediateRegionCode = original["intermediate-region-code"];
        transformed.isoCode = original["iso_3166-2"];
        transformed.name = original.name;
        transformed.region = original.region;
        transformed.regionCode = original["region-code"];
        transformed.subRegion = original["sub-region"];
        transformed.subRegionCode = original["sub-region-code"];
        return transformed;
    });
};

const fetchCountriesData = async () => {
    const {data} = await axios.get<CountryDto[]>('https://retoolapi.dev/TkEl3I/countriesdata');
    return mapper(data);
}
export default function CountryTabs() {
    const {setCountry} = useContext(CountryContextData)
    const {isLoading, error, data} = useQuery('countriesData', fetchCountriesData);

    if (isLoading) return (<div className="p-10">Loading...</div>);
    if (error) return (<div className="p-10">{`An error has occurred: ${error}`}</div>);

    const groupedData = groupBy(data, item => item.region);
    const onCountryClick = (country: CountryData) => {
        setCountry(country)
    }

    return (
        <div className="w-auto">
            <Tab.Group>
                <Tab.List className="flex flex-row items-start text-black gap-4 mx-4 border-gray-200 border-b-2">
                    {Object.keys(groupedData).sort().filter(x => x !== '').map(region => (
                        <Tab key={region} as={Fragment}>
                            {({selected}) => (
                                <div
                                    className={selected ? 'text-left border-gray-400 border-b-2 pr-36 py-2 cursor-pointer font-bold' : 'text-left pr-14 py-2 cursor-pointer'}>
                                    {region}
                                </div>
                            )}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="text-black m-4">
                    {Object.entries(groupedData).sort().filter(x => x[0] !== '').map(([region, countries]) => (
                        <Tab.Panel key={region}>
                            <ul className="grid grid-cols-4 gap-4">
                                {countries.map(country => (
                                    <li key={country.id}>
                                        <div className="flex flex-row gap-2 cursor-pointer"
                                             onClick={() => onCountryClick(country)}>
                                            <CountryFlag alpha2={country.alpha2}/>
                                            <div>{country.name}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}