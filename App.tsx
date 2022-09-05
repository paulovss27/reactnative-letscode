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
  useEffect,
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
import BoughtConcertCard from './Components/BoughtConcertCard';
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
  bandName: 'A',
  country: 'Brasil',
  city: 'São Paulo',
  date: new Date(),
  ticket: {value: 10.55, type: 'Platinum', amount: 0},
};

const example22: IConcertCardSimulation = {
  bandName: 'B',
  country: 'Canadá',
  city: 'Vancouver',
  date: new Date(),
  ticket: {value: 20.01, type: 'Platinum', amount: 0},
};

const ticketSimulation: IConcertCardSimulation[] = [
  {...example2},
  {...example22},
];

interface ContextProps {
  children: ReactNode;
}

interface TicketsContext {
  tickets: IConcertCardSimulation[];
  setTickets: React.Dispatch<IConcertCardSimulation[]>;
}

export const TicketsContext = createContext<TicketsContext>(
  {} as TicketsContext,
);

const TicketsProvider = ({children}: ContextProps) => {
  const [tickets, setTickets] = useState<IConcertCardSimulation[]>([
    example2,
    example22,
  ]);

function addTicket(type: string, ticket: IConcertCardSimulation){
setTickets(prev => [...prev, ticket]);
}

function removeTicket(type){

}
  return (
    <TicketsContext.Provider value={{tickets, setTickets}}>
      {children}
    </TicketsContext.Provider>
  );
};

function InnerApp() {

  const [list, setList] = useState(ticketSimulation);
  const {tickets} = useContext(TicketsContext);
  console.log('tickets',tickets);

  return (
    <>
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
              key={String(Math.random())}
              {...item}
              index={index === 0 || index === list.length - 1}
              position ={index}
            />
          )}
        />
        <Text style={styles.text}>Ingressos Comprados</Text>
        <FlatList
          contentContainerStyle={{
            alignItems: 'center',
            width: '100%',
            borderColor: 'blue',
            borderWidth: 1,
          }}
          data={tickets}
          renderItem={({item, index}) => (
            <BoughtConcertCard
              key={String(Math.random())}
              {...item}
              index={index === 0 || index === tickets.length - 1}
            />
          )}
        />
        <Text>Preço Total</Text>
        <Text>{'R$ ' + tickets.reduce( (prev, item) =>  {return prev + (item.ticket.type === 'Standard' ? item.ticket.value : item.ticket.type === 'Vip' ? 1.5 * item.ticket.value : 2 * item.ticket.value)},0).toFixed(2).toString().replace('.', ',')}</Text>
        </>
  );
}



const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <TicketsProvider>
        <InnerApp />
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
