import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {useState, useEffect} from 'react';
import {updateProfileAsync} from '../../store/useStorageUtils';
import {COLOR} from '../../constant/colors';
import {PickUserImage} from '../ui';

const AboutUser = ({data}) => {
  const [isRename, setIsRename] = useState(false);
  const [profileName, setProfileName] = useState(data.name);
  const [profileImage, setProfileImage] = useState(data.image);
  

  const nameChange = async () => {
    await updateProfileAsync('name', profileName);
    setIsRename(false);
  };

  const replaceImage = async image => {
    setProfileImage(image);
    await updateProfile('image', image);
  };

  return (
    <View>
      {isRename ? (
        <View
          style={{
            justifyContent: 'center',
            flex: 1,
          }}>
          <TextInput
            value={profileName}
            onChangeText={setProfileName}
            style={styles.input}
          />
          <View>
            <TouchableOpacity
              onPress={nameChange}
              style={styles.saveChangesBtn}>
              <Text style={styles.btnText}>Save Changes</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={{alignItems: 'center', flex: 1, marginTop: 20, gap: 30}}>
          <PickUserImage saveImage={image => replaceImage(image)}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image source={{uri: profileImage}} style={styles.image} />
              <Text style={{position: 'absolute', fontSize: 18}}>
                Choose Photo
              </Text>
            </View>
          </PickUserImage>
          <TouchableOpacity onPress={() => setIsRename(true)}>
            <Text style={styles.textName}>{profileName}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default AboutUser;

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: 200,
    width: 300,
    borderRadius: 10,
    borderWidth: 1,
    position: 'relative',
    zIndex: 2,
    borderRadius: 10,
  },
  textName: {
    fontSize: 36,
    fontWeight: '800',
    color: COLOR.yellow,
    letterSpacing: 5,
  },
  input: {
    borderWidth: 1,
    backgroundColor: COLOR.yellow,
    paddingHorizontal: 10,
    marginVertical: 10,
    fontSize: 20,
    borderRadius: 10,
    paddingVertical: 10,
    minWidth: 100,
    maxWidth: 250,
    borderRadius: 90,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 22,
    color: COLOR.ocean,
    padding: 5,
    fontWeight: '600',
    paddingHorizontal: 10,
  },
  saveChangesBtn: {
    alignItems: 'center',
    backgroundColor: COLOR.btnColor,
    borderRadius: 20,
    marginVertical: 20,
  },
});
