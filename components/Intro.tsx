import Image from "next/image";
import { BoltIcon, ChatBubbleBottomCenterTextIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

const Intro = () => {

    const features = [
        {
            name: 'Tons of job opportunities',
            description:
                '',
            icon: GlobeAltIcon,
        },
        {
            name: 'No Cost or Fees',
            description:
                '',
            icon: ScaleIcon,
        },
        {
            name: 'Fast Response',
            description:
                '',
            icon: BoltIcon,
        },
        {
            name: 'Connect with companies',
            description:
                '',
            icon: ChatBubbleBottomCenterTextIcon,
        },
    ]
    return (
        <div className="overflow-hidden py-20 sm:py-20 lg:pb-32 xl:pb-36">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
                    <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
                        <h1 className="text-4xl font-extrabold text-gray-900">
                            <span className="bloc tracking-tight">Looking for a job?</span>
                            <br></br>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-success to-primary">We&apos;re here to help</span>
                        </h1>
                        <p className="mt-4 text-xl text-gray-500">
                            Tell us who you are and what you’re looking for – we’ll find opportunities you’ll love. Stop searching job boards and start getting interviews.
                        </p>
                    </div>
                    {/*Divide Between Top Intro and Middle Intro */}
                    <div className="relative lg:pt-20 sm:mt-0 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
                        <div className="relative mx-auto max-w-[500px]">
                            <div className="py-9">
                                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                    <div className="mt-10">
                                        <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
                                            {features.map((feature) => (
                                                <div key={feature.name} className="relative">
                                                    <dt>
                                                        <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-content">
                                                            <feature.icon className="h-6 w-6" aria-hidden="true" />
                                                        </div>
                                                        <p className="ml-16 text-lg text font-bold leading-6 text-black">{feature.name}</p>
                                                    </dt>
                                                    <dd className="mt-2 ml-16 text-base text-[gray-500]">{feature.description}</dd>
                                                </div>
                                            ))}
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Divide Between Middle Intro and End Intro */}
                    <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
                        <p className="text-center text-sm font-semibold text-gray-900 lg:text-left mt-2">Featured Companies</p>
                        <ul role="list" className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-x-10 gap-y-8 lg:mx-0 lg:justify-start">
                            <li className="flex filter grayscale"><Image alt="Ebay" src="/media/ebay-logo.svg" decoding="async" data-nimg="future" className="h-8" loading="lazy"  width="82" height="32" /></li>
                            <li className="flex filter grayscale"><Image alt="Paloalto Networks" src="/media/paloalto-logo.svg" decoding="async" data-nimg="future" className="h-8" loading="lazy"  width="181" height="32" /></li>
                            <li className="flex filter grayscale"><Image alt="SAP" src="/media/sap-logo.svg" decoding="async" data-nimg="future" className="h-8" loading="lazy"  width="100" height="35" /></li>
                            <li className="flex filter grayscale xl:block"><Image alt="PNC" src="/media/PNClogo.svg" decoding="async" data-nimg="future" className="h-8" loading="lazy"  width="120" height="32" /></li>
                            <li className="flex filter grayscale"><Image alt="General Mills" src="/media/general-mills-logo.svg" decoding="async" data-nimg="future" className="h-8" loading="lazy"  width="95" height="32" /></li>
                            <li className="flex filter grayscale"><Image alt="Estée Lauder Companies" src="/media/estee_lauder-logo.svg" decoding="async" data-nimg="future" className="h-8" loading="lazy"  width="50" height="32" /></li>
                            <li className="flex filter grayscale"><Image alt="Ernst Young" src="/media/ernst-young-logo.svg" decoding="async" data-nimg="future" className="h-8" loading="lazy"  width="100" height="40" /></li>
                            <li className="flex filter grayscale xl:block"><Image alt="ABInbev" src="/media/ABInbev-logo.svg" decoding="async" data-nimg="future" className="h-8" loading="lazy"  width="132" height="32" /></li>
                            <li className="flex filter grayscale"><Image alt="Educational Testing Service" src="/media/ets-logo.svg" decoding="async" data-nimg="future" className="h-8" loading="lazy"  width="100" height="32" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;