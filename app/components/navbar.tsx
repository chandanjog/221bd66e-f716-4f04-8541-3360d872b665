import React from "react";
import Link from "next/link";
import CountrySwitch from './countrySwitch'
import {CountryContext} from "@/app/context/countryContext";

const Navbar = () => {
    return (
        <CountryContext>
            <div className="w-full h-20 bg-blue-800 sticky top-0">
                <div className="container mx-auto px-4 h-full">
                    <div className="flex justify-between items-center h-full">
                        <img
                            src="https://assets-global.website-files.com/6555df3aaec7caa690f44abe/65573ae9a29c07ca051da826_481B39BD-CE8E-42D1-9EC9-E29BD01DAC29_1_201_a.jpeg"
                            loading="lazy" width="80" sizes="80px" alt=""
                            srcSet="https://assets-global.website-files.com/6555df3aaec7caa690f44abe/65573ae9a29c07ca051da826_481B39BD-CE8E-42D1-9EC9-E29BD01DAC29_1_201_a-p-500.jpeg 500w, https://assets-global.website-files.com/6555df3aaec7caa690f44abe/65573ae9a29c07ca051da826_481B39BD-CE8E-42D1-9EC9-E29BD01DAC29_1_201_a-p-800.jpeg 800w, https://assets-global.website-files.com/6555df3aaec7caa690f44abe/65573ae9a29c07ca051da826_481B39BD-CE8E-42D1-9EC9-E29BD01DAC29_1_201_a-p-1080.jpeg 1080w, https://assets-global.website-files.com/6555df3aaec7caa690f44abe/65573ae9a29c07ca051da826_481B39BD-CE8E-42D1-9EC9-E29BD01DAC29_1_201_a.jpeg 1535w"
                            className="logo"/>
                        <CountrySwitch/>
                    </div>
                </div>
            </div>
        </CountryContext>
    );
};

export default Navbar;