import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


function Acordeon() {
    return(
        <>
            <Accordion  type="single" collapsible className="w-96">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Desplegable numero 1</AccordionTrigger>
                    <AccordionContent>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate delectus doloremque modi nostrum recusandae. Atque culpa doloremque inventore iure neque, nisi nulla omnis perspiciatis praesentium quibusdam soluta tenetur velit voluptates.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Desplegable numero 2</AccordionTrigger>
                    <AccordionContent>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, alias, assumenda culpa dolorum error est exercitationem id laudantium necessitatibus, nesciunt quia ratione veritatis voluptate. Dolore itaque nisi odit ratione vel.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Desplegable numero 3</AccordionTrigger>
                    <AccordionContent>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dicta distinctio est fugiat, illo ipsam minus, perferendis rem rerum, saepe sequi similique tempora totam voluptas voluptate? Illo perferendis porro temporibus.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </>
    )
}

export default Acordeon