import { toast } from "react-toastify";

const getStoredReadList = () => {
    const storedListStr = localStorage.getItem("read-list");
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    } else {
        return [];
    }
}

const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();
    if (storedList.includes(id)) {
        toast.error('Book already Exist !');

    } else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem("read-list", storedListStr);
        toast.success('Succesfullt Add !');
    }
}

const getStoredWishList = () => {
    const storedListStr = localStorage.getItem("wish-list");
    if (storedListStr) {
        return JSON.parse(storedListStr);
    } else {
        return [];
    }
}

const addToStoredWishList = (id) => {
    const storedList = getStoredWishList();
    if (storedList.includes(id)) {
        toast.error('Book already Exist !');
    } else {
        storedList.push(id);
        localStorage.setItem("wish-list", JSON.stringify(storedList));
        toast.success('Succesfullt Add !');
    }
}

export { addToStoredReadList, getStoredReadList, addToStoredWishList, getStoredWishList }