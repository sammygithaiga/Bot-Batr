import { useState } from "react";
import { BotCollection } from "./pages/bots/BotCollection"
import { Navbar } from "./pages/navbar/Navbar"
import { YourBotArmy } from "./pages/bots/YourBotArmy";

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
    <>
    <Navbar />
    <YourBotArmy recruitedBots={recruitedBots} dismissBot={dismissBot}/>
    <BotCollection recruitBot={recruitBot}/>
    </>
  )
}

export default App
