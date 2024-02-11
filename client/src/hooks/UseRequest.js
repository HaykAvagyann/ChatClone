export const UseRequest = () => {
    const post = async (url, data) => {
        let result = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        return result.json();
    };

    const get = async (url) => {
        const result = await fetch(url);
        return result.json();
    };

    const put = async (url, data) => {
        let result = await fetch(url, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        return result.json();
    };

    return { post, get, put };
};
