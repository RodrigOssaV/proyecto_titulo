import React, {useState, useEffect} from 'react'
import { FlatList } from 'react-native'
import { useIsFocused } from "@react-navigation/native";

import { getSuppliers } from "../services/supplier";
import SupplierItem from "../components/supplierItem";

const supplier = () => {

    const [suppliers, setSupplier] = useState([]);
    const isFocused = useIsFocused();

    const loadSupplier = async () => {
        const data = await getSuppliers();
        setSupplier(data);
    }

    useEffect(() => {
        loadSupplier();
    }, [isFocused])

    const renderItem = ({item}) => {
        return <SupplierItem supplier = {item}/>
    }

    return (
        <FlatList 
            data = {suppliers}
            keyExtractor = {(item) => item.id_supplier +''}
            renderItem = {renderItem}
        />
    )
}

export default supplier
