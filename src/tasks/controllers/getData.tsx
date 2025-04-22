import { Task } from "../components/columns";

export async function getData(): Promise<Task[]> {
    // Fetch data from your API here.
    return [
        {
            id: "1a2b3c4d",
            title: "Planificar reunión semanal",
            description: "Organizar la agenda para la reunión del equipo.",
            status: "pendiente",
            deadline: new Date("2023-10-05"),
        },
        {
            id: "2b3c4d5e",
            title: "Revisar presupuesto del proyecto",
            description: "Analizar los gastos y ajustar el presupuesto si es necesario.",
            status: "completada",
            deadline: new Date("2023-09-30"),
        },
        {
            id: "3c4d5e6f",
            title: "Actualizar documentación técnica",
            description: "Asegurarse de que la documentación esté al día con los últimos cambios.",
            status: "pendiente",
            deadline: new Date("2023-10-10"),
        },
        {
            id: "4d5e6f7g",
            title: "Enviar informe mensual",
            description: "Preparar y enviar el informe de progreso del proyecto.",
            status: "completada",
            deadline: new Date("2023-09-28"),
        },
        {
            id: "5e6f7g8h",
            title: "Capacitación en nuevas herramientas",
            description: "Asistir a la capacitación sobre las nuevas herramientas implementadas.",
            status: "pendiente",
            deadline: new Date("2023-10-15"),
        },
        {
            id: "6f7g8h9i",
            title: "Realizar pruebas de calidad",
            description: "Ejecutar pruebas para garantizar la calidad del producto.",
            status: "pendiente",
            deadline: new Date("2023-10-08"),
        },
        {
            id: "7g8h9i0j",
            title: "Actualizar sitio web",
            description: "Implementar las últimas actualizaciones en el sitio web corporativo.",
            status: "completada",
            deadline: new Date("2023-09-25"),
        },
        {
            id: "8h9i0j1k",
            title: "Coordinar con proveedores",
            description: "Contactar a los proveedores para confirmar entregas pendientes.",
            status: "pendiente",
            deadline: new Date("2023-10-12"),
        },
        {
            id: "9i0j1k2l",
            title: "Preparar presentación para clientes",
            description: "Diseñar y preparar la presentación para la reunión con clientes.",
            status: "pendiente",
            deadline: new Date("2023-10-07"),
        },
        {
            id: "0j1k2l3m",
            title: "Auditar procesos internos",
            description: "Revisar los procesos internos para identificar áreas de mejora.",
            status: "completada",
            deadline: new Date("2023-09-20"),
        },
        {
            id: "1k2l3m4n",
            title: "Configurar nuevo servidor",
            description: "Instalar y configurar el nuevo servidor para el sistema.",
            status: "pendiente",
            deadline: new Date("2023-10-14"),
        },
        {
            id: "2l3m4n5o",
            title: "Analizar métricas de rendimiento",
            description: "Revisar las métricas de rendimiento del último trimestre.",
            status: "completada",
            deadline: new Date("2023-09-29"),
        },
    ];
    // ...
}