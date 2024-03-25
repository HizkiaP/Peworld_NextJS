export const getWorkerByID = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/workers/profile`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        const result = response.json()
        return result
    } catch (error) {
        return Promise.reject(error.message || "Something went wrong!")
    }
}