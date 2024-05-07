import { FaHeartbeat } from "react-icons/fa";
import { GiBrokenShield } from "react-icons/gi";
import { GiLightningTrio } from "react-icons/gi";

export const BotCard = ({ bot, onClick, onDismiss}) => {
    const handleDelete = (event) => {
        event.stopPropagation();

        fetch(`https://bot-battlr-api.vercel.app/bots/${bot.id}`, {
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            if (onDismiss) {
                onDismiss(bot.id);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    return (
        <div className="bot_card" key={bot.id} onClick={() => onClick(bot)}>
            <img src={bot.avatar_url} alt={bot.name} />
            <h2>Name : <span>{bot.name}</span></h2>
            <h3>Bot Class: <span>{bot.bot_class}</span></h3>
            <h3><FaHeartbeat />: <span style={{ color: bot.health < 70 ? 'red' : 'green' }}>{bot.health}</span></h3>
            <h3><GiLightningTrio />: <span style={{ color: bot.damage < 50 ? 'red' : 'green' }}>{bot.damage}</span></h3>
            <h3><GiBrokenShield />: <span style={{ color: bot.armor < 40 ? 'red' : 'green' }}>{bot.armor}</span></h3>
            {onDismiss && <button onClick={handleDelete} className="delete-button">X</button>}
        </div>
    );
};