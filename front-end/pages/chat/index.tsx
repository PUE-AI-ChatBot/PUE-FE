import type {NextPage} from "next"
import Navigation from "../../application/navigation"

export interface IChat {
    isUser: boolean;
    message: string;
    date: Date;
    option?: string;
    emotion?: "Positive" | "Negative" | "Sad" | "";
    hasError: boolean;
}

const Chat: NextPage = () => {
    return (
        <Navigation>
            <h1> I'm Chat! </h1>
            <div>
                <h1> Hello! </h1>
                <h1> Hello! </h1>
                <h1> Hello! </h1>
                <h1> Hello! </h1>
                <h1> Hello! </h1>
            </div>
        </Navigation>
    )
}

export default Chat
