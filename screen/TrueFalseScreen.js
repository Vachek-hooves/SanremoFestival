import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  BlurContainer,
  IconGoBack,
  IconLock,
  ImagedBackground,
  ScreenLayour,
} from '../components/ui';
import {useAppContext} from '../store/app_context';
import {COLOR} from '../constant/colors';

const TrueFalseScreen = ({route, navigation}) => {
  const complexity = route.params;
  const {requiredLevel} = useAppContext();
  const data = requiredLevel(complexity);
  // console.log(data);
  // console.log(data.map(item => item.score));

  function renderList({item}) {
    const id = item.id;
    const disable = !item.active;

    return (
      <TouchableOpacity
        disabled={disable}
        style={[
          styles.renderListBtn,
          {
            backgroundColor: disable
              ? COLOR.lockedLevel + 90
              : COLOR.yellow + 90,
          },
        ]}
        data={item}
        onPress={() => navigation.navigate('TrueFalseGame', {complexity, id})}>
        <Text style={styles.renderListText}>{item.topic} </Text>
        {disable && <IconLock />}
      </TouchableOpacity>
    );
  }

  return (
    // <CustomLinearGradient>
    <ImagedBackground>
      <BlurContainer blurAmount={9}>
        <ScreenLayour>
          <View style={styles.complexBox}>
            <Text style={styles.complexText}>{complexity.toUpperCase()}</Text>
          </View>
          <View style={styles.flatListContainer}>
            <FlatList
              data={data}
              keyExtractor={item => item.id}
              renderItem={renderList}
              contentContainerStyle={styles.flatListContentContainer}
            />
          </View>
        </ScreenLayour>
        <IconGoBack />
      </BlurContainer>
    </ImagedBackground>
    // </CustomLinearGradient>
  );
};

export default TrueFalseScreen;

const styles = StyleSheet.create({
  renderListBtn: {
    paddingHorizontal: 40,
    borderEndEndRadius: 40,
    borderStartStartRadius: 40,
    width: '100%',
    alignItems: 'center',
    // backgroundColor: COLOR.yellow + 90,
    marginVertical: 25,
    paddingVertical: 20,
  },
  renderListText: {
    fontWeight: '600',
    fontSize: 26,
    textAlign: 'center',
    color: COLOR.ocean,
  },
  flatListContentContainer: {justifyContent: 'center', height: '100%'},
  complexBox: {
    backgroundColor: COLOR.yellow + 90,
    borderRadius: 10,
    width: '20%',
    marginTop: 10,
  },
  complexText: {
    padding: 10,
    fontWeight: '400',
    fontSize: 18,
    letterSpacing: 2,
    textAlign: 'center',
  },
});
