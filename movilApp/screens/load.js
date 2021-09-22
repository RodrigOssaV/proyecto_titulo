import React, {useState, useEffect} from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { useIsFocused } from "@react-navigation/native";

import { getLoads } from '../services/load'; /* API services */
import LoadItem from "../components/loadItem"; /* Component load */

const load = () => {

    const [loads, setLoads] = useState([]);
    const [refreshing, setRefreshing] = useState(false)
    const isFocused = useIsFocused();

    const loadLoad = async () => {
        const data = await getLoads();
        setLoads(data)
    };

    useEffect(() => {
        loadLoad();
    }, [isFocused])

    const renderLoad = ({ item }) => {
        return <LoadItem load = {item}/>
    }

    const onRefresh = React.useCallback( async () => {
        setRefreshing(true);
        await loadLoad();
        setRefreshing(false);
    })

    return (
        <FlatList 
            data = {loads}
            keyExtractor = {(item) => item.id_load + ''}
            renderItem = {renderLoad}
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

export default load
