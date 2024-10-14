import { useState } from "react";
import toast from "react-hot-toast";

const useGenerateQuestion = () => {
    const [loading, setLoading] = useState(false);

    const generateQuestion = async ({ context, answer }) => {
        const success = handleInputErrors({
            context,
            answer,
        });

        if (!success) return;

        setLoading(true);

        try {
            const res = await fetch(
                "https://mryeti-q-tips-api.hf.space/getquestion",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        context,
                        answer,
                    }),
                }
            );

            const data = await res.json();
            // console.log("data", data);

            if (!res.ok) {
                throw new Error("Error! Please try again.");
            }

            // success message
            toast.success("Question generated!");

            return data.question;
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, generateQuestion };
};

export default useGenerateQuestion;

function handleInputErrors({ context, answer }) {
    if (!(context && answer)) {
        console.log(context, answer);
        toast.error("Please fill all the fields");
        return false;
    }

    return true;
}
