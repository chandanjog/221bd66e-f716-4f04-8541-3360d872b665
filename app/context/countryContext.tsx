import React, { useState } from "react";
import { CountryData } from "@/app/components/countryTabs";

type CountryContextDataType = {
    country: CountryData;
    setCountry: React.Dispatch<React.SetStateAction<CountryData>>;
}
export const CountryContextData = React.createContext<CountryContextDataType>({} as CountryContextDataType);

type CountryContextProps = {
    children: React.ReactNode
}
export function CountryContext({ children } :CountryContextProps) {
    const [country, setCountry] = useState<CountryData>({} as CountryData);

    return (
        <CountryContextData.Provider value={{ country, setCountry }}>
            {children}
        </CountryContextData.Provider>
    );
}
