export const getWorkerByID = async (id) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/workers/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                // "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        const result = response.json()
        return result
    } catch (error) {
        return Promise.reject(error.message || "Something went wrong!")
    }
}