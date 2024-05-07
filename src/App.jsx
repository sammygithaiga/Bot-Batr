import { useState } from "react";
import { BotCollection } from "./components/bots/BotCollection"
import { Navbar } from "./components/navbar/Navbar"

import {YourBotArmy} from "./components/bots/YourBotArmy"

function App() {
  const [recruitedBots, setRecruitedBots] = useState([])

    // Recruit Bot
    const recruitBot = bot => {
      if (!recruitedBots.find(recruitedBot => recruitedBot.id === bot.id)) {
        setRecruitedBots(prev => [...prev, bot]);
      }
    };

    // Dismiss Bot
    const dismissBot = bot => {
      const leftBots = recruitedBots.filter(recruitedBot => recruitedBot.id !== bot.id);
      setRecruitedBots(leftBots);
    };    


  return (
    <div>
    <Navbar />
    <YourBotArmy recruitedBots={recruitedBots} dismissBot={dismissBot}/>
    <BotCollection recruitBot={recruitBot}/>

    </div>
  )
}

export default App
