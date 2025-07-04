export const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);
    const formattedDate = date.toLocaleString("ru-RU");
    return formattedDate;
};
