import { useState } from "react";
import useGenerateQuestion from "../hooks/useGetQuestion";

const Home = () => {
    const [context, setContext] = useState("");
    const [answer, setAnswer] = useState("");
    const [question, setQuestion] = useState(null);

    const { loading, generateQuestion } = useGenerateQuestion();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setQuestion(null);
        const que = await generateQuestion({ context, answer });
        setQuestion(que);
    };

    return (
        <div className="flex flex-col items-center justify-center h-full lg:w-[50%] sm:w-[70%] mx-auto my-10">
            <div className="w-full h-[70%] p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-[#646EE4] mb-6">
                    Q-tips
                    <span className="text-gray-300 ml-4">
                        QuestionGenerator
                    </span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label p-2 ">
                            <span className="label-text text-lg font-semibold text-gray-400">
                                Context
                            </span>
                        </label>
                        <textarea
                            value={context}
                            onChange={(e) => setContext(e.target.value)}
                            className="textarea textarea-bordered min-h-40 w-full text-lg text-gray-300"
                            placeholder="Enter your context paragraph"
                        ></textarea>
                    </div>

                    <div>
                        <label className="label p-2 mt-4">
                            <span className="text-lg label-text font-semibold text-gray-400">
                                Answer
                            </span>
                        </label>
                        <input
                            type="text"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            placeholder="Enter the answer"
                            className="w-full input input-bordered h-10 text-lg text-gray-300"
                        />
                    </div>

                    <div className="flex items-center justify-center">
                        <button className="btn btn-active btn-primary my-6 text-base py-2 min-w-[128px]">
                            {loading ? (
                                <span className="loading loading-spinner" />
                            ) : (
                                "Generate"
                            )}
                        </button>
                    </div>
                </form>

                {question ? (
                    <div>
                        <label className="label p-2">
                            <span className="text-lg label-text font-semibold text-gray-400">
                                Question
                            </span>
                        </label>
                        <label className="w-full input input-bordered h-10 text-lg border-gray-600 bg-[#1D232A] py-4 text-gray-300 flex items-center">
                            {question}
                        </label>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default Home;
