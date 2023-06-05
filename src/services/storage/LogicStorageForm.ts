const NEW_ITEM = "newItem"


export const getNewItem = (): "datos del form" => {
  const newItem = window.localStorage.getItem(NEW_ITEM)
  return newItem ? JSON.parse(newItem) : []
}

export const setNewItem = (newItem: "form") => {
  window.localStorage.setItem(NEW_ITEM, JSON.stringify(newItem))
}