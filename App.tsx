/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {
  useContext,
  createContext,
  ReactNode,
  useState,
  type PropsWithChildren,
} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import ConcertCard, {
  IConcertCard,
  IConcertCardSimulation,
  TicketSimulation,
} from './Components/ConcertCard';

const example: IConcertCard = {
  bandName: 'Nome da Banda',
  country: 'País',
  city: 'Cidade',
  date: new Date(),
  ticket: {value: 20.01, type: 'Platinum'},
};

const example2: IConcertCardSimulation = {
  bandName: 'Nome da Banda',
  country: 'País',
  city: 'Cidade',
  date: new Date(),
  ticket: {value: 20.01, type: 'Platinum', amount: 0},
};

const ticketSimulation: IConcertCardSimulation[] = [example2, example2];

interface ContextProps {
  children: ReactNode;
}

interface TicketsContext {
  tickets: IConcertCardSimulation[];
  setTickets: React.Dispatch<IConcertCardSimulation[]>;
}

const TicketsContext = createContext<TicketsContext>({} as TicketsContext);

const TicketsProvider = ({children}: ContextProps) => {
  const [tickets, setTickets] =
    useState<IConcertCardSimulation[]>(ticketSimulation);

  return (
    <TicketsContext.Provider value={{tickets, setTickets}}>
      {children}
    </TicketsContext.Provider>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [list, setList] = useState(ticketSimulation);
  const {} = useContext(TicketsContext);
  return (
    <SafeAreaView style={backgroundStyle}>
      <TicketsProvider>
        <Text style={styles.text}>Ingressos Disponíveis</Text>
        <FlatList
          contentContainerStyle={{
            alignItems: 'center',
            width: '100%',
            borderColor: 'blue',
            borderWidth: 1,
          }}
          data={list}
          renderItem={({item, index}) => (
            <ConcertCard
              {...item}
              index={index === 0 || index === list.length - 1}
            />
          )}
        />
        <Text style={styles.text}>Ingressos Comprados</Text>
      </TicketsProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  text: {
    textAlign: 'center',
  },
});

export default App;
