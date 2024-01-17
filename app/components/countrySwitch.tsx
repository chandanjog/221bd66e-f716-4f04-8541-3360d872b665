'use client'

import {Menu} from '@headlessui/react'
import {ChevronDownIcon} from '@heroicons/react/20/solid'
import CountryTabs from "@/app/components/countryTabs"
import {useContext} from "react";
import React from "react";
import CountryFlag from "@/app/components/countryFlag";
import {CountryContextData} from "@/app/context/countryContext";

function CountrySwitch() {
    const {country} = useContext(CountryContextData)
    return (
        <div className="text-right">
            <Menu as="div" className="relative inline-block text-left ">
                <div>

                    <Menu.Button
                        className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">

                        {country && country.alpha2 ? <CountryFlag alpha2={country.alpha2}/> : "Select Country"}

                        <ChevronDownIcon
                            className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
                            aria-hidden="true"
                        />

                    </Menu.Button>


                    <Menu.Items
                        className="max-w-screen-2xl absolute right-0 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                        <CountryTabs/>
                    </Menu.Items>
                </div>
            </Menu>
        </div>
    )
}

export default CountrySwitch