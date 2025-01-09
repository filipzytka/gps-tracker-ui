import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function CustomAccordion() {
    return (
        <div className="mx-auto items-center  max-w-screen-md">
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>How accurate is the GPS tracking?</AccordionTrigger>
                    <AccordionContent>
                        Our GPS tracking devices offer high-precision location data, ensuring accurate monitoring of your targets in real-time.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Can I track multiple devices at once?</AccordionTrigger>
                    <AccordionContent>
                        Yes! Our system supports tracking multiple devices simultaneously, so you can monitor several vehicles or individuals at once.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>How secure is the data?</AccordionTrigger>
                    <AccordionContent>
                        We prioritize security with end-to-end encryption, ensuring that your tracking data remains private and protected.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

        </div>
    )
}

export default CustomAccordion