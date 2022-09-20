import { FlatList, Pressable, StyleSheet, View, TextInput } from 'react-native';
import RepositoryItem from './RepositoryItem';
import theme from '../theme';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import {Picker} from '@react-native-picker/picker';


const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.backround,
  },
  picker: {
    height: 50,
    backgroundColor: theme.colors.backround,
  }
});

const ItemSeparator = () => <View style={styles.separator} />;



export const RepositoryListContainer = ({ repositories, sorting, setSorting, onEndReach }) => {
  const [filter, setFilter] = useState('')
  
  const repositoryNodes = (repositories
    ? repositories.edges.map(edge => edge.node)
    : []).filter(item => item.fullName.includes(filter))
  ;

  const navigate = useNavigate();

  function handlePress(id) {
    navigate(`/repository/${id}`)
  }

  return (
    <FlatList style={styles.container}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={<Header sorting={sorting} setSorting={setSorting} filter={filter} setFilter={setFilter}/>}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
      renderItem={({ item  }) => (
        <Pressable onPress={() => handlePress(item.id)}>
          <RepositoryItem item={item}/>
        </Pressable>
  
      )}
    />
  );
};

const RepositoryList = () => {
  const [sorting, setSorting] = useState();
  const { repositories, refetch, fetchMore } = useRepositories(sorting, 8);

  const onEndReach = () => {
    fetchMore();
  };

  useEffect(() => {
    refetch()
  }, [sorting])
  
  return <RepositoryListContainer repositories={repositories} sorting={sorting} setSorting={setSorting} onEndReach={onEndReach}/>;
};

const SortingPicker = ({sorting, setSorting}) => <Picker
  selectedValue={sorting}
  style={styles.picker}
  onValueChange={(itemValue) =>
    setSorting(itemValue)
  }>
  <Picker.Item label="Latest" value="latest" />
  <Picker.Item label="Best" value="best" />
  <Picker.Item label="Worst" value="worst" />
</Picker>

const Search = ({filter, setFilter}) => <TextInput placeholder='filter' value={filter} onChangeText={text => setFilter(text)}/>

const Header = ({sorting, setSorting, filter, setFilter}) => <View>
  <Search filter={filter} setFilter={setFilter}/>
  <SortingPicker sorting={sorting} setSorting={setSorting} />
</View>


export default RepositoryList;