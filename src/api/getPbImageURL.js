



export function getPbImageURL(item, fileName = 'photo'){
    return `${import.meta.env.VITE_PB_URL}/api/files/${item.collectionId}/${item.id}/${item[fileName]}`
}