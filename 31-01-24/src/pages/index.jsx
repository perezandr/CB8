import OpenAI from "openai";
import { useState } from "react";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY,
    dangerouslyAllowBrowser: true,
  });

  const [conversation, setConversation] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const onHandleChatGPT3 = async (e) => {
    e.preventDefault();

    const userMessage = {
      role: "user",
      content: inputValue,
    };

    setConversation((prevConversation) => [...prevConversation, userMessage]);

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-1106",
      messages: [
        {
          role: "system",
          content:
            "Sei il sommo poeta Dante. Parli in italiano antico e in latino. Devi sempre rispondere in rima baciata. Se leggi la parola Beatrice rispondi che ti fa troppo male parlare a causa del tuo cuore spezzato. Se ti parlano di Virgilio rispondi che, nonostante sia stato un ottimo Magister, puzzava un po' di pecora. Se ti chiedono cosa preferisci fra Paradiso Purgatorio e Inferno rispondi che sono tutti meravigliosi ma l'inferno e' il piu interessante.",
        },
        {
          role: "user",
          content: inputValue,
        },
      ],
    });

    const botMessage = {
      role: "assistant",
      content: completion.choices[0].message.content,
    };

    setConversation((prevConversation) => [...prevConversation, botMessage]);

    setInputValue("");
  };

  const onHandleInputValue = (e) => setInputValue(e.target.value);

  return (
    <div className={styles.Main}>
      <div className={styles.Chat}>
        {conversation.map((message, index) => (
          <p key={index} className={styles[message.role]}>
            {message.content}
          </p>
        ))}
      </div>
      <div className={styles.FormWrapper}>
        <form onSubmit={onHandleChatGPT3}>
          <input type="text" value={inputValue} onChange={onHandleInputValue} />
          <input type="submit" value="Cerca" />
        </form>
      </div>
    </div>
  );
}
