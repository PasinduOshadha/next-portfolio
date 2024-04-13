import React from 'react';
import '../../styles/theme-styles.css';

import Image from 'next/image';
import Link from 'next/link';
import Confetti from '../../components/ConfettiComponent/Confetti';

function page() {

    return (
        <main className="bg-[#400708] text-white">
            <section className="container mx-auto h-screen max-h-screen grid place-items-center">
                <div className="wish-wrapper relative w-full lg:min-w-[300px] lg:max-w-[550px] h-full lg:h-auto lg:min-h-[400px] lg:max-h-[700] mx-auto my-auto lg:rounded-xl bg-[#560E0F] flex flex-col justify-end items-center">
                    <Link href={'/'} className="bg-white text-[#400708] px-4 py-2 rounded-full text-sm mb-12 mr-auto ml-4 mt-6 flex items-center gap-1">
                        <Image src={'/ny-assets/arrow-left.svg'} alt='Back' width={16} height={16} className="" />
                        <span>Back to Home</span>
                    </Link>
                    <div className="text-contents px-8">
                        <div className="line-2 font-fm-arjun text-[28px] text-center leading-8 mb-4 lg:w-[300px] lg:mx-auto">
                            ,enqjd jQ isxy, iy yskaÿ w¨;a wjqreoao Tn ieug iduh i;=g mssß
                        </div>
                        <div className="line-2 font-fm-arjun text-[60px] text-center leading-[65px]">
                            iqN <br /> w¨;a wjqreoaola fõjd
                        </div>
                    </div>
                    <Image src={'/ny-assets/new-year-img.svg'} alt='New Year' width={500} height={500} className="w-full h-auto lg:w-[400px] mt-auto z-20" />
                    <Image src={'/ny-assets/mandala-art.png'} alt='New Year' width={300} height={300} className="w-full h-auto lg:w-[300px] mt-auto absolute top-20 lg:top-0 saturate-50 brightness-100 opacity-20" />
                    <div className="absolute left-0 top-0 w-full h-full z-10 bg-blue">
                        <Confetti />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default page