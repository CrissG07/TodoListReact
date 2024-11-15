import { useEffect, useState } from "react";


function useLocalStorage(itemName, initialValue) {

    const [item, setItem] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    useEffect(() => {
        setTimeout(() => {
            const localStorageItem = localStorage.getItem(itemName)

            let parsedItem;
            try {
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue))
                    parsedItem = initialValue
                } else {
                    parsedItem = JSON.parse(localStorageItem)
                    setItem(parsedItem);
                }
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(true)
            }

        }, 2000)
    }, []);






    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem)
    }

    return { item, saveItem, loading, error };
}

export default useLocalStorage;


const defaultTodo = [
    { text: 'hacer el almuerzo', completed: true },
    { text: 'Tomarme la foto', completed: false },
    { text: 'Comer algo', completed: true },
  ];
  const stringfiedTodos = JSON.stringify(defaultTodo)
  
  