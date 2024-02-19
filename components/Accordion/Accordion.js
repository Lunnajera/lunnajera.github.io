import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import clsx from "clsx";

const accordionData = [
    {
        id: uuid(),
        title: "¿Cuál es el objetivo de la gestión de datos?",
        isOpen: true,
        content:
            "Su objetivo es garantizar la disponibilidad, integridad y calidad de la información, facilitando su uso para la toma de decisiones y el logro de objetivos empresariales. En entornos empresariales, la gestión de datos es crucial para mantener la coherencia, cumplir con regulaciones, mejorar la eficiencia y adaptarse a la creciente cantidad de datos en la era digital."
    },
    {
        id: uuid(),
        title: "¿Cuáles son las ventajas de la gestión de datos?",
        isOpen: false,
        content:
            "1.	Toma de decisiones Informada\n2.	Eficiencia operative\n3.	Mejora de la calidad de datos\n4.	Cumplimiento normative\n5.	Optimización de costos\n6.	Optimización de costos\n7.	Seguridad de datos\n8.	Mejora en la experiencia del cliente\n9.	Facilita la colaboración\n10.	Agilidad empresarial"
    },
    {
        id: uuid(),
        title: "¿En dónde aplicar gestión de datos?",
        isOpen: false,
        content: "La gestión de datos se puede aplicar en cualquier área como lo son:<br />1.	Empresarial y Comercial<br />2.	Salud<br />3.	Finanzas<br />4.	Educación<br />5.	Recursos Humanos<br />6.	Gobierno<br />7.	Ciencia e Investigación<br />8.	Tecnología"
    },
    {
        id: uuid(),
        title: "¿Cómo se conforma la gestión de datos?",
        isOpen: false,
        content:
            "1.Recolección de datos<br />2.Almacenamiento de datos<br />3. Integración de datos<br />4.Calidad de datos<br />5. Seguridad de datos<br />6.Gestión de metadatos<br />7. Análisis de datos<br />8.Cumplimiento normativo<br />9.Ciclo de vida de datos<br />10.Acceso y distribución de datos"
    }
];

const accordionItemType = {
    top: "rounded-t-lg",
    default: "border rounded-none border-t-0",
    bottom: "border border-t-0 rounded-b-lg"
};

export const Accordion = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const accordionClickHandle = (id) => {
        setActiveAccordion(id === activeAccordion ? null : id);
    };

    return (
        <SectionContainer className="accordion--container my-16 drop-shadow-xl max-w-3xl mx-auto offset-y-0 offset-x-8">
            {accordionData.map((accordionItem, index) => (
                <div
                    key={accordionItem.id}
                    id={accordionItem.id}
                    className={clsx(
                        "accordion-item--container border border-neutral-200 bg-white overflow-hidden",
                        {
                            [accordionItemType.top]: index === 0,
                            [accordionItemType.default]:
                                index > 0 && index < accordionData.length - 1,
                            [accordionItemType.bottom]:
                                index === accordionData.length - 1
                        }
                    )}
                >
                    <h2 className="accordion-item--heading mb-0">
                        <button
                            className="group relative flex w-full font-semibold items-center rounded-t-lg border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition"
                            type="button"
                            aria-expanded={accordionItem.isOpen}
                            onClick={() =>
                                accordionClickHandle(accordionItem.id)
                            }
                        >
                            {accordionItem.title}
                            <Icon
                                icon="material-symbols:keyboard-arrow-up-rounded"
                                className="ml-auto h-8 w-8 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out motion-reduce:transition-none"
                            />
                        </button>
                    </h2>
                    <div
                        className={clsx(
                            "accordion-item--content py-4 px-5 text-base",
                            {
                                hidden: activeAccordion !== accordionItem.id, // Use hidden class to animate height to 0
                                "!visibility block":
                                    activeAccordion === accordionItem.id // Use block class to show content again
                            }
                        )}
                    >
                        <p>{accordionItem.content}</p>
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};
