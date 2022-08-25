import type {NextPage} from "next"

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
        <>
            <h1> I'm Chat! </h1>
            <div>
                <h1> Hello! dfdfdf</h1>
                <h1> Hello! </h1>
                <h1> Hello! </h1>
                <h1> Hello! </h1>
                <h1> Hello! </h1>
                <h1> Hello! </h1>
                <h1> Hello! </h1>
                <h1> Hello! </h1>
                <h1> Hello! </h1>
                <h1> Hello! </h1>
                <h1> Hello! </h1>
                <h1> Hello! </h1>
                <h1> Hello! </h1>
                <h1> Hello! </h1>
                <h1> Hello! </h1>
                <h1> Hello! </h1>
            </div>
        </>
    )
}

export default Chat
