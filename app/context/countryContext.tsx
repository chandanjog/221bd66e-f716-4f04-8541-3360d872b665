import React, { useState } from "react";
import { CountryData } from "@/app/components/countryTabs";

export const CountryContextData = React.createContext<{
    country: CountryData;
    setCountry: React.Dispatch<React.SetStateAction<CountryData>>;
}>(undefined);

export function CountryContext({ children }) {
    const [country, setCountry] = useState<CountryData>({});

    return (
        <CountryContextData.Provider value={{ country, setCountry }}>
            {children}
        </CountryContextData.Provider>
    );
}
