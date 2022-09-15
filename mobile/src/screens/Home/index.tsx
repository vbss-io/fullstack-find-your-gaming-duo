import { View, Image, FlatList } from 'react-native';
import { useEffect, useState } from 'react';

import logoImg from '../../assets/logo-nlw-esports.png';

import { Heading } from '../../components/Heading';
import { GameCard, GameCardProps } from '../../components/GameCard';

import { styles } from './styles';

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  useEffect(() => {
    fetch('http://192.168.1.109:3000/games')
      .then(response => response.json())
      .then(data => setGames(data));
  }, []);

  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />
      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList
        data={games}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <GameCard
            data={item}
          />
        )}
        showsVerticalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentList}
      />
    </View>
  );
}