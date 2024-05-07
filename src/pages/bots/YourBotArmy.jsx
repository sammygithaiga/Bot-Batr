import army from "../../assets/army.png";
import { BotCard } from "./BotCard";

export const YourBotArmy = ({ recruitedBots, setRecruitedBots }) => {
  const dismissBot = (botId) => {
    setRecruitedBots(recruitedBots.filter((bot) => bot.id !== botId));
  };
  return (
    <div className="army_content">
      <span className="army_container">
        <h1>
          My Army{" "}
          <span>
            <img src={army} alt="Army" />
          </span>
        </h1>
      </span>
      <div className="bot_army">
        {recruitedBots.map((bot) => (
          <BotCard
            bot={bot}
            key={bot.id}
            onClick={() => {}}
            onDismiss={dismissBot}
          />
        ))}
      </div>
    </div>
  );
};
