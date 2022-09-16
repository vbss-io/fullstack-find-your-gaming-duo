import { TouchableOpacity, View, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GameParams } from '../../@types/navigation';
import { Entypo } from '@expo/vector-icons';

import { styles } from './styles';
import { THEME } from '../../theme';
import LogoImg from '../../assets/logo-nlw-esports.png';

import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';

export function Games() {

  const navigation = useNavigation();
  const route = useRoute();
  const game = route.params as GameParams;

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              size={20}
              color={THEME.COLORS.CAPTION_300}
            />
          </TouchableOpacity>
          <Image
            source={LogoImg}
            style={styles.logo}
          />

          <View style={styles.right} />
        </View>

        <Image
          source={{ uri: game.bannerUrl}}
          style={styles.cover}
          resizeMode="cover"
        />

        <Heading
          title={game.title}
          subtitle="Conecte-se e comece a jogar"
        />
      </SafeAreaView>
    </Background>
  );
}