import React from 'react';
import * as Models from '../models';
import * as Modules from '../modules';
import { View, Text, FlatList } from 'react-native';

const ListItem = (item: Models.ItemModel) => (
    <View key={item.id}><Text>{item.title}</Text></View>
)

interface State {
    data: Models.ItemModel[];
}
export default class FlatListView extends React.Component<any, State> {

    constructor(props: any) {
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        Modules.List.fetchList()
            .then(payload => {
                if (payload.data != null) {
                    this.setState({
                        data: payload.data,
                    });
                }
            }).catch(e => {
                console.error(e);
            });
    }
    render() {
        return (
            <FlatList<Models.ItemModel>
                data={this.state.data}
                renderItem={({item}) => ListItem(item)}
            />
        )
    }
}