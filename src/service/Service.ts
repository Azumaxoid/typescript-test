
export const getTest1 = async () => {
    return getTest2();
};

const getTest2 = async () => {
    throw new Error("Typescript Error Test");
};

export const getTest3 = async () => {
    return getTest4();
};

const getTest4 = async () => {
    return "hoge";
};