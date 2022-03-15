import React, {ReactNode} from 'react';
import './App.css';
import ActionDeck from "./decks/action/ActionDeck";
import SummoningsDeck from "./decks/summonings/SummoningsDeck";

function App() {
  let deck : ReactNode

  if (window.location.search.indexOf('summon') >= 0) {
    deck = <SummoningsDeck />
  } else {
    deck = <ActionDeck />
  }
  return <>{deck}</>
}

export default App;
