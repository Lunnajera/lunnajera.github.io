import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { v4 as uuid } from "uuid";

const ColumnData = [
    {
        id: uuid(),
        title: "Misión:",
        content:
        "Potenciar el valor de los datos para empresas en México, ofreciendo soluciones integrales de consultoría que transformen la información en insights accionables, impulsando así la toma de decisiones estratégicas y el crecimiento empresarial."
    },
    {
        id: uuid(),
        title: "Visión:",
        content:
        "Ser el referente líder en consultoría de gestión de datos en México, reconocidos por nuestra capacidad para generar valor tangible a través de soluciones innovadoras y personalizadas que maximicen el potencial de los datos de nuestros clientes, impulsando su éxito a nivel nacional e internacional."
    },
    {
        id: uuid(),
        title: "Compromiso con la excelencia:",
        content:
        "Nos comprometemos a mantener los más altos estándares de calidad en nuestros servicios y soluciones, buscando continuamente la excelencia en cada aspecto de nuestro trabajo."
    },
    {
        id: uuid(),
        title: "Empatía y colaboración:",
        content:
        "Valoramos la escucha activa, la empatía y la colaboración como pilares fundamentales en nuestra relación con los clientes, colegas y socios, trabajando juntos para alcanzar resultados óptimos."
    },
    {
        id: uuid(),
        title: "Innovación continua:",
        content:
        "Nos desafiamos a nosotros mismos a pensar de manera creativa y a adoptar tecnologías emergentes para ofrecer soluciones innovadoras que anticipen las necesidades futuras de nuestros clientes."
    },
    {
        id: uuid(),
        title: "Integridad y ética:",
        content:
        "Actuamos con integridad, honestidad y ética en todas nuestras interacciones, manteniendo la confianza y el respeto de nuestros clientes, colaboradores y la comunidad en general."
    },
    {
        id: uuid(),
        title: "Responsabilidad social y ambiental:",
        content:
        "Nos comprometemos a operar de manera sostenible, minimizando nuestro impacto ambiental y contribuyendo al desarrollo social y económico de las comunidades en las que operamos, con un enfoque en la equidad y la inclusión."
    }
];

export const Columns = () => {
    return (
        <SectionContainer className="benefits-lists grid gap-x-8 gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16">
            {ColumnData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="benefits-list--item text-[#737373] text-left"
                >
                    <Icon icon={item.icon} className="mb-4 w-10 h-10 my-2" />
                    <h3 className="text-xl mb-2 font-medium text-black">
                        {item.title}
                    </h3>
                    <p>{item.content}</p>
                    <o className="flex">
                        <Icon
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            className="h-10 mr-1 text-secondary-500"
                        />
                    </o>
                </div>
            ))}
        </SectionContainer>
    );
};
