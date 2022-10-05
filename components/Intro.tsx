const Intro = () => {
    return(
        <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
                    <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
                        <h1 className="text-4xl font-medium tracking-tight text-gray-900">
                            <span className="block">Looking for a job?</span>
                            <span className="block text-primary">We&apos;re here to help</span>
                        </h1>
                        <p className="mt-4 text-xl text-gray-500">
                            By using our platform, you can find the right job for you. We&apos;re here to help you find the right job for you.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;