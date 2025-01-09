import CustomAccordion from "../accordion/accordion"

const Faq = () => {
    return (
        <div className="mx-auto py-8 sm:py-12 lg:py-16">
            <h1 className="text-center text-balance text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl my-8">
                Frequently asked questions
            </h1>
            <CustomAccordion />
        </div>
    )
}

export default Faq