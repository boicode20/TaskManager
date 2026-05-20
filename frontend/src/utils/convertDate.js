export const convertDate = (d) =>{
    const formattedDate = new Date(d).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    })
    return formattedDate
}