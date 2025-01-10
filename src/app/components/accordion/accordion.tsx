import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

type AccordionData = {
    value: string,
    title: string,
    text: string
}

type Props = {
    data: AccordionData[]
}

export function CustomAccordion({ data }: Props) {
    return (
        <Accordion type="single" collapsible className="mx-auto items-center  max-w-screen-md">
            {data.map((item, index) => {
                return (
                    <AccordionItem key={index} value={item.value}>
                        <AccordionTrigger>{item.title}</AccordionTrigger>
                        <AccordionContent>{item.text}</AccordionContent>
                    </AccordionItem>
                )
            })}
        </Accordion>
    )
}

export default CustomAccordion