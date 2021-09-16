import React, {useState, useEffect} from 'react'
import { FlatList, RefreshControl } from 'react-native'
import { useIsFocused } from "@react-navigation/native";

import { getDrivers } from "../services/driver"; /* API */
import DriverItem from "../components/driverItem"; /* Component driver */
import Layout from "../styles/layout"; /* component Layout global css */

const driver = () => {

    const [drivers, setDrivers] = useState([]);
    const [refreshing, setRefreshing] = useState(false)
    const isFocused = useIsFocused();

    const loadDrivers = async () => {
        const data = await getDrivers();
        setDrivers(data);
    }

    useEffect(() => {
        loadDrivers();
    }, [isFocused]);

    const renderDriver = ({ item }) => {
        return <DriverItem driver={item}/>
    }

    const onRefresh = React.useCallback( async () => {
        setRefreshing(true)
        await loadDrivers()
        setRefreshing(false)
    })

    return (
        <FlatList 
            data = {drivers}
            keyExtractor = {(item) => item.rut + ''}
            renderItem = {renderDriver}
            refreshing = {refreshing}
            refreshControl = {
                <RefreshControl 
                    colors = {['#e879f9']}
                    onRefresh = {onRefresh}
                />
            }
        />
    )
}

export default driver
