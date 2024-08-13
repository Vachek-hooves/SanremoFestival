import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CustomLinearGradient, ScreenLayour} from '../components/ui';
import {useAppContext} from '../store/app_context';
import {COLOR} from '../constant/colors';

const TrueFalseScreen = ({route, navigation}) => {
  const complexity = route.params;
  const {requiredLevel} = useAppContext();
  const data = requiredLevel(complexity);
  // console.log(data);
  console.log(data.map(item => item.score));

  function renderList({item}) {
    const id = item.id;

    return (
      <TouchableOpacity
        style={styles.renderListBtn}
        data={item}
        onPress={() => navigation.navigate('TrueFalseGame', {complexity, id})}>
        <Text style={styles.renderListText}>{item.topic} </Text>
      </TouchableOpacity>
    );
  }

  return (
    <CustomLinearGradient>
      <ScreenLayour>
        <Text>{complexity}</Text>
        <View style={styles.flatListContainer}>
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={renderList}
            contentContainerStyle={styles.flatListContentContainer}
          />
        </View>
      </ScreenLayour>
    </CustomLinearGradient>
  );
};

export default TrueFalseScreen;

const styles = StyleSheet.create({
  renderListBtn: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: COLOR.green,
    marginVertical: 25,
    borderEndEndRadius: 40,
    borderStartStartRadius: 40,
    // width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  renderListText: {fontWeight: '600', fontSize: 26, textAlign: 'center'},
  flatListContentContainer: {justifyContent: 'center', height: '100%'},
});
