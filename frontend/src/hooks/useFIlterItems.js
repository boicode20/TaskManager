export const useFilterItems = () =>{
    
    const handleSearchItems = (search,originalItems,setCopyItems) =>{
        const value = search.toLowerCase()
        if(value==='') return setCopyItems(originalItems)
        const filtered = originalItems.filter((item) =>
            item.name.toLowerCase().includes(value)
        );
        setCopyItems(filtered);
    }

    const handleStatusItems = (status,originalItems,setCopyItems) =>{
        const value = status.toLowerCase()
        if(value==='all') return setCopyItems(originalItems)
        const filtered = originalItems.filter((item) =>
            item.status.toLowerCase() === value
        );
        setCopyItems(filtered);
    }


    return {handleSearchItems,handleStatusItems}
}