import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useAppContext} from '../../store/app_context';
import {COLOR} from '../../constant/colors';
import {IconGoBack} from '../ui';

const UserAchieves = () => {
  const {easyTrueFalse, hardTrueFalse, quiz} = useAppContext();

  function renderUserAchieves({item}) {
    console.log(item.score);

    return (
      <View style={styles.scrollContainer}>
        <View style={{flexDirection: 'row', gap: 10}}>
          <View style={styles.levelTextContainer}>
            <Text style={styles.levelText}>{item.topic}</Text>
          </View>
          <View style={styles.levelScoreContainer}>
            <Text style={styles.levelScore}>{item.score}</Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      {/* <View style={{marginTop: 20}}>
        <Text style={styles.headerText}>EASY </Text>
        <FlatList
          data={easyTrueFalse}
          key={item => item.id}
          renderItem={renderUserAchieves}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={{marginTop: 10, height: 250}}>
        <Text style={styles.headerText}>HARD </Text>
        <FlatList
          data={hardTrueFalse}
          key={item => item.id}
          renderItem={renderUserAchieves}
          showsVerticalScrollIndicator={false}
        />
      </View> */}
      <Text style={styles.headerText}>EASY </Text>
      {
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}>
          {easyTrueFalse.map((item, i) => {
            return (
              <View
                style={{flexDirection: 'row', gap: 10, marginVertical: 4}}
                key={i}>
                <View style={styles.levelTextContainer}>
                  <Text style={styles.levelText}>{item.topic}</Text>
                </View>
                <View style={styles.levelScoreContainer}>
                  <Text style={styles.levelScore}>{item.score}</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      }
      <Text style={styles.headerText}>HARD</Text>
      {
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}>
          {hardTrueFalse.map((item, i) => {
            return (
              <View
                style={{flexDirection: 'row', gap: 10, marginVertical: 4}}
                key={i}>
                <View style={styles.levelTextContainer}>
                  <Text style={styles.levelText}>{item.topic}</Text>
                </View>
                <View style={styles.levelScoreContainer}>
                  <Text style={styles.levelScore}>{item.score}</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      }
      {/* <View
        style={{
          // bottom: 0,
          right: 20,
          width: '100%',
          alignItems: 'flex-end',
          marginTop:30
        }}>
        <IconGoBack />
      </View> */}
    </View>
  );
};

export default UserAchieves;

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: COLOR.darkBlue + 90,
    marginHorizontal: 60,
    borderRadius: 8,
    paddingVertical: 6,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    color: COLOR.ocean,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 10,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    // gap: 5,
    // height:'60%'
    // flexGrow:1
    // flex: 1,
    height: 330,
  },
  levelContainer: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
    alignItems: 'center',
  },
  levelTextContainer: {
    backgroundColor: COLOR.green + 90,
    padding: 5,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  levelText: {
    fontSize: 20,
    color: COLOR.ocean,
    fontWeight: '700',
    textAlign: 'center',
  },
  levelScoreContainer: {
    backgroundColor: COLOR.green + 90,
    borderRadius: 8,
    paddingVertical: 15,
    width: '10%',
    alignItems: 'center',
    paddin: 5,
  },
  levelScore: {
    fontWeight: '700',
    color: COLOR.ocean,
    fontSize: 20,
  },
});
