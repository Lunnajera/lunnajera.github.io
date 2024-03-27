import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { v4 as uuid } from "uuid";

const ColumnData = [
    {
        id: uuid(),
        title: "Eficiencia Operativa",
        content:
            "Optimiza tus procesos internos y aumenta la eficiencia de tu empresa. Con nuestras soluciones de gestión de datos, podrás identificar y eliminar cuellos de botella, reducir costos y mejorar la productividad en toda la organización.",
        align: "right",
        image: "/logo_mobil.png"
    }
];

export const Columns_clients = () => {
    return (
        <SectionContainer className="benefits-lists grid gap-x-8 gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16">
            {ColumnData.map((item) => (
                <div
                id={item.id}
                key={item.id}
                className="process-item--container grid md:grid-cols-2 gap-y-8"
            >
                <div
                    className={`process-item--image rounded-3xl ${
                        item.align === "left" ? "md:order-1" : ""
                    }`}
                >
                    <Image
                        src={item.image}
                        width={160}
                        height={38}
                        objectFit="cover"
                        alt="Process Banner 1"
                        className="drop-shadow-xl w-full offset-y-0 offset-x-8 blur-16"
                    />
                </div>
                <div
                    className={`process-item--content ${
                        item.align === "left"
                            ? "md:pr-16 lg:pr-24 xl:pr-32 ml-auto"
                            : "md:pl-16 lg:pl-24 xl:pl-32  mr-auto"
                    } my-auto content text-black/60`}
                >
                    <h3 className="mb-6 h4 md:h3 font-semibold text-black">
                        {item.title}
                    </h3>
                    <p>{item.content}</p>
                    <ul className="process-item--list space-y-3">
                        {item.listItems?.length &&
                            item.listItems.map((listItem) => (
                                <li
                                    id={listItem.id}
                                    key={listItem.id}
                                    className="inline-grid grid-flow-col-dense"
                                >
                                    <Icon
                                        icon="ph:seal-check-bold"
                                        className="w-6 h-6 text-secondary-500 mr-2"
                                    />
                                    {listItem.content}
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
            ))}
        </SectionContainer>
    );
};
