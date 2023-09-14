import { NextApiRequest, NextApiResponse } from "next";

type Todo = {
    title: string;
};

const todos: Todo[] = [
    { title: "Todo 1" },
    { title: "Todo 2" },
    { title: "Todo 3" },
];

export default async (req: NextApiRequest, res: NextApiResponse) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    res.status(200).json(todos);
}